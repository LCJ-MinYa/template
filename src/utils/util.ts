/*
 * @Author: LiChaoJun
 * @Date: 2022-04-25 10:19:51
 * @LastEditTime: 2022-04-25 10:23:30
 * @LastEditors: LiChaoJun
 * @Description: util封装函数
 */

export function replaceEmptyLine(str: string): string {
    return str.replace(/(\n[\s\t]*\r*\n)/g, '\n').replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g, '');
}
