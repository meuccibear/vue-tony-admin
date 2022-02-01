import { EleButtonProps } from '@/components/ElementPlus'

export const buttonProps = {
  ...EleButtonProps,
  /**
   * button shadow
   */
  shadow: { type: Boolean },
  /**
   * Text before icon.
   */
  preIcon: { type: String },
  /**
   * Text after icon.
   */
  sufIcon: { type: String },
  /**
   * Icon size.
   * @default: 14
   */
  iconSize: { type: Number, default: 14 },
  onClick: { type: Function as PropType<(...args) => any>, default: null },
}
