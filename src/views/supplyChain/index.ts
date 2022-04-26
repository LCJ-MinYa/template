/*
 * @Author: LiChaoJun
 * @Date: 2022-04-20 17:38:17
 * @LastEditTime: 2022-04-26 18:02:07
 * @LastEditors: LiChaoJun
 * @Description: 模板string
 */
import { replaceEmptyLine } from '@/utils/util';
interface BasicForm {
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

const baseElementTableString = (basicForm: BasicForm, columns: Array<ColumnsForm>): string => {
    console.log(columns);
    const { ref, search, formatterValue, alignCenter, showSerialNumber } = basicForm;
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
</template>
##
<script>
import { BaseElementTable } from '@/components';
export default {
    name: 'InventoryAllocation',
    components: {
        BaseElementTable,
    },
    data() {
        return {

        }
    },
}
</script>
##
<style lang="less" scoped>
</style>
`;
    return replaceEmptyLine(str);
};

export { baseElementTableString, BasicForm, ColumnsForm };
