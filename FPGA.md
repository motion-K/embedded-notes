# Verilog HDL语法

## 注意项
### Vectors
1. 向量的字节序，指最低有效位所处的索引是较低还是较高：如果是较低，则为小端序，例如[3:0]；如果是较高，则为大端序，例如[0:3]。在 Verilog 中，一旦某个向量被指定为某种特定的字节序，那么在后续使用中就必须始终遵循这一规则。例如，如果已经声明了 vec 和 wire [3:0] vec; ，那么再使用 vec[0:3] 则是非法的。保持字节序的一致性是一种良好的编程习惯，因为如果将不同字节序的向量混合使用，就可能会出现各种奇怪的错误。--from HDLBits
2. 在Verilog中，如果一个信号没有被显式声明，却在assign或模块端口连接中被使用，它会隐式地被推断为1位wire（标量）。添加编译指令
   ::: verilog
    **`default_nettype none** //让工具对隐式wire报错防止此类错误
    wire [2:0] a, c;    // Two vectors
    assign a = 3'b101;  // a = 101
    assign b = a;       // 未添加前b =   1  implicitly-created wire
    assign c = b;       // c = 001  <-- bug
    my_module i1 (d,e); // d and e are implicitly one-bit wide if not declared.
                        // This could be a bug if the port was intended to be a vector.
   :::
3. Unpacked vs. Packed Arrays未打包数组和已打包数组，“打包”指的是维度写在变量名之前，数据像打包一样紧密挤在一起；而“未打包”则是维度写在变量名之后，数据元素各自独立存放。
   ::: verilog
    reg [7:0] mem [255:0];   // 256 unpacked elements, each of which is a 8-bit packed vector of reg.
    reg mem2 [28:0];         // 29 unpacked elements, each of which is a 1-bit reg.
   :::
   