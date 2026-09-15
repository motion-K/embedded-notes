# STM32 串口中断通信实验

## 1. 硬件引脚分配
* **TX**: PA9
* **RX**: PA10
* **波特率**: 115200 8-N-1

## 2. 核心驱动代码
```c
// 串口接收中断回调函数
void HAL_UART_RxCpltCallback(UART_HandleTypeDef *huart) {
    if (huart->Instance == USART1) {
        HAL_UART_Transmit(&huart1, &rx_data, 1, 100);
        HAL_UART_Receive_IT(&huart1, &rx_data, 1);
    }
}
```