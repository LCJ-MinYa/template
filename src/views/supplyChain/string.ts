/*
 * @Author: LiChaoJun
 * @Date: 2022-04-20 17:38:17
 * @LastEditTime: 2022-04-22 15:13:59
 * @LastEditors: LiChaoJun
 * @Description: 模板string
 */
interface BaseElementTableConfigForm {
    ref?: string;
    alignCenter?: boolean;
    showSerialNumber?: boolean;
}

const baseElementTableString = (formState: BaseElementTableConfigForm): string => {
    const { ref, alignCenter, showSerialNumber } = formState;
    const str = `\
<template>
    <base-element-table
        ${ref ? `ref="${ref}"` : ''}
        ${alignCenter ? 'alignCenter' : ''}
        ${showSerialNumber ? 'showSerialNumber' : ''}
        ${showSerialNumber ? 'showSerialNumber' : ''}
        ${showSerialNumber ? 'showSerialNumber' : ''}
    >

    </base-element-table>
<template>`;
    return str.replace(/(\n[\s\t]*\r*\n)/g, '\n').replace(/^[\n\r\n\t]*|[\n\r\n\t]*$/g, '');
};

export { baseElementTableString, BaseElementTableConfigForm };
