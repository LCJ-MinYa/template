/*
 * @Author: LiChaoJun
 * @Date: 2022-04-25 10:19:51
 * @LastEditTime: 2022-04-27 17:06:54
 * @LastEditors: LiChaoJun
 * @Description: util封装函数
 */
import { CODE_NEW_LINE_REPLACE_LOGO } from '@/utils/dictionary';

export function replaceEmptyLine(str: string): string {
    return str.replace(/(\n[\s\t]*\r*\n)/g, '\n').replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g, '');
}

export function codeNewLineReplaceLogo(str: string, replaceStr?: string): string {
    const reg = new RegExp(CODE_NEW_LINE_REPLACE_LOGO, 'g');
    return str.replace(reg, replaceStr ? replaceStr : '');
}
