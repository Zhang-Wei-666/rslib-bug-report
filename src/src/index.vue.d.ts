import type { ISelectProps } from 'element-plus';
import type { MelSelectProps, MelSelectSlots, SelectInstance } from './types';
import { type Ref } from 'vue';
type __VLS_Props = MelSelectProps;
type __VLS_PublicProps = {
    'modelValue'?: ISelectProps['modelValue'];
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<MelSelectSlots> & MelSelectSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {
    selectRef: Ref<SelectInstance | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("element-plus/es/utils/index.mjs").EpPropMergeType<(BooleanConstructor | StringConstructor | ArrayConstructor | ObjectConstructor | NumberConstructor)[], unknown, unknown> | undefined) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: import("element-plus/es/utils/index.mjs").EpPropMergeType<(BooleanConstructor | StringConstructor | ArrayConstructor | ObjectConstructor | NumberConstructor)[], unknown, unknown> | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
