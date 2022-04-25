/*
 * @Author: LiChaoJun
 * @Date: 2022-04-25 10:39:40
 * @LastEditTime: 2022-04-25 10:49:43
 * @LastEditors: LiChaoJun
 * @Description: 全局类型定义
 */
// 使用，这里要注意，在vue文件中不能使用，只能在ts文件中使用
declare interface anyObjectType {
    [key: any]: any;
}

declare interface ArrayTypeWithObject<T> {
    [key: any]: any;
}
