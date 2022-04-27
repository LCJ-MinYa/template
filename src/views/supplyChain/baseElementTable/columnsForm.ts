/*
 * @Author: LiChaoJun
 * @Date: 2022-04-26 17:24:49
 * @LastEditTime: 2022-04-27 16:54:58
 * @LastEditors: LiChaoJun
 * @Description: Columns配置
 */
import { ref, reactive } from 'vue';
import { ColumnsForm } from '../index';
import { baseRules } from '@/utils/rule';

export default function columnsForm(): anyObjectType {
    const columnsRef = ref();

    const columnsFormState = reactive<ColumnsForm>({
        label: '',
        prop: '',
        width: '',
    });

    const columnsFormRules = reactive({
        label: [baseRules.required('表格标题')],
        prop: [baseRules.required('表格属性')],
        width: [baseRules.required('表格宽度'), baseRules.nums()],
    });

    const columns: Array<ColumnsForm> = reactive([]);

    const addColumns = (): void => {
        columnsRef.value
            .validate()
            .then((result: ColumnsForm) => {
                columns.push(result);
            })
            .catch(() => console.log('error'));
    };

    const resetColumns = (): void => {
        columnsRef.value.resetFields();
    };

    return {
        columnsRef,
        columnsFormState,
        columnsFormRules,
        columns,
        addColumns,
        resetColumns,
    };
}
