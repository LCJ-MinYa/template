/*
 * @Author: LiChaoJun
 * @Date: 2022-04-20 17:38:17
 * @LastEditTime: 2022-04-25 15:23:24
 * @LastEditors: LiChaoJun
 * @Description: 模板string
 */
import { replaceEmptyLine } from '@/utils/util';
interface BaseElementTableConfigForm {
    ref?: string;
    search?: boolean;
    alignCenter?: boolean;
    formatterValue?: boolean;
    showSerialNumber?: boolean;
}

interface ColumnsForm extends anyObjectType {
    label: string;
    prop: string;
    width: string;
}

const baseElementTableString = (formState: BaseElementTableConfigForm): string => {
    const { ref, search, formatterValue, alignCenter, showSerialNumber } = formState;
    const str = `\
<template>
    <base-element-table
        ${ref ? `ref="${ref}"` : ''}
        ${search ? 'search' : ''}
        ${alignCenter ? 'alignCenter' : ''}
        ${formatterValue ? 'formatterValue' : ''}
        ${showSerialNumber ? 'showSerialNumber' : ''}
    >

    </base-element-table>
<template>`;
    return replaceEmptyLine(str);
};

export { baseElementTableString, BaseElementTableConfigForm, ColumnsForm };
