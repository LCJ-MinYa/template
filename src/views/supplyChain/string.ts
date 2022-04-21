/*
 * @Author: LiChaoJun
 * @Date: 2022-04-20 17:38:17
 * @LastEditTime: 2022-04-21 17:10:35
 * @LastEditors: LiChaoJun
 * @Description: 模板string
 */
interface BaseElementTableConfigForm {
    alignCenter: boolean;
}

const baseElementTableString = (form: BaseElementTableConfigForm): string => {
    const { alignCenter } = form;
    return `\
<template>
    <base-element-table
        ${alignCenter ? 'alignCenter' : ''}
    >

    </base-element-table>
<template>`;
};

export { baseElementTableString, BaseElementTableConfigForm };
