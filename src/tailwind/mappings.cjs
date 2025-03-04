module.exports = {
  // LAYOUT

  // aspect-ratio
  'aspect-<ratio>': ([value]) => ({ aspectRatio: `"${value}"` }),
  'aspect-square': () => ({ aspectRatio: '1 / 1' }),
  'aspect-video': () => ({ aspectRatio: 'var(--aspect-ratio-video)' }),
  'aspect-auto': () => ({ aspectRatio: '"auto"' }),
  'aspect-(<custom-property>)': ([value]) => ({ aspectRatio: `"var(${value})"` }),
  'aspect-[<value>]': ([value]) => ({ aspectRatio: `"${value}"` }),

  // columns
  'columns-<number>': ([value]) => ({ columns: value }),
  'columns-auto': () => ({ columns: '"auto"' }),
  'columns-3xs': () => ({ columns: '"var(--container-3xs)"' }),
  'columns-2xs': () => ({ columns: '"var(--container-2xs)"' }),
  'columns-xs': () => ({ columns: '"var(--container-xs)"' }),
  'columns-sm': () => ({ columns: '"var(--container-sm)"' }),
  'columns-md': () => ({ columns: '"var(--container-md)"' }),
  'columns-lg': () => ({ columns: '"var(--container-lg)"' }),
  'columns-xl': () => ({ columns: '"var(--container-xl)"' }),
  'columns-2xl': () => ({ columns: '"var(--container-2xl)"' }),
  'columns-3xl': () => ({ columns: '"var(--container-3xl)"' }),
  'columns-4xl': () => ({ columns: '"var(--container-4xl)"' }),
  'columns-5xl': () => ({ columns: '"var(--container-5xl)"' }),
  'columns-6xl': () => ({ columns: '"var(--container-6xl)"' }),
  'columns-7xl': () => ({ columns: '"var(--container-7xl)"' }),
  'columns-(<custom-property>)': ([value]) => ({ columns: `"var(${value})"` }),
  'columns-[<value>]': ([value]) => ({ columns: `"${value}"` }),

  // break-after
  'break-after-auto': () => ({ breakAfter: '"auto"' }),
  'break-after-avoid': () => ({ breakAfter: '"avoid"' }),
  'break-after-all': () => ({ breakAfter: '"all"' }),
  'break-after-avoid-page': () => ({ breakAfter: '"avoid-page"' }),
  'break-after-page': () => ({ breakAfter: '"page"' }),
  'break-after-left': () => ({ breakAfter: '"left"' }),
  'break-after-right': () => ({ breakAfter: '"right"' }),
  'break-after-column': () => ({ breakAfter: '"column"' }),

  // break-before
  'break-before-auto': () => ({ breakBefore: '"auto"' }),
  'break-before-avoid': () => ({ breakBefore: '"avoid"' }),
  'break-before-all': () => ({ breakBefore: '"all"' }),
  'break-before-avoid-page': () => ({ breakBefore: '"avoid-page"' }),
  'break-before-page': () => ({ breakBefore: '"page"' }),
  'break-before-left': () => ({ breakBefore: '"left"' }),
  'break-before-right': () => ({ breakBefore: '"right"' }),
  'break-before-column': () => ({ breakBefore: '"column"' }),

  // break-inside
  'break-inside-auto': () => ({ breakInside: '"auto"' }),
  'break-inside-avoid': () => ({ breakInside: '"avoid"' }),
  'break-inside-avoid-page': () => ({ breakInside: '"avoid-page"' }),
  'break-inside-avoid-column': () => ({ breakInside: '"avoid-column"' }),

  // box-decoration-break
  'box-decoration-clone': () => ({ boxDecorationBreak: '"clone"' }),
  'box-decoration-slice': () => ({ boxDecorationBreak: '"slice"' }),

  // box-sizing
  'box-border': () => ({ boxSizing: '"border-box"' }),
  'box-content': () => ({ boxSizing: '"content-box"' }),

  // display
  inline: () => ({ display: '"inline"' }),
  block: () => ({ display: '"block"' }),
  'inline-block': () => ({ display: '"inline-block"' }),
  'flow-root': () => ({ display: '"flow-root"' }),
  flex: () => ({ display: '"flex"' }),
  'inline-flex': () => ({ display: '"inline-flex"' }),
  grid: () => ({ display: '"grid"' }),
  'inline-grid': () => ({ display: '"inline-grid"' }),
  contents: () => ({ display: '"contents"' }),
  table: () => ({ display: '"table"' }),
  'inline-table': () => ({ display: '"inline-table"' }),
  'table-caption': () => ({ display: '"table-caption"' }),
  'table-cell': () => ({ display: '"table-cell"' }),
  'table-column': () => ({ display: '"table-column"' }),
  'table-column-group': () => ({ display: '"table-column-group"' }),
  'table-footer-group': () => ({ display: '"table-footer-group"' }),
  'table-header-group': () => ({ display: '"table-header-group"' }),
  'table-row-group': () => ({ display: '"table-row-group"' }),
  'table-row': () => ({ display: '"table-row"' }),
  'list-item': () => ({ display: '"list-item"' }),
  hidden: () => ({ display: '"none"' }),
  'sr-only': () => ({
    position: '"absolute"',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: '0',
  }),
  'not-sr-only': () => ({
    position: 'static',
    width: 'auto',
    height: 'auto',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    clip: 'auto',
    whiteSpace: 'normal',
  }),

  // float
  'float-right': () => ({ float: '"right"' }),
  'float-left': () => ({ float: '"left"' }),
  'float-start': () => ({ float: '"start"' }),
  'float-end': () => ({ float: '"end"' }),
  'float-none': () => ({ float: '"none"' }),

  // clear
  'clear-left': () => ({ clear: '"left"' }),
  'clear-right': () => ({ clear: '"right"' }),
  'clear-both': () => ({ clear: '"both"' }),
  'clear-start': () => ({ clear: '"start"' }),
  'clear-end': () => ({ clear: '"end"' }),
  'clear-none': () => ({ clear: '"none"' }),

  // isolation
  isolate: () => ({ isolation: '"isolate"' }),
  'isolation-auto': () => ({ isolation: '"auto"' }),

  // object-fit
  'object-contain': () => ({ objectFit: '"contain"' }),
  'object-cover': () => ({ objectFit: '"cover"' }),
  'object-fill': () => ({ objectFit: '"fill"' }),
  'object-none': () => ({ objectFit: '"none"' }),
  'object-scale-down': () => ({ objectFit: '"scale-down"' }),

  // object-position
  'object-bottom': () => ({ objectPosition: '"bottom"' }),
  'object-center': () => ({ objectPosition: '"center"' }),
  'object-left': () => ({ objectPosition: '"left"' }),
  'object-left-bottom': () => ({ objectPosition: '"left bottom"' }),
  'object-left-top': () => ({ objectPosition: '"left top"' }),
  'object-right': () => ({ objectPosition: '"right"' }),
  'object-right-bottom': () => ({ objectPosition: '"right bottom"' }),
  'object-right-top': () => ({ objectPosition: '"right top"' }),
  'object-top': () => ({ objectPosition: '"top"' }),
  'object-(<custom-property>)': ([value]) => ({ objectPosition: `"var(${value})"` }),
  'object-[<value>]': ([value]) => ({ objectPosition: `"${value}"` }),

  // overflow
  'overflow-auto': () => ({ overflow: '"auto"' }),
  'overflow-hidden': () => ({ overflow: '"hidden"' }),
  'overflow-clip': () => ({ overflow: '"clip"' }),
  'overflow-visible': () => ({ overflow: '"visible"' }),
  'overflow-scroll': () => ({ overflow: '"scroll"' }),
  'overflow-x-auto': () => ({ overflowX: '"auto"' }),
  'overflow-y-auto': () => ({ overflowY: '"auto"' }),
  'overflow-x-hidden': () => ({ overflowX: '"hidden"' }),
  'overflow-y-hidden': () => ({ overflowY: '"hidden"' }),
  'overflow-x-clip': () => ({ overflowX: '"clip"' }),
  'overflow-y-clip': () => ({ overflowY: '"clip"' }),
  'overflow-x-visible': () => ({ overflowX: '"visible"' }),
  'overflow-y-visible': () => ({ overflowY: '"visible"' }),
  'overflow-x-scroll': () => ({ overflowX: '"scroll"' }),
  'overflow-y-scroll': () => ({ overflowY: '"scroll"' }),

  // overscroll-behavior
  'overscroll-auto': () => ({ overscrollBehavior: '"auto"' }),
  'overscroll-contain': () => ({ overscrollBehavior: '"contain"' }),
  'overscroll-none': () => ({ overscrollBehavior: '"none"' }),
  'overscroll-x-auto': () => ({ overscrollBehaviorX: '"auto"' }),
  'overscroll-x-contain': () => ({ overscrollBehaviorX: '"contain"' }),
  'overscroll-x-none': () => ({ overscrollBehaviorX: '"none"' }),
  'overscroll-y-auto': () => ({ overscrollBehaviorY: '"auto"' }),
  'overscroll-y-contain': () => ({ overscrollBehaviorY: '"contain"' }),
  'overscroll-y-none': () => ({ overscrollBehaviorY: '"none"' }),

  // position
  static: () => ({ position: '"static"' }),
  fixed: () => ({ position: '"fixed"' }),
  absolute: () => ({ position: '"absolute"' }),
  relative: () => ({ position: '"relative"' }),
  sticky: () => ({ position: '"sticky"' }),

  // top / right / bottom / left
  'inset-<number>': ([value]) => ({ inset: `"calc(var(--spacing) * ${value})"` }),
  '-inset-<number>': ([value]) => ({ inset: `"calc(var(--spacing) * -${value})"` }),
  'inset-<fraction>': ([value]) => ({ inset: `"calc(${value} * 100%)"` }),
  '-inset-<fraction>': ([value]) => ({ inset: `"calc(${value} * -100%)"` }),
  'inset-px': () => ({ inset: '"1px"' }),
  '-inset-px': () => ({ inset: '"-1px"' }),
  'inset-full': () => ({ inset: '"100%"' }),
  '-inset-full': () => ({ inset: '"-100%"' }),
  'inset-auto': () => ({ inset: '"auto"' }),
  'inset-(<custom-property>)': ([value]) => ({ inset: `"var(${value})"` }),
  'inset-[<value>]': ([value]) => ({ inset: `"${value}"` }),
  'inset-x-<number>': ([value]) => ({ insetInline: `"calc(var(--spacing) * ${value})"` }),
  '-inset-x-<number>': ([value]) => ({ insetInline: `"calc(var(--spacing) * -${value})"` }),
  'inset-x-<fraction>': ([value]) => ({ insetInline: `"calc(${value} * 100%)"` }),
  '-inset-x-<fraction>': ([value]) => ({ insetInline: `"calc(${value} * -100%)"` }),
  'inset-x-px': () => ({ insetInline: '"1px"' }),
  '-inset-x-px': () => ({ insetInline: '"-1px"' }),
  'inset-x-full': () => ({ insetInline: '"100%"' }),
  '-inset-x-full': () => ({ insetInline: '"-100%"' }),
  'inset-x-auto': () => ({ insetInline: '"auto"' }),
  'inset-x-(<custom-property>)': ([value]) => ({ insetInline: `"var(${value})"` }),
  'inset-x-[<value>]': ([value]) => ({ insetInline: `"${value}"` }),
  'inset-y-<number>': ([value]) => ({ insetBlock: `"calc(var(--spacing) * ${value})"` }),
  '-inset-y-<number>': ([value]) => ({ insetBlock: `"calc(var(--spacing) * -${value})"` }),
  'inset-y-<fraction>': ([value]) => ({ insetBlock: `"calc(${value} * 100%)"` }),
  '-inset-y-<fraction>': ([value]) => ({ insetBlock: `"calc(${value} * -100%)"` }),
  'inset-y-px': () => ({ insetBlock: '"1px"' }),
  '-inset-y-px': () => ({ insetBlock: '"-1px"' }),
  'inset-y-full': () => ({ insetBlock: '"100%"' }),
  '-inset-y-full': () => ({ insetBlock: '"-100%"' }),
  'inset-y-auto': () => ({ insetBlock: '"auto"' }),
  'inset-y-(<custom-property>)': ([value]) => ({ insetBlock: `"var(${value})"` }),
  'inset-y-[<value>]': ([value]) => ({ insetBlock: `"${value}"` }),
  'start-<number>': ([value]) => ({ insetInlineStart: `"calc(var(--spacing) * ${value})"` }),
  '-start-<number>': ([value]) => ({ insetInlineStart: `"calc(var(--spacing) * -${value})"` }),
  'start-<fraction>': ([value]) => ({ insetInlineStart: `"calc(${value} * 100%)"` }),
  '-start-<fraction>': ([value]) => ({ insetInlineStart: `"calc(${value} * -100%)"` }),
  'start-px': () => ({ insetInlineStart: '"1px"' }),
  '-start-px': () => ({ insetInlineStart: '"-1px"' }),
  'start-full': () => ({ insetInlineStart: '"100%"' }),
  '-start-full': () => ({ insetInlineStart: '"-100%"' }),
  'start-auto': () => ({ insetInlineStart: '"auto"' }),
  'start-(<custom-property>)': ([value]) => ({ insetInlineStart: `"var(${value})"` }),
  'start-[<value>]': ([value]) => ({ insetInlineStart: `"${value}"` }),
  'end-<number>': ([value]) => ({ insetInlineEnd: `"calc(var(--spacing) * ${value})"` }),
  '-end-<number>': ([value]) => ({ insetInlineEnd: `"calc(var(--spacing) * -${value})"` }),
  'end-<fraction>': ([value]) => ({ insetInlineEnd: `"calc(${value} * 100%)"` }),
  '-end-<fraction>': ([value]) => ({ insetInlineEnd: `"calc(${value} * -100%)"` }),
  'end-px': () => ({ insetInlineEnd: '"1px"' }),
  '-end-px': () => ({ insetInlineEnd: '"-1px"' }),
  'end-full': () => ({ insetInlineEnd: '"100%"' }),
  '-end-full': () => ({ insetInlineEnd: '"-100%"' }),
  'end-auto': () => ({ insetInlineEnd: '"auto"' }),
  'end-(<custom-property>)': ([value]) => ({ insetInlineEnd: `"var(${value})"` }),
  'end-[<value>]': ([value]) => ({ insetInlineEnd: `"${value}"` }),
  'top-<number>': ([value]) => ({ insetBlockStart: `"calc(var(--spacing) * ${value})"` }),
  '-top-<number>': ([value]) => ({ insetBlockStart: `"calc(var(--spacing) * -${value})"` }),
  'top-<fraction>': ([value]) => ({ insetBlockStart: `"calc(${value} * 100%)"` }),
  '-top-<fraction>': ([value]) => ({ insetBlockStart: `"calc(${value} * -100%)"` }),
  'top-px': () => ({ insetBlockStart: '"1px"' }),
  '-top-px': () => ({ insetBlockStart: '"-1px"' }),
  'top-full': () => ({ insetBlockStart: '"100%"' }),
  '-top-full': () => ({ insetBlockStart: '"-100%"' }),
  'top-auto': () => ({ insetBlockStart: '"auto"' }),
  'top-(<custom-property>)': ([value]) => ({ insetBlockStart: `"var(${value})"` }),
  'top-[<value>]': ([value]) => ({ insetBlockStart: `"${value}"` }),
  'right-<number>': ([value]) => ({ insetInlineEnd: `"calc(var(--spacing) * ${value})"` }),
  '-right-<number>': ([value]) => ({ insetInlineEnd: `"calc(var(--spacing) * -${value})"` }),
  'right-<fraction>': ([value]) => ({ insetInlineEnd: `"calc(${value} * 100%)"` }),
  '-right-<fraction>': ([value]) => ({ insetInlineEnd: `"calc(${value} * -100%)"` }),
  'right-px': () => ({ insetInlineEnd: '"1px"' }),
  '-right-px': () => ({ insetInlineEnd: '"-1px"' }),
  'right-full': () => ({ insetInlineEnd: '"100%"' }),
  '-right-full': () => ({ insetInlineEnd: '"-100%"' }),
  'right-auto': () => ({ insetInlineEnd: '"auto"' }),
  'right-(<custom-property>)': ([value]) => ({ insetInlineEnd: `"var(${value})"` }),
  'right-[<value>]': ([value]) => ({ insetInlineEnd: `"${value}"` }),
  'bottom-<number>': ([value]) => ({ insetBlockEnd: `"calc(var(--spacing) * ${value})"` }),
  '-bottom-<number>': ([value]) => ({ insetBlockEnd: `"calc(var(--spacing) * -${value})"` }),
  'bottom-<fraction>': ([value]) => ({ insetBlockEnd: `"calc(${value} * 100%)"` }),
  '-bottom-<fraction>': ([value]) => ({ insetBlockEnd: `"calc(${value} * -100%)"` }),
  'bottom-px': () => ({ insetBlockEnd: '"1px"' }),
  '-bottom-px': () => ({ insetBlockEnd: '"-1px"' }),
  'bottom-full': () => ({ insetBlockEnd: '"100%"' }),
  '-bottom-full': () => ({ insetBlockEnd: '"-100%"' }),
  'bottom-auto': () => ({ insetBlockEnd: '"auto"' }),
  'bottom-(<custom-property>)': ([value]) => ({ insetBlockEnd: `"var(${value})"` }),
  'bottom-[<value>]': ([value]) => ({ insetBlockEnd: `"${value}"` }),
  'left-<number>': ([value]) => ({ insetInlineStart: `"calc(var(--spacing) * ${value})"` }),
  '-left-<number>': ([value]) => ({ insetInlineStart: `"calc(var(--spacing) * -${value})"` }),
  'left-<fraction>': ([value]) => ({ insetInlineStart: `"calc(${value} * 100%)"` }),
  '-left-<fraction>': ([value]) => ({ insetInlineStart: `"calc(${value} * -100%)"` }),
  'left-px': () => ({ insetInlineStart: '"1px"' }),
  '-left-px': () => ({ insetInlineStart: '"-1px"' }),
  'left-full': () => ({ insetInlineStart: '"100%"' }),
  '-left-full': () => ({ insetInlineStart: '"-100%"' }),
  'left-auto': () => ({ insetInlineStart: '"auto"' }),
  'left-(<custom-property>)': ([value]) => ({ insetInlineStart: `"var(${value})"` }),
  'left-[<value>]': ([value]) => ({ insetInlineStart: `"${value}"` }),

  // visibility
  visible: () => ({ visibility: '"visible"' }),
  invisible: () => ({ visibility: '"hidden"' }),
  collapse: () => ({ visibility: '"collapse"' }),

  // z-index
  'z-<number>': ([value]) => ({ zIndex: value }),
  'z-auto': () => ({ zIndex: '"auto"' }),
  'z-[<value>]': ([value]) => ({ zIndex: `"${value}"` }),
  'z-(<custom-property>)': ([value]) => ({ zIndex: `"var(${value})"` }),

  // FLEXBOX  &  GRID

  // flex-basis
  'basis-<number>': ([value]) => ({ flexBasis: `"calc(var(--spacing) * ${value})"` }),
  'basis-<fraction>': ([value]) => ({ flexBasis: `"calc(${value} * 100%)"` }),
  'basis-full': () => ({ flexBasis: '"100%"' }),
  'basis-auto': () => ({ flexBasis: '"auto"' }),
  'basis-3xs': () => ({ flexBasis: '"var(--container-3xs)"' }),
  'basis-2xs': () => ({ flexBasis: '"var(--container-2xs)"' }),
  'basis-xs': () => ({ flexBasis: '"var(--container-xs)"' }),
  'basis-sm': () => ({ flexBasis: '"var(--container-sm)"' }),
  'basis-md': () => ({ flexBasis: '"var(--container-md)"' }),
  'basis-lg': () => ({ flexBasis: '"var(--container-lg)"' }),
  'basis-xl': () => ({ flexBasis: '"var(--container-xl)"' }),
  'basis-2xl': () => ({ flexBasis: '"var(--container-2xl)"' }),
  'basis-3xl': () => ({ flexBasis: '"var(--container-3xl)"' }),
  'basis-4xl': () => ({ flexBasis: '"var(--container-4xl)"' }),
  'basis-5xl': () => ({ flexBasis: '"var(--container-5xl)"' }),
  'basis-6xl': () => ({ flexBasis: '"var(--container-6xl)"' }),
  'basis-7xl': () => ({ flexBasis: '"var(--container-7xl)"' }),
  'basis-(<custom-property>)': ([value]) => ({ flexBasis: `"var(${value})"` }),
  'basis-[<value>]': ([value]) => ({ flexBasis: `"${value}"` }),

  // flex-direction
  'flex-row': () => ({ flexDirection: '"row"' }),
  'flex-row-reverse': () => ({ flexDirection: '"row-reverse"' }),
  'flex-col': () => ({ flexDirection: '"column"' }),
  'flex-col-reverse': () => ({ flexDirection: '"column-reverse"' }),

  // flex-wrap
  'flex-nowrap': () => ({ flexWrap: '"nowrap"' }),
  'flex-wrap': () => ({ flexWrap: '"wrap"' }),
  'flex-wrap-reverse': () => ({ flexWrap: '"wrap-reverse"' }),

  // flex
  'flex-<number>': ([value]) => ({ flex: value }),
  'flex-<fraction>': ([value]) => ({ flex: `"calc(${value} * 100%)"` }),
  'flex-auto': () => ({ flex: '"1 1 auto"' }),
  'flex-initial': () => ({ flex: '"0 1 auto"' }),
  'flex-none': () => ({ flex: '"none"' }),
  'flex-(<custom-property>)': ([value]) => ({ flex: `"var(${value})"` }),
  'flex-[<value>]': ([value]) => ({ flex: `"${value}"` }),

  // flex-grow
  grow: () => ({ flexGrow: '1' }),
  'grow-<number>': ([value]) => ({ flexGrow: value }),
  'grow-[<value>]': ([value]) => ({ flexGrow: `"${value}"` }),
  'grow-(<custom-property>)': ([value]) => ({ flexGrow: `"var(${value})"` }),

  // flex-shrink
  shrink: () => ({ flexShrink: '1' }),
  'shrink-<number>': ([value]) => ({ flexShrink: value }),
  'shrink-[<value>]': ([value]) => ({ flexShrink: `"${value}"` }),
  'shrink-(<custom-property>)': ([value]) => ({ flexShrink: `"var(${value})"` }),

  // order
  'order-<number>': ([value]) => ({ order: value }),
  '-order-<number>': ([value]) => ({ order: `"calc(${value} * -1)"` }),
  'order-first': () => ({ order: '"calc(-infinity)"' }),
  'order-last': () => ({ order: '"calc(infinity)"' }),
  'order-none': () => ({ order: '0' }),
  'order-(<custom-property>)': ([value]) => ({ order: `"var(${value})"` }),
  'order-[<value>]': ([value]) => ({ order: `"${value}"` }),

  // grid-template-columns
  'grid-cols-<number>': ([value]) => ({
    gridTemplateColumns: `"repeat(${value}, minmax(0, 1fr))"`,
  }),
  'grid-cols-none': () => ({ gridTemplateColumns: 'none' }),
  'grid-cols-subgrid': () => ({ gridTemplateColumns: 'subgrid' }),
  'grid-cols-[<value>]': ([value]) => ({ gridTemplateColumns: `"${value}"` }),
  'grid-cols-(<custom-property>)': ([value]) => ({ gridTemplateColumns: `"var(${value})"` }),

  // grid-column
  'col-span-<number>': ([value]) => ({ gridColumn: `"span ${value} / span ${value}"` }),
  'col-span-full': () => ({ gridColumn: '"1 / -1"' }),
  'col-span-(<custom-property>)': ([value]) => ({
    gridColumn: `"span var(${value}) / span var(${value})"`,
  }),
  'col-span-[<value>]': ([value]) => ({ gridColumn: `"span ${value} / span ${value}"` }),
  'col-start-<number>': ([value]) => ({ gridColumnStart: value }),
  '-col-start-<number>': ([value]) => ({ gridColumnStart: `"calc(${value} * -1)"` }),
  'col-start-auto': () => ({ gridColumnStart: '"auto"' }),
  'col-start-(<custom-property>)': ([value]) => ({ gridColumnStart: `"var(${value})"` }),
  'col-start-[<value>]': ([value]) => ({ gridColumnStart: `"${value}"` }),
  'col-end-<number>': ([value]) => ({ gridColumnEnd: value }),
  '-col-end-<number>': ([value]) => ({ gridColumnEnd: `"calc(${value} * -1)"` }),
  'col-end-auto': () => ({ gridColumnEnd: '"auto"' }),
  'col-end-(<custom-property>)': ([value]) => ({ gridColumnEnd: `"var(${value})"` }),
  'col-end-[<value>]': ([value]) => ({ gridColumnEnd: `"${value}"` }),
  'col-auto': () => ({ gridColumn: '"auto"' }),
  'col-(<custom-property>)': ([value]) => ({ gridColumn: `"var(${value})"` }),
  'col-[<value>]': ([value]) => ({ gridColumn: `"${value}"` }),

  // grid-template-rows
  'grid-rows-<number>': ([value]) => ({ gridTemplateRows: `"repeat(${value}, minmax(0, 1fr))"` }),
  'grid-rows-none': () => ({ gridTemplateRows: 'none' }),
  'grid-rows-subgrid': () => ({ gridTemplateRows: 'subgrid' }),
  'grid-rows-[<value>]': ([value]) => ({ gridTemplateRows: `"${value}"` }),
  'grid-rows-(<custom-property>)': ([value]) => ({ gridTemplateRows: `"var(${value})"` }),

  // grid-row
  'row-span-<number>': ([value]) => ({ gridRow: `"span ${value} / span ${value}"` }),
  'row-span-full': () => ({ gridRow: '"1 / -1"' }),
  'row-span-(<custom-property>)': ([value]) => ({
    gridRow: `"span var(${value}) / span var(${value})"`,
  }),
  'row-span-[<value>]': ([value]) => ({ gridRow: `"span ${value} / span ${value}"` }),
  'row-start-<number>': ([value]) => ({ gridRowStart: value }),
  '-row-start-<number>': ([value]) => ({ gridRowStart: `"calc(${value} * -1)"` }),
  'row-start-auto': () => ({ gridRowStart: '"auto"' }),
  'row-start-(<custom-property>)': ([value]) => ({ gridRowStart: `"var(${value})"` }),
  'row-start-[<value>]': ([value]) => ({ gridRowStart: `"${value}"` }),
  'row-end-<number>': ([value]) => ({ gridRowEnd: value }),
  '-row-end-<number>': ([value]) => ({ gridRowEnd: `"calc(${value} * -1)"` }),
  'row-end-auto': () => ({ gridRowEnd: '"auto"' }),
  'row-end-(<custom-property>)': ([value]) => ({ gridRowEnd: `"var(${value})"` }),
  'row-end-[<value>]': ([value]) => ({ gridRowEnd: `"${value}"` }),
  'row-auto': () => ({ gridRow: '"auto"' }),
  'row-(<custom-property>)': ([value]) => ({ gridRow: `"var(${value})"` }),
  'row-[<value>]': ([value]) => ({ gridRow: `"${value}"` }),

  // grid-auto-flow
  'grid-flow-row': () => ({ gridAutoFlow: '"row"' }),
  'grid-flow-col': () => ({ gridAutoFlow: '"column"' }),
  'grid-flow-dense': () => ({ gridAutoFlow: '"dense"' }),
  'grid-flow-row-dense': () => ({ gridAutoFlow: '"row dense"' }),
  'grid-flow-col-dense': () => ({ gridAutoFlow: '"column dense"' }),

  // grid-auto-columns
  'auto-cols-auto': () => ({ gridAutoColumns: '"auto"' }),
  'auto-cols-min': () => ({ gridAutoColumns: '"min-content"' }),
  'auto-cols-max': () => ({ gridAutoColumns: '"max-content"' }),
  'auto-cols-fr': () => ({ gridAutoColumns: '"minmax(0, 1fr)"' }),
  'auto-cols-(<custom-property>)': ([value]) => ({ gridAutoColumns: `"var(${value})"` }),
  'auto-cols-[<value>]': ([value]) => ({ gridAutoColumns: `"${value}"` }),

  // grid-auto-rows
  'auto-rows-auto': () => ({ gridAutoRows: '"auto"' }),
  'auto-rows-min': () => ({ gridAutoRows: '"min-content"' }),
  'auto-rows-max': () => ({ gridAutoRows: '"max-content"' }),
  'auto-rows-fr': () => ({ gridAutoRows: '"minmax(0, 1fr)"' }),
  'auto-rows-(<custom-property>)': ([value]) => ({ gridAutoRows: `"var(${value})"` }),
  'auto-rows-[<value>]': ([value]) => ({ gridAutoRows: `"${value}"` }),

  // gap
  'gap-<number>': ([value]) => ({ gap: `"calc(var(--spacing) * ${value})"` }),
  'gap-(<custom-property>)': ([value]) => ({ gap: `"var(${value})"` }),
  'gap-[<value>]': ([value]) => ({ gap: `"${value}"` }),
  'gap-x-<number>': ([value]) => ({ columnGap: `"calc(var(--spacing) * ${value})"` }),
  'gap-x-(<custom-property>)': ([value]) => ({ columnGap: `"var(${value})"` }),
  'gap-x-[<value>]': ([value]) => ({ columnGap: `"${value}"` }),
  'gap-y-<number>': ([value]) => ({ rowGap: `"calc(var(--spacing) * ${value})"` }),
  'gap-y-(<custom-property>)': ([value]) => ({ rowGap: `"var(${value})"` }),
  'gap-y-[<value>]': ([value]) => ({ rowGap: `"${value}"` }),

  // justify-content
  'justify-start': () => ({ justifyContent: '"flex-start"' }),
  'justify-end': () => ({ justifyContent: '"flex-end"' }),
  'justify-center': () => ({ justifyContent: '"center"' }),
  'justify-between': () => ({ justifyContent: '"space-between"' }),
  'justify-around': () => ({ justifyContent: '"space-around"' }),
  'justify-evenly': () => ({ justifyContent: '"space-evenly"' }),
  'justify-stretch': () => ({ justifyContent: '"stretch"' }),
  'justify-baseline': () => ({ justifyContent: '"baseline"' }),
  'justify-normal': () => ({ justifyContent: '"normal"' }),

  // justify-items
  'justify-items-start': () => ({ justifyItems: '"start"' }),
  'justify-items-end': () => ({ justifyItems: '"end"' }),
  'justify-items-center': () => ({ justifyItems: '"center"' }),
  'justify-items-stretch': () => ({ justifyItems: '"stretch"' }),
  'justify-items-normal': () => ({ justifyItems: '"normal"' }),

  // justify-self
  'justify-self-auto': () => ({ justifySelf: '"auto"' }),
  'justify-self-start': () => ({ justifySelf: '"start"' }),
  'justify-self-end': () => ({ justifySelf: '"end"' }),
  'justify-self-center': () => ({ justifySelf: '"center"' }),
  'justify-self-stretch': () => ({ justifySelf: '"stretch"' }),

  // align-content
  'content-normal': () => ({ alignContent: '"normal"' }),
  'content-center': () => ({ alignContent: '"center"' }),
  'content-start': () => ({ alignContent: '"flex-start"' }),
  'content-end': () => ({ alignContent: '"flex-end"' }),
  'content-between': () => ({ alignContent: '"space-between"' }),
  'content-around': () => ({ alignContent: '"space-around"' }),
  'content-evenly': () => ({ alignContent: '"space-evenly"' }),
  'content-baseline': () => ({ alignContent: '"baseline"' }),
  'content-stretch': () => ({ alignContent: '"stretch"' }),

  // align-items
  'items-start': () => ({ alignItems: '"flex-start"' }),
  'items-end': () => ({ alignItems: '"flex-end"' }),
  'items-center': () => ({ alignItems: '"center"' }),
  'items-baseline': () => ({ alignItems: '"baseline"' }),
  'items-stretch': () => ({ alignItems: '"stretch"' }),

  // align-self
  'self-auto': () => ({ alignSelf: '"auto"' }),
  'self-start': () => ({ alignSelf: '"flex-start"' }),
  'self-end': () => ({ alignSelf: '"flex-end"' }),
  'self-center': () => ({ alignSelf: '"center"' }),
  'self-stretch': () => ({ alignSelf: '"stretch"' }),
  'self-baseline': () => ({ alignSelf: '"baseline"' }),

  // place-content
  'place-content-center': () => ({ placeContent: '"center"' }),
  'place-content-start': () => ({ placeContent: '"start"' }),
  'place-content-end': () => ({ placeContent: '"end"' }),
  'place-content-between': () => ({ placeContent: '"space-between"' }),
  'place-content-around': () => ({ placeContent: '"space-around"' }),
  'place-content-evenly': () => ({ placeContent: '"space-evenly"' }),
  'place-content-baseline': () => ({ placeContent: '"baseline"' }),
  'place-content-stretch': () => ({ placeContent: '"stretch"' }),

  // place-items
  'place-items-start': () => ({ placeItems: '"start"' }),
  'place-items-end': () => ({ placeItems: '"end"' }),
  'place-items-center': () => ({ placeItems: '"center"' }),
  'place-items-baseline': () => ({ placeItems: '"baseline"' }),
  'place-items-stretch': () => ({ placeItems: '"stretch"' }),

  // place-self
  'place-self-auto': () => ({ placeSelf: '"auto"' }),
  'place-self-start': () => ({ placeSelf: '"start"' }),
  'place-self-end': () => ({ placeSelf: '"end"' }),
  'place-self-center': () => ({ placeSelf: '"center"' }),
  'place-self-stretch': () => ({ placeSelf: '"stretch"' }),

  // SPACING

  // padding
  'p-<number>': ([value]) => ({ padding: `"calc(var(--spacing) * ${value})"` }),
  'p-auto': () => ({ padding: '"auto"' }),
  'p-px': () => ({ padding: '"1px"' }),
  'p-(<custom-property>)': ([value]) => ({ padding: `"var(${value})"` }),
  'p-[<value>]': ([value]) => ({ padding: `"${value}"` }),
  'px-<number>': ([value]) => ({ paddingInline: `"calc(var(--spacing) * ${value})"` }),
  'px-auto': () => ({ paddingInline: '"auto"' }),
  'px-px': () => ({ paddingInline: '"1px"' }),
  'px-(<custom-property>)': ([value]) => ({ paddingInline: `"var(${value})"` }),
  'px-[<value>]': ([value]) => ({ paddingInline: `"${value}"` }),
  'py-<number>': ([value]) => ({ paddingBlock: `"calc(var(--spacing) * ${value})"` }),
  'py-auto': () => ({ paddingBlock: '"auto"' }),
  'py-px': () => ({ paddingBlock: '"1px"' }),
  'py-(<custom-property>)': ([value]) => ({ paddingBlock: `"var(${value})"` }),
  'py-[<value>]': ([value]) => ({ paddingBlock: `"${value}"` }),
  'ps-<number>': ([value]) => ({ paddingInlineStart: `"calc(var(--spacing) * ${value})"` }),
  'ps-auto': () => ({ paddingInlineStart: '"auto"' }),
  'ps-px': () => ({ paddingInlineStart: '"1px"' }),
  'ps-(<custom-property>)': ([value]) => ({ paddingInlineStart: `"var(${value})"` }),
  'ps-[<value>]': ([value]) => ({ paddingInlineStart: `"${value}"` }),
  'pe-<number>': ([value]) => ({ paddingInlineEnd: `"calc(var(--spacing) * ${value})"` }),
  'pe-auto': () => ({ paddingInlineEnd: '"auto"' }),
  'pe-px': () => ({ paddingInlineEnd: '"1px"' }),
  'pe-(<custom-property>)': ([value]) => ({ paddingInlineEnd: `"var(${value})"` }),
  'pe-[<value>]': ([value]) => ({ paddingInlineEnd: `"${value}"` }),
  'pt-<number>': ([value]) => ({ paddingTop: `"calc(var(--spacing) * ${value})"` }),
  'pt-auto': () => ({ paddingTop: '"auto"' }),
  'pt-px': () => ({ paddingTop: '"1px"' }),
  'pt-(<custom-property>)': ([value]) => ({ paddingTop: `"var(${value})"` }),
  'pt-[<value>]': ([value]) => ({ paddingTop: `"${value}"` }),
  'pr-<number>': ([value]) => ({ paddingRight: `"calc(var(--spacing) * ${value})"` }),
  'pr-auto': () => ({ paddingRight: '"auto"' }),
  'pr-px': () => ({ paddingRight: '"1px"' }),
  'pr-(<custom-property>)': ([value]) => ({ paddingRight: `"var(${value})"` }),
  'pr-[<value>]': ([value]) => ({ paddingRight: `"${value}"` }),
  'pb-<number>': ([value]) => ({ paddingBottom: `"calc(var(--spacing) * ${value})"` }),
  'pb-auto': () => ({ paddingBottom: '"auto"' }),
  'pb-px': () => ({ paddingBottom: '"1px"' }),
  'pb-(<custom-property>)': ([value]) => ({ paddingBottom: `"var(${value})"` }),
  'pb-[<value>]': ([value]) => ({ paddingBottom: `"${value}"` }),
  'pl-<number>': ([value]) => ({ paddingLeft: `"calc(var(--spacing) * ${value})"` }),
  'pl-auto': () => ({ paddingLeft: '"auto"' }),
  'pl-px': () => ({ paddingLeft: '"1px"' }),
  'pl-(<custom-property>)': ([value]) => ({ paddingLeft: `"var(${value})"` }),
  'pl-[<value>]': ([value]) => ({ paddingLeft: `"${value}"` }),

  // margin
  'm-<number>': ([value]) => ({ margin: `"calc(var(--spacing) * ${value})"` }),
  '-m-<number>': ([value]) => ({ margin: `"calc(var(--spacing) * -${value})"` }),
  'm-auto': () => ({ margin: '"auto"' }),
  'm-px': () => ({ margin: '"1px"' }),
  '-m-px': () => ({ margin: '"-1px"' }),
  'm-(<custom-property>)': ([value]) => ({ margin: `"var(${value})"` }),
  'm-[<value>]': ([value]) => ({ margin: `"${value}"` }),
  'mx-<number>': ([value]) => ({ marginInline: `"calc(var(--spacing) * ${value})"` }),
  '-mx-<number>': ([value]) => ({ marginInline: `"calc(var(--spacing) * -${value})"` }),
  'mx-auto': () => ({ marginInline: '"auto"' }),
  'mx-px': () => ({ marginInline: '"1px"' }),
  '-mx-px': () => ({ marginInline: '"-1px"' }),
  'mx-(<custom-property>)': ([value]) => ({ marginInline: `"var(${value})"` }),
  'mx-[<value>]': ([value]) => ({ marginInline: `"${value}"` }),
  'my-<number>': ([value]) => ({ marginBlock: `"calc(var(--spacing) * ${value})"` }),
  '-my-<number>': ([value]) => ({ marginBlock: `"calc(var(--spacing) * -${value})"` }),
  'my-auto': () => ({ marginBlock: '"auto"' }),
  'my-px': () => ({ marginBlock: '"1px"' }),
  '-my-px': () => ({ marginBlock: '"-1px"' }),
  'my-(<custom-property>)': ([value]) => ({ marginBlock: `"var(${value})"` }),
  'my-[<value>]': ([value]) => ({ marginBlock: `"${value}"` }),
  'ms-<number>': ([value]) => ({ marginInlineStart: `"calc(var(--spacing) * ${value})"` }),
  '-ms-<number>': ([value]) => ({ marginInlineStart: `"calc(var(--spacing) * -${value})"` }),
  'ms-auto': () => ({ marginInlineStart: '"auto"' }),
  'ms-px': () => ({ marginInlineStart: '"1px"' }),
  '-ms-px': () => ({ marginInlineStart: '"-1px"' }),
  'ms-(<custom-property>)': ([value]) => ({ marginInlineStart: `"var(${value})"` }),
  'ms-[<value>]': ([value]) => ({ marginInlineStart: `"${value}"` }),
  'me-<number>': ([value]) => ({ marginInlineEnd: `"calc(var(--spacing) * ${value})"` }),
  '-me-<number>': ([value]) => ({ marginInlineEnd: `"calc(var(--spacing) * -${value})"` }),
  'me-auto': () => ({ marginInlineEnd: '"auto"' }),
  'me-px': () => ({ marginInlineEnd: '"1px"' }),
  '-me-px': () => ({ marginInlineEnd: '"-1px"' }),
  'me-(<custom-property>)': ([value]) => ({ marginInlineEnd: `"var(${value})"` }),
  'me-[<value>]': ([value]) => ({ marginInlineEnd: `"${value}"` }),
  'mt-<number>': ([value]) => ({ marginTop: `"calc(var(--spacing) * ${value})"` }),
  '-mt-<number>': ([value]) => ({ marginTop: `"calc(var(--spacing) * -${value})"` }),
  'mt-auto': () => ({ marginTop: '"auto"' }),
  'mt-px': () => ({ marginTop: '"1px"' }),
  '-mt-px': () => ({ marginTop: '"-1px"' }),
  'mt-(<custom-property>)': ([value]) => ({ marginTop: `"var(${value})"` }),
  'mt-[<value>]': ([value]) => ({ marginTop: `"${value}"` }),
  'mr-<number>': ([value]) => ({ marginRight: `"calc(var(--spacing) * ${value})"` }),
  '-mr-<number>': ([value]) => ({ marginRight: `"calc(var(--spacing) * -${value})"` }),
  'mr-auto': () => ({ marginRight: '"auto"' }),
  'mr-px': () => ({ marginRight: '"1px"' }),
  '-mr-px': () => ({ marginRight: '"-1px"' }),
  'mr-(<custom-property>)': ([value]) => ({ marginRight: `"var(${value})"` }),
  'mr-[<value>]': ([value]) => ({ marginRight: `"${value}"` }),
  'mb-<number>': ([value]) => ({ marginBottom: `"calc(var(--spacing) * ${value})"` }),
  '-mb-<number>': ([value]) => ({ marginBottom: `"calc(var(--spacing) * -${value})"` }),
  'mb-auto': () => ({ marginBottom: '"auto"' }),
  'mb-px': () => ({ marginBottom: '"1px"' }),
  '-mb-px': () => ({ marginBottom: '"-1px"' }),
  'mb-(<custom-property>)': ([value]) => ({ marginBottom: `"var(${value})"` }),
  'mb-[<value>]': ([value]) => ({ marginBottom: `"${value}"` }),
  'ml-<number>': ([value]) => ({ marginLeft: `"calc(var(--spacing) * ${value})"` }),
  '-ml-<number>': ([value]) => ({ marginLeft: `"calc(var(--spacing) * -${value})"` }),
  'ml-auto': () => ({ marginLeft: '"auto"' }),
  'ml-px': () => ({ marginLeft: '"1px"' }),
  '-ml-px': () => ({ marginLeft: '"-1px"' }),
  'ml-(<custom-property>)': ([value]) => ({ marginLeft: `"var(${value})"` }),
  'ml-[<value>]': ([value]) => ({ marginLeft: `"${value}"` }),
  'space-x-<number>': () => {
    throw new Error('space-x-<number> is not supported')
  },
  '-space-x-<number>': () => {
    throw new Error('-space-x-<number> is not supported')
  },
  'space-x-px': () => {
    throw new Error('space-x-px is not supported')
  },
  '-space-x-px': () => {
    throw new Error('-space-x-px is not supported')
  },
  'space-x-(<custom-property>)': () => {
    throw new Error('space-x-(<custom-property>) is not supported')
  },
  'space-x-[<value>]': () => {
    throw new Error('space-x-[<value>] is not supported')
  },
  'space-y-<number>': () => {
    throw new Error('space-y-<number> is not supported')
  },
  '-space-y-<number>': () => {
    throw new Error('-space-y-<number> is not supported')
  },
  'space-y-px': () => {
    throw new Error('space-y-px is not supported')
  },
  '-space-y-px': () => {
    throw new Error('-space-y-px is not supported')
  },
  'space-y-(<custom-property>)': () => {
    throw new Error('space-y-(<custom-property>) is not supported')
  },
  'space-y-[<value>]': () => {
    throw new Error('space-y-[<value>] is not supported')
  },
  'space-x-reverse': () => {
    throw new Error('space-x-reverse is not supported')
  },
  'space-y-reverse': () => {
    throw new Error('space-y-reverse is not supported')
  },

  // SIZING

  // size
  'size-<number>': ([value]) => ({
    width: `"calc(var(--spacing) * ${value})"`,
    height: `"calc(var(--spacing) * ${value})"`,
  }),
  'size-<fraction>': ([value]) => ({
    width: `"calc(${value} * 100%)"`,
    height: `"calc(${value} * 100%)"`,
  }),
  'size-auto': () => ({ width: '"auto"', height: '"auto"' }),
  'size-px': () => ({ width: '"1px"', height: '"1px"' }),
  'size-full': () => ({ width: '"100%"', height: '"100%"' }),
  'size-dvw': () => ({ width: '"100dvw"', height: '"100dvw"' }),
  'size-dvh': () => ({ width: '"100dvh"', height: '"100dvh"' }),
  'size-lvw': () => ({ width: '"100lvw"', height: '"100lvw"' }),
  'size-lvh': () => ({ width: '"100lvh"', height: '"100lvh"' }),
  'size-svw': () => ({ width: '"100svw"', height: '"100svw"' }),
  'size-svh': () => ({ width: '"100svh"', height: '"100svh"' }),
  'size-min': () => ({ width: '"min-content"', height: '"min-content"' }),
  'size-max': () => ({ width: '"max-content"', height: '"max-content"' }),
  'size-fit': () => ({ width: '"fit-content"', height: '"fit-content"' }),
  'size-(<custom-property>)': ([value]) => ({
    width: `"var(${value})"`,
    height: `"var(${value})"`,
  }),
  'size-[<value>]': ([value]) => ({ width: `"${value}"`, height: `"${value}"` }),

  // width
  'w-<number>': ([value]) => ({ width: `"calc(var(--spacing) * ${value})"` }),
  'w-<fraction>': ([value]) => ({ width: `"calc(${value} * 100%)"` }),
  'w-auto': () => ({ width: '"auto"' }),
  'w-px': () => ({ width: '"1px"' }),
  'w-full': () => ({ width: '"100%"' }),
  'w-screen': () => ({ width: '"100vw"' }),
  'w-dvw': () => ({ width: '"100dvw"' }),
  'w-dvh': () => ({ width: '"100dvh"' }),
  'w-lvw': () => ({ width: '"100lvw"' }),
  'w-lvh': () => ({ width: '"100lvh"' }),
  'w-svw': () => ({ width: '"100svw"' }),
  'w-svh': () => ({ width: '"100svh"' }),
  'w-min': () => ({ width: '"min-content"' }),
  'w-max': () => ({ width: '"max-content"' }),
  'w-fit': () => ({ width: '"fit-content"' }),
  'w-(<custom-property>)': ([value]) => ({ width: `"var(${value})"` }),
  'w-[<value>]': ([value]) => ({ width: `"${value}"` }),

  // min-width
  'min-w-<number>': ([value]) => ({ minWidth: `"calc(var(--spacing) * ${value})"` }),
  'min-w-<fraction>': ([value]) => ({ minWidth: `"calc(${value} * 100%)"` }),
  'min-w-3xs': () => ({ minWidth: '"calc(var(--container-3xs))"' }),
  'min-w-2xs': () => ({ minWidth: '"calc(var(--container-2xs))"' }),
  'min-w-xs': () => ({ minWidth: '"calc(var(--container-xs))"' }),
  'min-w-sm': () => ({ minWidth: '"calc(var(--container-sm))"' }),
  'min-w-md': () => ({ minWidth: '"calc(var(--container-md))"' }),
  'min-w-lg': () => ({ minWidth: '"calc(var(--container-lg))"' }),
  'min-w-xl': () => ({ minWidth: '"calc(var(--container-xl))"' }),
  'min-w-2xl': () => ({ minWidth: '"calc(var(--container-2xl))"' }),
  'min-w-3xl': () => ({ minWidth: '"calc(var(--container-3xl))"' }),
  'min-w-4xl': () => ({ minWidth: '"calc(var(--container-4xl))"' }),
  'min-w-5xl': () => ({ minWidth: '"calc(var(--container-5xl))"' }),
  'min-w-6xl': () => ({ minWidth: '"calc(var(--container-6xl))"' }),
  'min-w-7xl': () => ({ minWidth: '"calc(var(--container-7xl))"' }),
  'min-w-auto': () => ({ minWidth: '"auto"' }),
  'min-w-px': () => ({ minWidth: '"1px"' }),
  'min-w-full': () => ({ minWidth: '"100%"' }),
  'min-w-screen': () => ({ minWidth: '"100vw"' }),
  'min-w-dvw': () => ({ minWidth: '"100dvw"' }),
  'min-w-dvh': () => ({ minWidth: '"100dvh"' }),
  'min-w-lvw': () => ({ minWidth: '"100lvw"' }),
  'min-w-lvh': () => ({ minWidth: '"100lvh"' }),
  'min-w-svw': () => ({ minWidth: '"100svw"' }),
  'min-w-svh': () => ({ minWidth: '"100svh"' }),
  'min-w-min': () => ({ minWidth: '"min-content"' }),
  'min-w-max': () => ({ minWidth: '"max-content"' }),
  'min-w-fit': () => ({ minWidth: '"fit-content"' }),
  'min-w-(<custom-property>)': ([value]) => ({ minWidth: `"var(${value})"` }),
  'min-w-[<value>]': ([value]) => ({ minWidth: `"${value}"` }),

  // max-width
  'max-w-<number>': ([value]) => ({ maxWidth: `"calc(var(--spacing) * ${value})"` }),
  'max-w-<fraction>': ([value]) => ({ maxWidth: `"calc(${value} * 100%)"` }),
  'max-w-3xs': () => ({ maxWidth: '"calc(var(--container-3xs))"' }),
  'max-w-2xs': () => ({ maxWidth: '"calc(var(--container-2xs))"' }),
  'max-w-xs': () => ({ maxWidth: '"calc(var(--container-xs))"' }),
  'max-w-sm': () => ({ maxWidth: '"calc(var(--container-sm))"' }),
  'max-w-md': () => ({ maxWidth: '"calc(var(--container-md))"' }),
  'max-w-lg': () => ({ maxWidth: '"calc(var(--container-lg))"' }),
  'max-w-xl': () => ({ maxWidth: '"calc(var(--container-xl))"' }),
  'max-w-2xl': () => ({ maxWidth: '"calc(var(--container-2xl))"' }),
  'max-w-3xl': () => ({ maxWidth: '"calc(var(--container-3xl))"' }),
  'max-w-4xl': () => ({ maxWidth: '"calc(var(--container-4xl))"' }),
  'max-w-5xl': () => ({ maxWidth: '"calc(var(--container-5xl))"' }),
  'max-w-6xl': () => ({ maxWidth: '"calc(var(--container-6xl))"' }),
  'max-w-7xl': () => ({ maxWidth: '"calc(var(--container-7xl))"' }),
  'max-w-auto': () => ({ maxWidth: '"auto"' }),
  'max-w-none': () => ({ maxWidth: '"none"' }),
  'max-w-px': () => ({ maxWidth: '"1px"' }),
  'max-w-full': () => ({ maxWidth: '"100%"' }),
  'max-w-dvw': () => ({ maxWidth: '"100dvw"' }),
  'max-w-dvh': () => ({ maxWidth: '"100dvh"' }),
  'max-w-lvw': () => ({ maxWidth: '"100lvw"' }),
  'max-w-lvh': () => ({ maxWidth: '"100lvh"' }),
  'max-w-svw': () => ({ maxWidth: '"100svw"' }),
  'max-w-svh': () => ({ maxWidth: '"100svh"' }),
  'max-w-screen': () => ({ maxWidth: '"100vw"' }),
  'max-w-min': () => ({ maxWidth: '"min-content"' }),
  'max-w-max': () => ({ maxWidth: '"max-content"' }),
  'max-w-fit': () => ({ maxWidth: '"fit-content"' }),
  container: () => {
    throw new Error('container is not supported')
  },
  'max-w-(<custom-property>)': ([value]) => ({ maxWidth: `"var(${value})"` }),
  'max-w-[<value>]': ([value]) => ({ maxWidth: `"${value}"` }),

  // height
  'h-<number>': ([value]) => ({ width: `"calc(var(--spacing) * ${value})"` }),
  'h-<fraction>': ([value]) => ({ width: `"calc(${value} * 100%)"` }),
  'h-auto': () => ({ height: '"auto"' }),
  'h-px': () => ({ height: '"1px"' }),
  'h-full': () => ({ height: '"100%"' }),
  'h-screen': () => ({ height: '"100vw"' }),
  'h-dvh': () => ({ height: '"100dvh"' }),
  'h-dvw': () => ({ height: '"100dvw"' }),
  'h-lvh': () => ({ height: '"100lvh"' }),
  'h-lvw': () => ({ height: '"100lvw"' }),
  'h-svh': () => ({ height: '"100svh"' }),
  'h-svw': () => ({ height: '"100svw"' }),
  'h-min': () => ({ height: '"min-content"' }),
  'h-max': () => ({ height: '"max-content"' }),
  'h-fit': () => ({ height: '"fit-content"' }),
  'h-(<custom-property>)': ([value]) => ({ height: `"var(${value})"` }),
  'h-[<value>]': ([value]) => ({ height: `"${value}"` }),

  // min-height
  'min-h-<number>': ([value]) => ({ minHeight: `"calc(var(--spacing) * ${value})"` }),
  'min-h-<fraction>': ([value]) => ({ minHeight: `"calc(${value} * 100%)"` }),
  'min-h-auto': () => ({ minHeight: '"auto"' }),
  'min-h-px': () => ({ minHeight: '"1px"' }),
  'min-h-full': () => ({ minHeight: '"100%"' }),
  'min-h-screen': () => ({ minHeight: '"100vw"' }),
  'min-h-dvh': () => ({ minHeight: '"100dvh"' }),
  'min-h-dvw': () => ({ minHeight: '"100dvw"' }),
  'min-h-lvh': () => ({ minHeight: '"100lvh"' }),
  'min-h-lvw': () => ({ minHeight: '"100lvw"' }),
  'min-h-svh': () => ({ minHeight: '"100svh"' }),
  'min-h-svw': () => ({ minHeight: '"100svw"' }),
  'min-h-min': () => ({ minHeight: '"min-content"' }),
  'min-h-max': () => ({ minHeight: '"max-content"' }),
  'min-h-fit': () => ({ minHeight: '"fit-content"' }),
  'min-h-(<custom-property>)': ([value]) => ({ minHeight: `"var(${value})"` }),
  'min-h-[<value>]': ([value]) => ({ minHeight: `"${value}"` }),

  // max-height
  'max-h-<number>': ([value]) => ({ maxHeight: `"calc(var(--spacing) * ${value})"` }),
  'max-h-<fraction>': ([value]) => ({ maxHeight: `"calc(${value} * 100%)"` }),
  'max-h-auto': () => ({ maxHeight: '"auto"' }),
  'max-h-none': () => ({ maxHeight: '"none"' }),
  'max-h-px': () => ({ maxHeight: '"1px"' }),
  'max-h-full': () => ({ maxHeight: '"100%"' }),
  'max-h-screen': () => ({ maxHeight: '"100vw"' }),
  'max-h-dvh': () => ({ maxHeight: '"100dvh"' }),
  'max-h-dvw': () => ({ maxHeight: '"100dvw"' }),
  'max-h-lvh': () => ({ maxHeight: '"100lvh"' }),
  'max-h-lvw': () => ({ maxHeight: '"100lvw"' }),
  'max-h-svh': () => ({ maxHeight: '"100svh"' }),
  'max-h-svw': () => ({ maxHeight: '"100svw"' }),
  'max-h-min': () => ({ maxHeight: '"min-content"' }),
  'max-h-max': () => ({ maxHeight: '"max-content"' }),
  'max-h-fit': () => ({ maxHeight: '"fit-content"' }),
  'max-h-(<custom-property>)': ([value]) => ({ maxHeight: `"var(${value})"` }),
  'max-h-[<value>]': ([value]) => ({ maxHeight: `"${value}"` }),

  // TYPOGRAPHY

  // font-family
  'font-sans': () => ({ fontFamily: '"var(--font-sans)"' }),
  'font-serif': () => ({ fontFamily: '"var(--font-serif)"' }),
  'font-mono': () => ({ fontFamily: '"var(--font-mono)"' }),
  'font-(family-name:<custom-property>)': ([value]) => ({ fontFamily: `"var(${value})"` }),
  'font-[<value>]': ([value]) => ({ fontFamily: `"${value}"` }),

  // font-size
  'text-xs': () => ({ fontSize: '"var(--text-xs)"', lineHeight: '"var(--text-xs--line-height)"' }),
  'text-sm': () => ({ fontSize: '"var(--text-sm)"', lineHeight: '"var(--text-sm--line-height)"' }),
  'text-base': () => ({
    fontSize: '"var(--text-base)"',
    lineHeight: '"var(--text-base--line-height)"',
  }),
  'text-lg': () => ({ fontSize: '"var(--text-lg)"', lineHeight: '"var(--text-lg--line-height)"' }),
  'text-xl': () => ({ fontSize: '"var(--text-xl)"', lineHeight: '"var(--text-xl--line-height)"' }),
  'text-2xl': () => ({
    fontSize: '"var(--text-2xl)"',
    lineHeight: '"var(--text-2xl--line-height)"',
  }),
  'text-3xl': () => ({
    fontSize: '"var(--text-3xl)"',
    lineHeight: '"var(--text-3xl--line-height)"',
  }),
  'text-4xl': () => ({
    fontSize: '"var(--text-4xl)"',
    lineHeight: '"var(--text-4xl--line-height)"',
  }),
  'text-5xl': () => ({
    fontSize: '"var(--text-5xl)"',
    lineHeight: '"var(--text-5xl--line-height)"',
  }),
  'text-6xl': () => ({
    fontSize: '"var(--text-6xl)"',
    lineHeight: '"var(--text-6xl--line-height)"',
  }),
  'text-7xl': () => ({
    fontSize: '"var(--text-7xl)"',
    lineHeight: '"var(--text-7xl--line-height)"',
  }),
  'text-8xl': () => ({
    fontSize: '"var(--text-8xl)"',
    lineHeight: '"var(--text-8xl--line-height)"',
  }),
  'text-9xl': () => ({
    fontSize: '"var(--text-9xl)"',
    lineHeight: '"var(--text-9xl--line-height)"',
  }),
  'text-(length:<custom-property>)': ([value]) => ({ fontSize: `"var(${value})"` }),
  'text-[<size>]': ([value]) => ({ fontSize: `"${value}"` }),

  // font-smoothing
  antialiased: () => ({ webkitFontSmoothing: '"antialiased"', mozOsxFontSmoothing: '"grayscale"' }),
  'subpixel-antialiased': () => ({
    webkitFontSmoothing: '"auto"',
    mozOsxFontSmoothing: '"grayscale"',
  }),

  // font-style
  italic: () => ({ fontStyle: '"italic"' }),
  'not-italic': () => ({ fontStyle: '"normal"' }),

  // font-weight
  'font-thin': () => ({ fontWeight: '"100"' }),
  'font-extralight': () => ({ fontWeight: '"200"' }),
  'font-light': () => ({ fontWeight: '"300"' }),
  'font-normal': () => ({ fontWeight: '"400"' }),
  'font-medium': () => ({ fontWeight: '"500"' }),
  'font-semibold': () => ({ fontWeight: '"600"' }),
  'font-bold': () => ({ fontWeight: '"700"' }),
  'font-extrabold': () => ({ fontWeight: '"800"' }),
  'font-black': () => ({ fontWeight: '"900"' }),
  'font-weight-(<custom-property>)': ([value]) => ({ fontWeight: `"var(${value})"` }),
  'font-weight-[<value>]': ([value]) => ({ fontWeight: `"${value}"` }),

  // font-stretch
  'font-stretch-ultra-condensed': () => ({ fontStretch: '"ultra-condensed"' }),
  'font-stretch-extra-condensed': () => ({ fontStretch: '"extra-condensed"' }),
  'font-stretch-condensed': () => ({ fontStretch: '"condensed"' }),
  'font-stretch-semi-condensed': () => ({ fontStretch: '"semi-condensed"' }),
  'font-stretch-normal': () => ({ fontStretch: '"normal"' }),
  'font-stretch-semi-expanded': () => ({ fontStretch: '"semi-expanded"' }),
  'font-stretch-expanded': () => ({ fontStretch: '"expanded"' }),
  'font-stretch-extra-expanded': () => ({ fontStretch: '"extra-expanded"' }),
  'font-stretch-ultra-expanded': () => ({ fontStretch: '"ultra-expanded"' }),
  'font-stretch-<percentage>': ([value]) => ({ fontStretch: `"${value}"` }),
  'font-stretch-(<custom-property>)': ([value]) => ({ fontStretch: `"var(${value})"` }),
  'font-stretch-[<value>]': ([value]) => ({ fontStretch: `"${value}"` }),

  // font-variant-numeric
  'normal-nums': () => ({ fontVariantNumeric: '"normal-nums"' }),
  ordinal: () => ({ fontVariantNumeric: '"ordinal"' }),
  'slashed-zero': () => ({ fontVariantNumeric: '"slashed-zero"' }),
  'lining-nums': () => ({ fontVariantNumeric: '"lining-nums"' }),
  'oldstyle-nums': () => ({ fontVariantNumeric: '"oldstyle-nums"' }),
  'proportional-nums': () => ({ fontVariantNumeric: '"proportional-nums"' }),
  'tabular-nums': () => ({ fontVariantNumeric: '"tabular-nums"' }),
  'diagonal-fractions': () => ({ fontVariantNumeric: '"diagonal-fractions"' }),
  'stacked-fractions': () => ({ fontVariantNumeric: '"stacked-fractions"' }),

  // letter-spacing
  'tracking-tighter': () => ({ letterSpacing: '"var(--tracking-tighter)"' }),
  'tracking-tight': () => ({ letterSpacing: '"var(--tracking-tight)"' }),
  'tracking-normal': () => ({ letterSpacing: '"var(--tracking-normal)"' }),
  'tracking-wide': () => ({ letterSpacing: '"var(--tracking-wide)"' }),
  'tracking-wider': () => ({ letterSpacing: '"var(--tracking-wider)"' }),
  'tracking-widest': () => ({ letterSpacing: '"var(--tracking-widest)"' }),

  // line-clamp
  'line-clamp-<number>': ([value]) => ({
    overflow: '"hidden"',
    display: '"-webkit-box"',
    webkitBoxOrient: '"vertical"',
    webkitLineClamp: value,
  }),
  'line-clamp-none': () => ({
    overflow: '"visible"',
    display: '"block"',
    webkitBoxOrient: '"horizontal"',
    webkitLineClamp: '"unset"',
  }),
  'line-clamp-(<custom-property>)': ([value]) => ({
    overflow: '"hidden"',
    display: '"-webkit-box"',
    webkitBoxOrient: '"vertical"',
    webkitLineClamp: `"var(${value})"`,
  }),
  'line-clamp-[<value>]': ([value]) => ({
    overflow: '"hidden"',
    display: '"-webkit-box"',
    webkitBoxOrient: '"vertical"',
    webkitLineClamp: `"${value}"`,
  }),

  // line-height
  'text-<value>/<number>': ([fontSize, lineHeight]) => ({
    fontSize,
    lineHeight: `"calc(var(--spacing) * ${lineHeight})"`,
  }),
  'text-<value>/(<custom-property>)': ([fontSize, lineHeight]) => ({
    fontSize,
    lineHeight: `"var(${lineHeight})"`,
  }),
  'text-<value>/[<value>]': ([fontSize, lineHeight]) => ({ fontSize, lineHeight }),
  'leading-none': () => ({ lineHeight: '"1"' }),
  'leading-<number>': ([value]) => ({ lineHeight: `"calc(var(--spacing) * ${value})"` }),
  'leading-(<custom-property>)': ([value]) => ({ lineHeight: `"var(${value})"` }),
  'leading-[<value>]': ([value]) => ({ lineHeight: `"${value}"` }),

  // list-style-image
  'list-image-none': () => ({ listStyleImage: '"none"' }),
  'list-image-[<value>]': ([value]) => ({ listStyleImage: `"${value}"` }),
  'list-image-(<custom-property>)': ([value]) => ({ listStyleImage: `"var(${value})"` }),

  // list-style-position
  'list-inside': () => ({ listStylePosition: '"inside"' }),
  'list-outside': () => ({ listStylePosition: '"outside"' }),

  // list-style-type
  'list-disc': () => ({ listStyleType: '"disc"' }),
  'list-decimal': () => ({ listStyleType: '"decimal"' }),
  'list-none': () => ({ listStyleType: '"none"' }),
  'list-(<custom-property>)': ([value]) => ({ listStyleType: `"var(${value})"` }),
  'list-[<value>]': ([value]) => ({ listStyleType: `"${value}"` }),

  // text-align
  'text-left': () => ({ textAlign: '"left"' }),
  'text-center': () => ({ textAlign: '"center"' }),
  'text-right': () => ({ textAlign: '"right"' }),
  'text-justify': () => ({ textAlign: '"justify"' }),
  'text-start': () => ({ textAlign: '"start"' }),
  'text-end': () => ({ textAlign: '"end"' }),

  // color
  'text-inherit': () => ({ color: '"inherit"' }),
  'text-current': () => ({ color: '"currentColor"' }),
  'text-transparent': () => ({ color: '"transparent"' }),
  'text-black': () => ({ color: '"var(--color-black)"' }),
  'text-white': () => ({ color: '"var(--color-white)"' }),
  'text-red-50': () => ({ color: '"var(--color-red-50)"' }),
  'text-red-100': () => ({ color: '"var(--color-red-100)"' }),
  'text-red-200': () => ({ color: '"var(--color-red-200)"' }),
  'text-red-300': () => ({ color: '"var(--color-red-300)"' }),
  'text-red-400': () => ({ color: '"var(--color-red-400)"' }),
  'text-red-500': () => ({ color: '"var(--color-red-500)"' }),
  'text-red-600': () => ({ color: '"var(--color-red-600)"' }),
  'text-red-700': () => ({ color: '"var(--color-red-700)"' }),
  'text-red-800': () => ({ color: '"var(--color-red-800)"' }),
  'text-red-900': () => ({ color: '"var(--color-red-900)"' }),
  'text-red-950': () => ({ color: '"var(--color-red-950)"' }),
  'text-orange-50': () => ({ color: '"var(--color-orange-50)"' }),
  'text-orange-100': () => ({ color: '"var(--color-orange-100)"' }),
  'text-orange-200': () => ({ color: '"var(--color-orange-200)"' }),
  'text-orange-300': () => ({ color: '"var(--color-orange-300)"' }),
  'text-orange-400': () => ({ color: '"var(--color-orange-400)"' }),
  'text-orange-500': () => ({ color: '"var(--color-orange-500)"' }),
  'text-orange-600': () => ({ color: '"var(--color-orange-600)"' }),
  'text-orange-700': () => ({ color: '"var(--color-orange-700)"' }),
  'text-orange-800': () => ({ color: '"var(--color-orange-800)"' }),
  'text-orange-900': () => ({ color: '"var(--color-orange-900)"' }),
  'text-orange-950': () => ({ color: '"var(--color-orange-950)"' }),
  'text-amber-50': () => ({ color: '"var(--color-amber-50)"' }),
  'text-amber-100': () => ({ color: '"var(--color-amber-100)"' }),
  'text-amber-200': () => ({ color: '"var(--color-amber-200)"' }),
  'text-amber-300': () => ({ color: '"var(--color-amber-300)"' }),
  'text-amber-400': () => ({ color: '"var(--color-amber-400)"' }),
  'text-amber-500': () => ({ color: '"var(--color-amber-500)"' }),
  'text-amber-600': () => ({ color: '"var(--color-amber-600)"' }),
  'text-amber-700': () => ({ color: '"var(--color-amber-700)"' }),
  'text-amber-800': () => ({ color: '"var(--color-amber-800)"' }),
  'text-amber-900': () => ({ color: '"var(--color-amber-900)"' }),
  'text-amber-950': () => ({ color: '"var(--color-amber-950)"' }),
  'text-yellow-50': () => ({ color: '"var(--color-yellow-50)"' }),
  'text-yellow-100': () => ({ color: '"var(--color-yellow-100)"' }),
  'text-yellow-200': () => ({ color: '"var(--color-yellow-200)"' }),
  'text-yellow-300': () => ({ color: '"var(--color-yellow-300)"' }),
  'text-yellow-400': () => ({ color: '"var(--color-yellow-400)"' }),
  'text-yellow-500': () => ({ color: '"var(--color-yellow-500)"' }),
  'text-yellow-600': () => ({ color: '"var(--color-yellow-600)"' }),
  'text-yellow-700': () => ({ color: '"var(--color-yellow-700)"' }),
  'text-yellow-800': () => ({ color: '"var(--color-yellow-800)"' }),
  'text-yellow-900': () => ({ color: '"var(--color-yellow-900)"' }),
  'text-yellow-950': () => ({ color: '"var(--color-yellow-950)"' }),
  'text-lime-50': () => ({ color: '"var(--color-lime-50)"' }),
  'text-lime-100': () => ({ color: '"var(--color-lime-100)"' }),
  'text-lime-200': () => ({ color: '"var(--color-lime-200)"' }),
  'text-lime-300': () => ({ color: '"var(--color-lime-300)"' }),
  'text-lime-400': () => ({ color: '"var(--color-lime-400)"' }),
  'text-lime-500': () => ({ color: '"var(--color-lime-500)"' }),
  'text-lime-600': () => ({ color: '"var(--color-lime-600)"' }),
  'text-lime-700': () => ({ color: '"var(--color-lime-700)"' }),
  'text-lime-800': () => ({ color: '"var(--color-lime-800)"' }),
  'text-lime-900': () => ({ color: '"var(--color-lime-900)"' }),
  'text-lime-950': () => ({ color: '"var(--color-lime-950)"' }),
  'text-green-50': () => ({ color: '"var(--color-green-50)"' }),
  'text-green-100': () => ({ color: '"var(--color-green-100)"' }),
  'text-green-200': () => ({ color: '"var(--color-green-200)"' }),
  'text-green-300': () => ({ color: '"var(--color-green-300)"' }),
  'text-green-400': () => ({ color: '"var(--color-green-400)"' }),
  'text-green-500': () => ({ color: '"var(--color-green-500)"' }),
  'text-green-600': () => ({ color: '"var(--color-green-600)"' }),
  'text-green-700': () => ({ color: '"var(--color-green-700)"' }),
  'text-green-800': () => ({ color: '"var(--color-green-800)"' }),
  'text-green-900': () => ({ color: '"var(--color-green-900)"' }),
  'text-green-950': () => ({ color: '"var(--color-green-950)"' }),
  'text-emerald-50': () => ({ color: '"var(--color-emerald-50)"' }),
  'text-emerald-100': () => ({ color: '"var(--color-emerald-100)"' }),
  'text-emerald-200': () => ({ color: '"var(--color-emerald-200)"' }),
  'text-emerald-300': () => ({ color: '"var(--color-emerald-300)"' }),
  'text-emerald-400': () => ({ color: '"var(--color-emerald-400)"' }),
  'text-emerald-500': () => ({ color: '"var(--color-emerald-500)"' }),
  'text-emerald-600': () => ({ color: '"var(--color-emerald-600)"' }),
  'text-emerald-700': () => ({ color: '"var(--color-emerald-700)"' }),
  'text-emerald-800': () => ({ color: '"var(--color-emerald-800)"' }),
  'text-emerald-900': () => ({ color: '"var(--color-emerald-900)"' }),
  'text-emerald-950': () => ({ color: '"var(--color-emerald-950)"' }),
  'text-teal-50': () => ({ color: '"var(--color-teal-50)"' }),
  'text-teal-100': () => ({ color: '"var(--color-teal-100)"' }),
  'text-teal-200': () => ({ color: '"var(--color-teal-200)"' }),
  'text-teal-300': () => ({ color: '"var(--color-teal-300)"' }),
  'text-teal-400': () => ({ color: '"var(--color-teal-400)"' }),
  'text-teal-500': () => ({ color: '"var(--color-teal-500)"' }),
  'text-teal-600': () => ({ color: '"var(--color-teal-600)"' }),
  'text-teal-700': () => ({ color: '"var(--color-teal-700)"' }),
  'text-teal-800': () => ({ color: '"var(--color-teal-800)"' }),
  'text-teal-900': () => ({ color: '"var(--color-teal-900)"' }),
  'text-teal-950': () => ({ color: '"var(--color-teal-950)"' }),
  'text-cyan-50': () => ({ color: '"var(--color-cyan-50)"' }),
  'text-cyan-100': () => ({ color: '"var(--color-cyan-100)"' }),
  'text-cyan-200': () => ({ color: '"var(--color-cyan-200)"' }),
  'text-cyan-300': () => ({ color: '"var(--color-cyan-300)"' }),
  'text-cyan-400': () => ({ color: '"var(--color-cyan-400)"' }),
  'text-cyan-500': () => ({ color: '"var(--color-cyan-500)"' }),
  'text-cyan-600': () => ({ color: '"var(--color-cyan-600)"' }),
  'text-cyan-700': () => ({ color: '"var(--color-cyan-700)"' }),
  'text-cyan-800': () => ({ color: '"var(--color-cyan-800)"' }),
  'text-cyan-900': () => ({ color: '"var(--color-cyan-900)"' }),
  'text-cyan-950': () => ({ color: '"var(--color-cyan-950)"' }),
  'text-sky-50': () => ({ color: '"var(--color-sky-50)"' }),
  'text-sky-100': () => ({ color: '"var(--color-sky-100)"' }),
  'text-sky-200': () => ({ color: '"var(--color-sky-200)"' }),
  'text-sky-300': () => ({ color: '"var(--color-sky-300)"' }),
  'text-sky-400': () => ({ color: '"var(--color-sky-400)"' }),
  'text-sky-500': () => ({ color: '"var(--color-sky-500)"' }),
  'text-sky-600': () => ({ color: '"var(--color-sky-600)"' }),
  'text-sky-700': () => ({ color: '"var(--color-sky-700)"' }),
  'text-sky-800': () => ({ color: '"var(--color-sky-800)"' }),
  'text-sky-900': () => ({ color: '"var(--color-sky-900)"' }),
  'text-sky-950': () => ({ color: '"var(--color-sky-950)"' }),
  'text-blue-50': () => ({ color: '"var(--color-blue-50)"' }),
  'text-blue-100': () => ({ color: '"var(--color-blue-100)"' }),
  'text-blue-200': () => ({ color: '"var(--color-blue-200)"' }),
  'text-blue-300': () => ({ color: '"var(--color-blue-300)"' }),
  'text-blue-400': () => ({ color: '"var(--color-blue-400)"' }),
  'text-blue-500': () => ({ color: '"var(--color-blue-500)"' }),
  'text-blue-600': () => ({ color: '"var(--color-blue-600)"' }),
  'text-blue-700': () => ({ color: '"var(--color-blue-700)"' }),
  'text-blue-800': () => ({ color: '"var(--color-blue-800)"' }),
  'text-blue-900': () => ({ color: '"var(--color-blue-900)"' }),
  'text-blue-950': () => ({ color: '"var(--color-blue-950)"' }),
  'text-indigo-50': () => ({ color: '"var(--color-indigo-50)"' }),
  'text-indigo-100': () => ({ color: '"var(--color-indigo-100)"' }),
  'text-indigo-200': () => ({ color: '"var(--color-indigo-200)"' }),
  'text-indigo-300': () => ({ color: '"var(--color-indigo-300)"' }),
  'text-indigo-400': () => ({ color: '"var(--color-indigo-400)"' }),
  'text-indigo-500': () => ({ color: '"var(--color-indigo-500)"' }),
  'text-indigo-600': () => ({ color: '"var(--color-indigo-600)"' }),
  'text-indigo-700': () => ({ color: '"var(--color-indigo-700)"' }),
  'text-indigo-800': () => ({ color: '"var(--color-indigo-800)"' }),
  'text-indigo-900': () => ({ color: '"var(--color-indigo-900)"' }),
  'text-indigo-950': () => ({ color: '"var(--color-indigo-950)"' }),
  'text-violet-50': () => ({ color: '"var(--color-violet-50)"' }),
  'text-violet-100': () => ({ color: '"var(--color-violet-100)"' }),
  'text-violet-200': () => ({ color: '"var(--color-violet-200)"' }),
  'text-violet-300': () => ({ color: '"var(--color-violet-300)"' }),
  'text-violet-400': () => ({ color: '"var(--color-violet-400)"' }),
  'text-violet-500': () => ({ color: '"var(--color-violet-500)"' }),
  'text-violet-600': () => ({ color: '"var(--color-violet-600)"' }),
  'text-violet-700': () => ({ color: '"var(--color-violet-700)"' }),
  'text-violet-800': () => ({ color: '"var(--color-violet-800)"' }),
  'text-violet-900': () => ({ color: '"var(--color-violet-900)"' }),
  'text-violet-950': () => ({ color: '"var(--color-violet-950)"' }),
  'text-purple-50': () => ({ color: '"var(--color-purple-50)"' }),
  'text-purple-100': () => ({ color: '"var(--color-purple-100)"' }),
  'text-purple-200': () => ({ color: '"var(--color-purple-200)"' }),
  'text-purple-300': () => ({ color: '"var(--color-purple-300)"' }),
  'text-purple-400': () => ({ color: '"var(--color-purple-400)"' }),
  'text-purple-500': () => ({ color: '"var(--color-purple-500)"' }),
  'text-purple-600': () => ({ color: '"var(--color-purple-600)"' }),
  'text-purple-700': () => ({ color: '"var(--color-purple-700)"' }),
  'text-purple-800': () => ({ color: '"var(--color-purple-800)"' }),
  'text-purple-900': () => ({ color: '"var(--color-purple-900)"' }),
  'text-purple-950': () => ({ color: '"var(--color-purple-950)"' }),
  'text-fuchsia-50': () => ({ color: '"var(--color-fuchsia-50)"' }),
  'text-fuchsia-100': () => ({ color: '"var(--color-fuchsia-100)"' }),
  'text-fuchsia-200': () => ({ color: '"var(--color-fuchsia-200)"' }),
  'text-fuchsia-300': () => ({ color: '"var(--color-fuchsia-300)"' }),
  'text-fuchsia-400': () => ({ color: '"var(--color-fuchsia-400)"' }),
  'text-fuchsia-500': () => ({ color: '"var(--color-fuchsia-500)"' }),
  'text-fuchsia-600': () => ({ color: '"var(--color-fuchsia-600)"' }),
  'text-fuchsia-700': () => ({ color: '"var(--color-fuchsia-700)"' }),
  'text-fuchsia-800': () => ({ color: '"var(--color-fuchsia-800)"' }),
  'text-fuchsia-900': () => ({ color: '"var(--color-fuchsia-900)"' }),
  'text-fuchsia-950': () => ({ color: '"var(--color-fuchsia-950)"' }),
  'text-pink-50': () => ({ color: '"var(--color-pink-50)"' }),
  'text-pink-100': () => ({ color: '"var(--color-pink-100)"' }),
  'text-pink-200': () => ({ color: '"var(--color-pink-200)"' }),
  'text-pink-300': () => ({ color: '"var(--color-pink-300)"' }),
  'text-pink-400': () => ({ color: '"var(--color-pink-400)"' }),
  'text-pink-500': () => ({ color: '"var(--color-pink-500)"' }),
  'text-pink-600': () => ({ color: '"var(--color-pink-600)"' }),
  'text-pink-700': () => ({ color: '"var(--color-pink-700)"' }),
  'text-pink-800': () => ({ color: '"var(--color-pink-800)"' }),
  'text-pink-900': () => ({ color: '"var(--color-pink-900)"' }),
  'text-pink-950': () => ({ color: '"var(--color-pink-950)"' }),
  'text-rose-50': () => ({ color: '"var(--color-rose-50)"' }),
  'text-rose-100': () => ({ color: '"var(--color-rose-100)"' }),
  'text-rose-200': () => ({ color: '"var(--color-rose-200)"' }),
  'text-rose-300': () => ({ color: '"var(--color-rose-300)"' }),
  'text-rose-400': () => ({ color: '"var(--color-rose-400)"' }),
  'text-rose-500': () => ({ color: '"var(--color-rose-500)"' }),
  'text-rose-600': () => ({ color: '"var(--color-rose-600)"' }),
  'text-rose-700': () => ({ color: '"var(--color-rose-700)"' }),
  'text-rose-800': () => ({ color: '"var(--color-rose-800)"' }),
  'text-rose-900': () => ({ color: '"var(--color-rose-900)"' }),
  'text-rose-950': () => ({ color: '"var(--color-rose-950)"' }),
  'text-slate-50': () => ({ color: '"var(--color-slate-50)"' }),
  'text-slate-100': () => ({ color: '"var(--color-slate-100)"' }),
  'text-slate-200': () => ({ color: '"var(--color-slate-200)"' }),
  'text-slate-300': () => ({ color: '"var(--color-slate-300)"' }),
  'text-slate-400': () => ({ color: '"var(--color-slate-400)"' }),
  'text-slate-500': () => ({ color: '"var(--color-slate-500)"' }),
  'text-slate-600': () => ({ color: '"var(--color-slate-600)"' }),
  'text-slate-700': () => ({ color: '"var(--color-slate-700)"' }),
  'text-slate-800': () => ({ color: '"var(--color-slate-800)"' }),
  'text-slate-900': () => ({ color: '"var(--color-slate-900)"' }),
  'text-slate-950': () => ({ color: '"var(--color-slate-950)"' }),
  'text-gray-50': () => ({ color: '"var(--color-gray-50)"' }),
  'text-gray-100': () => ({ color: '"var(--color-gray-100)"' }),
  'text-gray-200': () => ({ color: '"var(--color-gray-200)"' }),
  'text-gray-300': () => ({ color: '"var(--color-gray-300)"' }),
  'text-gray-400': () => ({ color: '"var(--color-gray-400)"' }),
  'text-gray-500': () => ({ color: '"var(--color-gray-500)"' }),
  'text-gray-600': () => ({ color: '"var(--color-gray-600)"' }),
  'text-gray-700': () => ({ color: '"var(--color-gray-700)"' }),
  'text-gray-800': () => ({ color: '"var(--color-gray-800)"' }),
  'text-gray-900': () => ({ color: '"var(--color-gray-900)"' }),
  'text-gray-950': () => ({ color: '"var(--color-gray-950)"' }),
  'text-zinc-50': () => ({ color: '"var(--color-zinc-50)"' }),
  'text-zinc-100': () => ({ color: '"var(--color-zinc-100)"' }),
  'text-zinc-200': () => ({ color: '"var(--color-zinc-200)"' }),
  'text-zinc-300': () => ({ color: '"var(--color-zinc-300)"' }),
  'text-zinc-400': () => ({ color: '"var(--color-zinc-400)"' }),
  'text-zinc-500': () => ({ color: '"var(--color-zinc-500)"' }),
  'text-zinc-600': () => ({ color: '"var(--color-zinc-600)"' }),
  'text-zinc-700': () => ({ color: '"var(--color-zinc-700)"' }),
  'text-zinc-800': () => ({ color: '"var(--color-zinc-800)"' }),
  'text-zinc-900': () => ({ color: '"var(--color-zinc-900)"' }),
  'text-zinc-950': () => ({ color: '"var(--color-zinc-950)"' }),
  'text-neutral-50': () => ({ color: '"var(--color-neutral-50)"' }),
  'text-neutral-100': () => ({ color: '"var(--color-neutral-100)"' }),
  'text-neutral-200': () => ({ color: '"var(--color-neutral-200)"' }),
  'text-neutral-300': () => ({ color: '"var(--color-neutral-300)"' }),
  'text-neutral-400': () => ({ color: '"var(--color-neutral-400)"' }),
  'text-neutral-500': () => ({ color: '"var(--color-neutral-500)"' }),
  'text-neutral-600': () => ({ color: '"var(--color-neutral-600)"' }),
  'text-neutral-700': () => ({ color: '"var(--color-neutral-700)"' }),
  'text-neutral-800': () => ({ color: '"var(--color-neutral-800)"' }),
  'text-neutral-900': () => ({ color: '"var(--color-neutral-900)"' }),
  'text-neutral-950': () => ({ color: '"var(--color-neutral-950)"' }),
  'text-stone-50': () => ({ color: '"var(--color-stone-50)"' }),
  'text-stone-100': () => ({ color: '"var(--color-stone-100)"' }),
  'text-stone-200': () => ({ color: '"var(--color-stone-200)"' }),
  'text-stone-300': () => ({ color: '"var(--color-stone-300)"' }),
  'text-stone-400': () => ({ color: '"var(--color-stone-400)"' }),
  'text-stone-500': () => ({ color: '"var(--color-stone-500)"' }),
  'text-stone-600': () => ({ color: '"var(--color-stone-600)"' }),
  'text-stone-700': () => ({ color: '"var(--color-stone-700)"' }),
  'text-stone-800': () => ({ color: '"var(--color-stone-800)"' }),
  'text-stone-900': () => ({ color: '"var(--color-stone-900)"' }),
  'text-stone-950': () => ({ color: '"var(--color-stone-950)"' }),
  'text-[<color>]': ([value]) => ({ color: `"${value}"` }),
  'text-(<custom-property>)': ([value]) => ({ color: `"var(${value})"` }),

  // text-decoration-line
  underline: () => ({ textDecorationLine: '"underline"' }),
  overline: () => ({ textDecorationLine: '"overline"' }),
  'line-through': () => ({ textDecorationLine: '"line-through"' }),
  'no-underline': () => ({ textDecorationLine: '"none"' }),

  // text-decoration-color
  'decoration-inherit': () => ({ textDecorationColor: '"inherit"' }),
  'decoration-current': () => ({ textDecorationColor: '"currentColor"' }),
  'decoration-transparent': () => ({ textDecorationColor: '"transparent"' }),
  'decoration-black': () => ({ textDecorationColor: '"var(--color-black)"' }),
  'decoration-white': () => ({ textDecorationColor: '"var(--color-white)"' }),
  'decoration-red-50': () => ({ textDecorationColor: '"var(--color-red-50)"' }),
  'decoration-red-100': () => ({ textDecorationColor: '"var(--color-red-100)"' }),
  'decoration-red-200': () => ({ textDecorationColor: '"var(--color-red-200)"' }),
  'decoration-red-300': () => ({ textDecorationColor: '"var(--color-red-300)"' }),
  'decoration-red-400': () => ({ textDecorationColor: '"var(--color-red-400)"' }),
  'decoration-red-500': () => ({ textDecorationColor: '"var(--color-red-500)"' }),
  'decoration-red-600': () => ({ textDecorationColor: '"var(--color-red-600)"' }),
  'decoration-red-700': () => ({ textDecorationColor: '"var(--color-red-700)"' }),
  'decoration-red-800': () => ({ textDecorationColor: '"var(--color-red-800)"' }),
  'decoration-red-900': () => ({ textDecorationColor: '"var(--color-red-900)"' }),
  'decoration-red-950': () => ({ textDecorationColor: '"var(--color-red-950)"' }),
  'decoration-orange-50': () => ({ textDecorationColor: '"var(--color-orange-50)"' }),
  'decoration-orange-100': () => ({ textDecorationColor: '"var(--color-orange-100)"' }),
  'decoration-orange-200': () => ({ textDecorationColor: '"var(--color-orange-200)"' }),
  'decoration-orange-300': () => ({ textDecorationColor: '"var(--color-orange-300)"' }),
  'decoration-orange-400': () => ({ textDecorationColor: '"var(--color-orange-400)"' }),
  'decoration-orange-500': () => ({ textDecorationColor: '"var(--color-orange-500)"' }),
  'decoration-orange-600': () => ({ textDecorationColor: '"var(--color-orange-600)"' }),
  'decoration-orange-700': () => ({ textDecorationColor: '"var(--color-orange-700)"' }),
  'decoration-orange-800': () => ({ textDecorationColor: '"var(--color-orange-800)"' }),
  'decoration-orange-900': () => ({ textDecorationColor: '"var(--color-orange-900)"' }),
  'decoration-orange-950': () => ({ textDecorationColor: '"var(--color-orange-950)"' }),
  'decoration-amber-50': () => ({ textDecorationColor: '"var(--color-amber-50)"' }),
  'decoration-amber-100': () => ({ textDecorationColor: '"var(--color-amber-100)"' }),
  'decoration-amber-200': () => ({ textDecorationColor: '"var(--color-amber-200)"' }),
  'decoration-amber-300': () => ({ textDecorationColor: '"var(--color-amber-300)"' }),
  'decoration-amber-400': () => ({ textDecorationColor: '"var(--color-amber-400)"' }),
  'decoration-amber-500': () => ({ textDecorationColor: '"var(--color-amber-500)"' }),
  'decoration-amber-600': () => ({ textDecorationColor: '"var(--color-amber-600)"' }),
  'decoration-amber-700': () => ({ textDecorationColor: '"var(--color-amber-700)"' }),
  'decoration-amber-800': () => ({ textDecorationColor: '"var(--color-amber-800)"' }),
  'decoration-amber-900': () => ({ textDecorationColor: '"var(--color-amber-900)"' }),
  'decoration-amber-950': () => ({ textDecorationColor: '"var(--color-amber-950)"' }),
  'decoration-yellow-50': () => ({ textDecorationColor: '"var(--color-yellow-50)"' }),
  'decoration-yellow-100': () => ({ textDecorationColor: '"var(--color-yellow-100)"' }),
  'decoration-yellow-200': () => ({ textDecorationColor: '"var(--color-yellow-200)"' }),
  'decoration-yellow-300': () => ({ textDecorationColor: '"var(--color-yellow-300)"' }),
  'decoration-yellow-400': () => ({ textDecorationColor: '"var(--color-yellow-400)"' }),
  'decoration-yellow-500': () => ({ textDecorationColor: '"var(--color-yellow-500)"' }),
  'decoration-yellow-600': () => ({ textDecorationColor: '"var(--color-yellow-600)"' }),
  'decoration-yellow-700': () => ({ textDecorationColor: '"var(--color-yellow-700)"' }),
  'decoration-yellow-800': () => ({ textDecorationColor: '"var(--color-yellow-800)"' }),
  'decoration-yellow-900': () => ({ textDecorationColor: '"var(--color-yellow-900)"' }),
  'decoration-yellow-950': () => ({ textDecorationColor: '"var(--color-yellow-950)"' }),
  'decoration-lime-50': () => ({ textDecorationColor: '"var(--color-lime-50)"' }),
  'decoration-lime-100': () => ({ textDecorationColor: '"var(--color-lime-100)"' }),
  'decoration-lime-200': () => ({ textDecorationColor: '"var(--color-lime-200)"' }),
  'decoration-lime-300': () => ({ textDecorationColor: '"var(--color-lime-300)"' }),
  'decoration-lime-400': () => ({ textDecorationColor: '"var(--color-lime-400)"' }),
  'decoration-lime-500': () => ({ textDecorationColor: '"var(--color-lime-500)"' }),
  'decoration-lime-600': () => ({ textDecorationColor: '"var(--color-lime-600)"' }),
  'decoration-lime-700': () => ({ textDecorationColor: '"var(--color-lime-700)"' }),
  'decoration-lime-800': () => ({ textDecorationColor: '"var(--color-lime-800)"' }),
  'decoration-lime-900': () => ({ textDecorationColor: '"var(--color-lime-900)"' }),
  'decoration-lime-950': () => ({ textDecorationColor: '"var(--color-lime-950)"' }),
  'decoration-green-50': () => ({ textDecorationColor: '"var(--color-green-50)"' }),
  'decoration-green-100': () => ({ textDecorationColor: '"var(--color-green-100)"' }),
  'decoration-green-200': () => ({ textDecorationColor: '"var(--color-green-200)"' }),
  'decoration-green-300': () => ({ textDecorationColor: '"var(--color-green-300)"' }),
  'decoration-green-400': () => ({ textDecorationColor: '"var(--color-green-400)"' }),
  'decoration-green-500': () => ({ textDecorationColor: '"var(--color-green-500)"' }),
  'decoration-green-600': () => ({ textDecorationColor: '"var(--color-green-600)"' }),
  'decoration-green-700': () => ({ textDecorationColor: '"var(--color-green-700)"' }),
  'decoration-green-800': () => ({ textDecorationColor: '"var(--color-green-800)"' }),
  'decoration-green-900': () => ({ textDecorationColor: '"var(--color-green-900)"' }),
  'decoration-green-950': () => ({ textDecorationColor: '"var(--color-green-950)"' }),
  'decoration-emerald-50': () => ({ textDecorationColor: '"var(--color-emerald-50)"' }),
  'decoration-emerald-100': () => ({ textDecorationColor: '"var(--color-emerald-100)"' }),
  'decoration-emerald-200': () => ({ textDecorationColor: '"var(--color-emerald-200)"' }),
  'decoration-emerald-300': () => ({ textDecorationColor: '"var(--color-emerald-300)"' }),
  'decoration-emerald-400': () => ({ textDecorationColor: '"var(--color-emerald-400)"' }),
  'decoration-emerald-500': () => ({ textDecorationColor: '"var(--color-emerald-500)"' }),
  'decoration-emerald-600': () => ({ textDecorationColor: '"var(--color-emerald-600)"' }),
  'decoration-emerald-700': () => ({ textDecorationColor: '"var(--color-emerald-700)"' }),
  'decoration-emerald-800': () => ({ textDecorationColor: '"var(--color-emerald-800)"' }),
  'decoration-emerald-900': () => ({ textDecorationColor: '"var(--color-emerald-900)"' }),
  'decoration-emerald-950': () => ({ textDecorationColor: '"var(--color-emerald-950)"' }),
  'decoration-teal-50': () => ({ textDecorationColor: '"var(--color-teal-50)"' }),
  'decoration-teal-100': () => ({ textDecorationColor: '"var(--color-teal-100)"' }),
  'decoration-teal-200': () => ({ textDecorationColor: '"var(--color-teal-200)"' }),
  'decoration-teal-300': () => ({ textDecorationColor: '"var(--color-teal-300)"' }),
  'decoration-teal-400': () => ({ textDecorationColor: '"var(--color-teal-400)"' }),
  'decoration-teal-500': () => ({ textDecorationColor: '"var(--color-teal-500)"' }),
  'decoration-teal-600': () => ({ textDecorationColor: '"var(--color-teal-600)"' }),
  'decoration-teal-700': () => ({ textDecorationColor: '"var(--color-teal-700)"' }),
  'decoration-teal-800': () => ({ textDecorationColor: '"var(--color-teal-800)"' }),
  'decoration-teal-900': () => ({ textDecorationColor: '"var(--color-teal-900)"' }),
  'decoration-teal-950': () => ({ textDecorationColor: '"var(--color-teal-950)"' }),
  'decoration-cyan-50': () => ({ textDecorationColor: '"var(--color-cyan-50)"' }),
  'decoration-cyan-100': () => ({ textDecorationColor: '"var(--color-cyan-100)"' }),
  'decoration-cyan-200': () => ({ textDecorationColor: '"var(--color-cyan-200)"' }),
  'decoration-cyan-300': () => ({ textDecorationColor: '"var(--color-cyan-300)"' }),
  'decoration-cyan-400': () => ({ textDecorationColor: '"var(--color-cyan-400)"' }),
  'decoration-cyan-500': () => ({ textDecorationColor: '"var(--color-cyan-500)"' }),
  'decoration-cyan-600': () => ({ textDecorationColor: '"var(--color-cyan-600)"' }),
  'decoration-cyan-700': () => ({ textDecorationColor: '"var(--color-cyan-700)"' }),
  'decoration-cyan-800': () => ({ textDecorationColor: '"var(--color-cyan-800)"' }),
  'decoration-cyan-900': () => ({ textDecorationColor: '"var(--color-cyan-900)"' }),
  'decoration-cyan-950': () => ({ textDecorationColor: '"var(--color-cyan-950)"' }),
  'decoration-sky-50': () => ({ textDecorationColor: '"var(--color-sky-50)"' }),
  'decoration-sky-100': () => ({ textDecorationColor: '"var(--color-sky-100)"' }),
  'decoration-sky-200': () => ({ textDecorationColor: '"var(--color-sky-200)"' }),
  'decoration-sky-300': () => ({ textDecorationColor: '"var(--color-sky-300)"' }),
  'decoration-sky-400': () => ({ textDecorationColor: '"var(--color-sky-400)"' }),
  'decoration-sky-500': () => ({ textDecorationColor: '"var(--color-sky-500)"' }),
  'decoration-sky-600': () => ({ textDecorationColor: '"var(--color-sky-600)"' }),
  'decoration-sky-700': () => ({ textDecorationColor: '"var(--color-sky-700)"' }),
  'decoration-sky-800': () => ({ textDecorationColor: '"var(--color-sky-800)"' }),
  'decoration-sky-900': () => ({ textDecorationColor: '"var(--color-sky-900)"' }),
  'decoration-sky-950': () => ({ textDecorationColor: '"var(--color-sky-950)"' }),
  'decoration-blue-50': () => ({ textDecorationColor: '"var(--color-blue-50)"' }),
  'decoration-blue-100': () => ({ textDecorationColor: '"var(--color-blue-100)"' }),
  'decoration-blue-200': () => ({ textDecorationColor: '"var(--color-blue-200)"' }),
  'decoration-blue-300': () => ({ textDecorationColor: '"var(--color-blue-300)"' }),
  'decoration-blue-400': () => ({ textDecorationColor: '"var(--color-blue-400)"' }),
  'decoration-blue-500': () => ({ textDecorationColor: '"var(--color-blue-500)"' }),
  'decoration-blue-600': () => ({ textDecorationColor: '"var(--color-blue-600)"' }),
  'decoration-blue-700': () => ({ textDecorationColor: '"var(--color-blue-700)"' }),
  'decoration-blue-800': () => ({ textDecorationColor: '"var(--color-blue-800)"' }),
  'decoration-blue-900': () => ({ textDecorationColor: '"var(--color-blue-900)"' }),
  'decoration-blue-950': () => ({ textDecorationColor: '"var(--color-blue-950)"' }),
  'decoration-indigo-50': () => ({ textDecorationColor: '"var(--color-indigo-50)"' }),
  'decoration-indigo-100': () => ({ textDecorationColor: '"var(--color-indigo-100)"' }),
  'decoration-indigo-200': () => ({ textDecorationColor: '"var(--color-indigo-200)"' }),
  'decoration-indigo-300': () => ({ textDecorationColor: '"var(--color-indigo-300)"' }),
  'decoration-indigo-400': () => ({ textDecorationColor: '"var(--color-indigo-400)"' }),
  'decoration-indigo-500': () => ({ textDecorationColor: '"var(--color-indigo-500)"' }),
  'decoration-indigo-600': () => ({ textDecorationColor: '"var(--color-indigo-600)"' }),
  'decoration-indigo-700': () => ({ textDecorationColor: '"var(--color-indigo-700)"' }),
  'decoration-indigo-800': () => ({ textDecorationColor: '"var(--color-indigo-800)"' }),
  'decoration-indigo-900': () => ({ textDecorationColor: '"var(--color-indigo-900)"' }),
  'decoration-indigo-950': () => ({ textDecorationColor: '"var(--color-indigo-950)"' }),
  'decoration-violet-50': () => ({ textDecorationColor: '"var(--color-violet-50)"' }),
  'decoration-violet-100': () => ({ textDecorationColor: '"var(--color-violet-100)"' }),
  'decoration-violet-200': () => ({ textDecorationColor: '"var(--color-violet-200)"' }),
  'decoration-violet-300': () => ({ textDecorationColor: '"var(--color-violet-300)"' }),
  'decoration-violet-400': () => ({ textDecorationColor: '"var(--color-violet-400)"' }),
  'decoration-violet-500': () => ({ textDecorationColor: '"var(--color-violet-500)"' }),
  'decoration-violet-600': () => ({ textDecorationColor: '"var(--color-violet-600)"' }),
  'decoration-violet-700': () => ({ textDecorationColor: '"var(--color-violet-700)"' }),
  'decoration-violet-800': () => ({ textDecorationColor: '"var(--color-violet-800)"' }),
  'decoration-violet-900': () => ({ textDecorationColor: '"var(--color-violet-900)"' }),
  'decoration-violet-950': () => ({ textDecorationColor: '"var(--color-violet-950)"' }),
  'decoration-purple-50': () => ({ textDecorationColor: '"var(--color-purple-50)"' }),
  'decoration-purple-100': () => ({ textDecorationColor: '"var(--color-purple-100)"' }),
  'decoration-purple-200': () => ({ textDecorationColor: '"var(--color-purple-200)"' }),
  'decoration-purple-300': () => ({ textDecorationColor: '"var(--color-purple-300)"' }),
  'decoration-purple-400': () => ({ textDecorationColor: '"var(--color-purple-400)"' }),
  'decoration-purple-500': () => ({ textDecorationColor: '"var(--color-purple-500)"' }),
  'decoration-purple-600': () => ({ textDecorationColor: '"var(--color-purple-600)"' }),
  'decoration-purple-700': () => ({ textDecorationColor: '"var(--color-purple-700)"' }),
  'decoration-purple-800': () => ({ textDecorationColor: '"var(--color-purple-800)"' }),
  'decoration-purple-900': () => ({ textDecorationColor: '"var(--color-purple-900)"' }),
  'decoration-purple-950': () => ({ textDecorationColor: '"var(--color-purple-950)"' }),
  'decoration-fuchsia-50': () => ({ textDecorationColor: '"var(--color-fuchsia-50)"' }),
  'decoration-fuchsia-100': () => ({ textDecorationColor: '"var(--color-fuchsia-100)"' }),
  'decoration-fuchsia-200': () => ({ textDecorationColor: '"var(--color-fuchsia-200)"' }),
  'decoration-fuchsia-300': () => ({ textDecorationColor: '"var(--color-fuchsia-300)"' }),
  'decoration-fuchsia-400': () => ({ textDecorationColor: '"var(--color-fuchsia-400)"' }),
  'decoration-fuchsia-500': () => ({ textDecorationColor: '"var(--color-fuchsia-500)"' }),
  'decoration-fuchsia-600': () => ({ textDecorationColor: '"var(--color-fuchsia-600)"' }),
  'decoration-fuchsia-700': () => ({ textDecorationColor: '"var(--color-fuchsia-700)"' }),
  'decoration-fuchsia-800': () => ({ textDecorationColor: '"var(--color-fuchsia-800)"' }),
  'decoration-fuchsia-900': () => ({ textDecorationColor: '"var(--color-fuchsia-900)"' }),
  'decoration-fuchsia-950': () => ({ textDecorationColor: '"var(--color-fuchsia-950)"' }),
  'decoration-pink-50': () => ({ textDecorationColor: '"var(--color-pink-50)"' }),
  'decoration-pink-100': () => ({ textDecorationColor: '"var(--color-pink-100)"' }),
  'decoration-pink-200': () => ({ textDecorationColor: '"var(--color-pink-200)"' }),
  'decoration-pink-300': () => ({ textDecorationColor: '"var(--color-pink-300)"' }),
  'decoration-pink-400': () => ({ textDecorationColor: '"var(--color-pink-400)"' }),
  'decoration-pink-500': () => ({ textDecorationColor: '"var(--color-pink-500)"' }),
  'decoration-pink-600': () => ({ textDecorationColor: '"var(--color-pink-600)"' }),
  'decoration-pink-700': () => ({ textDecorationColor: '"var(--color-pink-700)"' }),
  'decoration-pink-800': () => ({ textDecorationColor: '"var(--color-pink-800)"' }),
  'decoration-pink-900': () => ({ textDecorationColor: '"var(--color-pink-900)"' }),
  'decoration-pink-950': () => ({ textDecorationColor: '"var(--color-pink-950)"' }),
  'decoration-rose-50': () => ({ textDecorationColor: '"var(--color-rose-50)"' }),
  'decoration-rose-100': () => ({ textDecorationColor: '"var(--color-rose-100)"' }),
  'decoration-rose-200': () => ({ textDecorationColor: '"var(--color-rose-200)"' }),
  'decoration-rose-300': () => ({ textDecorationColor: '"var(--color-rose-300)"' }),
  'decoration-rose-400': () => ({ textDecorationColor: '"var(--color-rose-400)"' }),
  'decoration-rose-500': () => ({ textDecorationColor: '"var(--color-rose-500)"' }),
  'decoration-rose-600': () => ({ textDecorationColor: '"var(--color-rose-600)"' }),
  'decoration-rose-700': () => ({ textDecorationColor: '"var(--color-rose-700)"' }),
  'decoration-rose-800': () => ({ textDecorationColor: '"var(--color-rose-800)"' }),
  'decoration-rose-900': () => ({ textDecorationColor: '"var(--color-rose-900)"' }),
  'decoration-rose-950': () => ({ textDecorationColor: '"var(--color-rose-950)"' }),
  'decoration-slate-50': () => ({ textDecorationColor: '"var(--color-slate-50)"' }),
  'decoration-slate-100': () => ({ textDecorationColor: '"var(--color-slate-100)"' }),
  'decoration-slate-200': () => ({ textDecorationColor: '"var(--color-slate-200)"' }),
  'decoration-slate-300': () => ({ textDecorationColor: '"var(--color-slate-300)"' }),
  'decoration-slate-400': () => ({ textDecorationColor: '"var(--color-slate-400)"' }),
  'decoration-slate-500': () => ({ textDecorationColor: '"var(--color-slate-500)"' }),
  'decoration-slate-600': () => ({ textDecorationColor: '"var(--color-slate-600)"' }),
  'decoration-slate-700': () => ({ textDecorationColor: '"var(--color-slate-700)"' }),
  'decoration-slate-800': () => ({ textDecorationColor: '"var(--color-slate-800)"' }),
  'decoration-slate-900': () => ({ textDecorationColor: '"var(--color-slate-900)"' }),
  'decoration-slate-950': () => ({ textDecorationColor: '"var(--color-slate-950)"' }),
  'decoration-gray-50': () => ({ textDecorationColor: '"var(--color-gray-50)"' }),
  'decoration-gray-100': () => ({ textDecorationColor: '"var(--color-gray-100)"' }),
  'decoration-gray-200': () => ({ textDecorationColor: '"var(--color-gray-200)"' }),
  'decoration-gray-300': () => ({ textDecorationColor: '"var(--color-gray-300)"' }),
  'decoration-gray-400': () => ({ textDecorationColor: '"var(--color-gray-400)"' }),
  'decoration-gray-500': () => ({ textDecorationColor: '"var(--color-gray-500)"' }),
  'decoration-gray-600': () => ({ textDecorationColor: '"var(--color-gray-600)"' }),
  'decoration-gray-700': () => ({ textDecorationColor: '"var(--color-gray-700)"' }),
  'decoration-gray-800': () => ({ textDecorationColor: '"var(--color-gray-800)"' }),
  'decoration-gray-900': () => ({ textDecorationColor: '"var(--color-gray-900)"' }),
  'decoration-gray-950': () => ({ textDecorationColor: '"var(--color-gray-950)"' }),
  'decoration-zinc-50': () => ({ textDecorationColor: '"var(--color-zinc-50)"' }),
  'decoration-zinc-100': () => ({ textDecorationColor: '"var(--color-zinc-100)"' }),
  'decoration-zinc-200': () => ({ textDecorationColor: '"var(--color-zinc-200)"' }),
  'decoration-zinc-300': () => ({ textDecorationColor: '"var(--color-zinc-300)"' }),
  'decoration-zinc-400': () => ({ textDecorationColor: '"var(--color-zinc-400)"' }),
  'decoration-zinc-500': () => ({ textDecorationColor: '"var(--color-zinc-500)"' }),
  'decoration-zinc-600': () => ({ textDecorationColor: '"var(--color-zinc-600)"' }),
  'decoration-zinc-700': () => ({ textDecorationColor: '"var(--color-zinc-700)"' }),
  'decoration-zinc-800': () => ({ textDecorationColor: '"var(--color-zinc-800)"' }),
  'decoration-zinc-900': () => ({ textDecorationColor: '"var(--color-zinc-900)"' }),
  'decoration-zinc-950': () => ({ textDecorationColor: '"var(--color-zinc-950)"' }),
  'decoration-neutral-50': () => ({ textDecorationColor: '"var(--color-neutral-50)"' }),
  'decoration-neutral-100': () => ({ textDecorationColor: '"var(--color-neutral-100)"' }),
  'decoration-neutral-200': () => ({ textDecorationColor: '"var(--color-neutral-200)"' }),
  'decoration-neutral-300': () => ({ textDecorationColor: '"var(--color-neutral-300)"' }),
  'decoration-neutral-400': () => ({ textDecorationColor: '"var(--color-neutral-400)"' }),
  'decoration-neutral-500': () => ({ textDecorationColor: '"var(--color-neutral-500)"' }),
  'decoration-neutral-600': () => ({ textDecorationColor: '"var(--color-neutral-600)"' }),
  'decoration-neutral-700': () => ({ textDecorationColor: '"var(--color-neutral-700)"' }),
  'decoration-neutral-800': () => ({ textDecorationColor: '"var(--color-neutral-800)"' }),
  'decoration-neutral-900': () => ({ textDecorationColor: '"var(--color-neutral-900)"' }),
  'decoration-neutral-950': () => ({ textDecorationColor: '"var(--color-neutral-950)"' }),
  'decoration-stone-50': () => ({ textDecorationColor: '"var(--color-stone-50)"' }),
  'decoration-stone-100': () => ({ textDecorationColor: '"var(--color-stone-100)"' }),
  'decoration-stone-200': () => ({ textDecorationColor: '"var(--color-stone-200)"' }),
  'decoration-stone-300': () => ({ textDecorationColor: '"var(--color-stone-300)"' }),
  'decoration-stone-400': () => ({ textDecorationColor: '"var(--color-stone-400)"' }),
  'decoration-stone-500': () => ({ textDecorationColor: '"var(--color-stone-500)"' }),
  'decoration-stone-600': () => ({ textDecorationColor: '"var(--color-stone-600)"' }),
  'decoration-stone-700': () => ({ textDecorationColor: '"var(--color-stone-700)"' }),
  'decoration-stone-800': () => ({ textDecorationColor: '"var(--color-stone-800)"' }),
  'decoration-stone-900': () => ({ textDecorationColor: '"var(--color-stone-900)"' }),
  'decoration-stone-950': () => ({ textDecorationColor: '"var(--color-stone-950)"' }),
  'decoration-(<custom-property>)': ([value]) => ({ textDecorationColor: `"var(${value})"` }),
  'decoration-[<color>]': ([value]) => ({ textDecorationColor: `"${value}"` }),

  // text-decoration-style
  'decoration-solid': () => ({ textDecorationStyle: '"solid"' }),
  'decoration-double': () => ({ textDecorationStyle: '"double"' }),
  'decoration-dotted': () => ({ textDecorationStyle: '"dotted"' }),
  'decoration-dashed': () => ({ textDecorationStyle: '"dashed"' }),
  'decoration-wavy': () => ({ textDecorationStyle: '"wavy"' }),

  // text-decoration-thickness
  'decoration-<number>': ([value]) => ({ textDecorationThickness: `"${value}px"` }),
  'decoration-auto': () => ({ textDecorationThickness: '"auto"' }),
  'decoration-from-font': () => ({ textDecorationThickness: '"from-font"' }),
  // 'decoration-(<custom-property>)': ([value]) => ({ textDecorationThickness: `"var(${value})"` }),
  'decoration-[<value>]': ([value]) => ({ textDecorationThickness: `"${value}"` }),

  // text-decoration-offset
  'underline-offset-<number>': ([value]) => ({ textUnderlineOffset: `"${value}px"` }),
  '-underline-offset-<number>': ([value]) => ({ textUnderlineOffset: `"calc(${value}px * -1)"` }),
  'underline-offset-auto': () => ({ textUnderlineOffset: '"auto"' }),
  'underline-offset-(<custom-property>)': ([value]) => ({ textUnderlineOffset: `"var(${value})"` }),
  'underline-offset-[<value>]': ([value]) => ({ textUnderlineOffset: `"${value}"` }),

  // text-transform
  uppercase: () => ({ textTransform: '"uppercase"' }),
  lowercase: () => ({ textTransform: '"lowercase"' }),
  capitalize: () => ({ textTransform: '"capitalize"' }),
  'normal-case': () => ({ textTransform: '"normal-case"' }),

  // text-overflow
  truncate: () => ({ overflow: '"hidden"', textOverflow: '"ellipsis"', whiteSpace: '"nowrap"' }),
  'text-ellipsis': () => ({ textOverflow: '"ellipsis"' }),
  'text-clip': () => ({ textOverflow: '"clip"' }),

  // text-wrap
  'text-wrap': () => ({ textWrap: '"wrap"' }),
  'text-nowrap': () => ({ textWrap: '"nowrap"' }),
  'text-balance': () => ({ textWrap: '"balance"' }),
  'text-pretty': () => ({ textWrap: '"pretty"' }),

  // text-indent
  'indent-<number>': ([value]) => ({ textIndent: `"calc(var(--spacing) * ${value})"` }),
  '-indent-<number>': ([value]) => ({ textIndent: `"calc(var(--spacing) * -${value})"` }),
  'indent-px': () => ({ textIndent: '"1px"' }),
  '-indent-px': () => ({ textIndent: '"-1px"' }),
  'indent-(<custom-property>)': ([value]) => ({ textIndent: `"var(${value})"` }),
  'indent-[<value>]': ([value]) => ({ textIndent: `"${value}"` }),

  // vertical-align
  'align-baseline': () => ({ verticalAlign: '"baseline"' }),
  'align-top': () => ({ verticalAlign: '"top"' }),
  'align-middle': () => ({ verticalAlign: '"middle"' }),
  'align-bottom': () => ({ verticalAlign: '"bottom"' }),
  'align-text-top': () => ({ verticalAlign: '"text-top"' }),
  'align-text-bottom': () => ({ verticalAlign: '"text-bottom"' }),
  'align-sub': () => ({ verticalAlign: '"sub"' }),
  'align-super': () => ({ verticalAlign: '"super"' }),
  'align-(<custom-property>)': ([value]) => ({ verticalAlign: `"var(${value})"` }),
  'align-[<value>]': ([value]) => ({ verticalAlign: `"${value}"` }),

  // whitespace
  'whitespace-normal': () => ({ whiteSpace: '"normal"' }),
  'whitespace-nowrap': () => ({ whiteSpace: '"nowrap"' }),
  'whitespace-pre': () => ({ whiteSpace: '"pre"' }),
  'whitespace-pre-line': () => ({ whiteSpace: '"pre-line"' }),
  'whitespace-pre-wrap': () => ({ whiteSpace: '"pre-wrap"' }),
  'whitespace-break-spaces': () => ({ whiteSpace: '"break-spaces"' }),

  // word-break
  'break-normal': () => ({ overflowWrap: '"normal"', wordBreak: '"normal"' }),
  'break-words': () => ({ overflowWrap: '"break-words"' }),
  'break-all': () => ({ wordBreak: '"break-all"' }),
  'break-keep': () => ({ wordBreak: '"break-keep"' }),

  // hyphens
  'hyphens-none': () => ({ hyphens: '"none"' }),
  'hyphens-manual': () => ({ hyphens: '"manual"' }),
  'hyphens-auto': () => ({ hyphens: '"auto"' }),

  // content
  'content-[<value>]': ([value]) => ({ content: `"${value}"` }),
  'content-(<custom-property>)': ([value]) => ({ content: `"var(${value})"` }),
  'content-none': () => ({ content: '"none"' }),

  // BACKGROUNDS

  //background-attachment
  'bg-fixed': () => ({ backgroundAttachment: '"fixed"' }),
  'bg-local': () => ({ backgroundAttachment: '"local"' }),
  'bg-scroll': () => ({ backgroundAttachment: '"scroll"' }),

  //background-clip
  'bg-clip-border': () => ({ backgroundClip: '"border-box"' }),
  'bg-clip-padding': () => ({ backgroundClip: '"padding-box"' }),
  'bg-clip-content': () => ({ backgroundClip: '"content-box"' }),
  'bg-clip-text': () => ({ backgroundClip: '"text"' }),

  //background-color
  'bg-inherit': () => ({ backgroundColor: '"inherit"' }),
  'bg-current': () => ({ backgroundColor: '"currentColor"' }),
  'bg-transparent': () => ({ backgroundColor: '"transparent"' }),
  'bg-black': () => ({ backgroundColor: '"var(--color-black)"' }),
  'bg-white': () => ({ backgroundColor: '"var(--color-white)"' }),
  'bg-red-50': () => ({ backgroundColor: '"var(--color-red-50)"' }),
  'bg-red-100': () => ({ backgroundColor: '"var(--color-red-100)"' }),
  'bg-red-200': () => ({ backgroundColor: '"var(--color-red-200)"' }),
  'bg-red-300': () => ({ backgroundColor: '"var(--color-red-300)"' }),
  'bg-red-400': () => ({ backgroundColor: '"var(--color-red-400)"' }),
  'bg-red-500': () => ({ backgroundColor: '"var(--color-red-500)"' }),
  'bg-red-600': () => ({ backgroundColor: '"var(--color-red-600)"' }),
  'bg-red-700': () => ({ backgroundColor: '"var(--color-red-700)"' }),
  'bg-red-800': () => ({ backgroundColor: '"var(--color-red-800)"' }),
  'bg-red-900': () => ({ backgroundColor: '"var(--color-red-900)"' }),
  'bg-red-950': () => ({ backgroundColor: '"var(--color-red-950)"' }),
  'bg-orange-50': () => ({ backgroundColor: '"var(--color-orange-50)"' }),
  'bg-orange-100': () => ({ backgroundColor: '"var(--color-orange-100)"' }),
  'bg-orange-200': () => ({ backgroundColor: '"var(--color-orange-200)"' }),
  'bg-orange-300': () => ({ backgroundColor: '"var(--color-orange-300)"' }),
  'bg-orange-400': () => ({ backgroundColor: '"var(--color-orange-400)"' }),
  'bg-orange-500': () => ({ backgroundColor: '"var(--color-orange-500)"' }),
  'bg-orange-600': () => ({ backgroundColor: '"var(--color-orange-600)"' }),
  'bg-orange-700': () => ({ backgroundColor: '"var(--color-orange-700)"' }),
  'bg-orange-800': () => ({ backgroundColor: '"var(--color-orange-800)"' }),
  'bg-orange-900': () => ({ backgroundColor: '"var(--color-orange-900)"' }),
  'bg-orange-950': () => ({ backgroundColor: '"var(--color-orange-950)"' }),
  'bg-amber-50': () => ({ backgroundColor: '"var(--color-amber-50)"' }),
  'bg-amber-100': () => ({ backgroundColor: '"var(--color-amber-100)"' }),
  'bg-amber-200': () => ({ backgroundColor: '"var(--color-amber-200)"' }),
  'bg-amber-300': () => ({ backgroundColor: '"var(--color-amber-300)"' }),
  'bg-amber-400': () => ({ backgroundColor: '"var(--color-amber-400)"' }),
  'bg-amber-500': () => ({ backgroundColor: '"var(--color-amber-500)"' }),
  'bg-amber-600': () => ({ backgroundColor: '"var(--color-amber-600)"' }),
  'bg-amber-700': () => ({ backgroundColor: '"var(--color-amber-700)"' }),
  'bg-amber-800': () => ({ backgroundColor: '"var(--color-amber-800)"' }),
  'bg-amber-900': () => ({ backgroundColor: '"var(--color-amber-900)"' }),
  'bg-amber-950': () => ({ backgroundColor: '"var(--color-amber-950)"' }),
  'bg-yellow-50': () => ({ backgroundColor: '"var(--color-yellow-50)"' }),
  'bg-yellow-100': () => ({ backgroundColor: '"var(--color-yellow-100)"' }),
  'bg-yellow-200': () => ({ backgroundColor: '"var(--color-yellow-200)"' }),
  'bg-yellow-300': () => ({ backgroundColor: '"var(--color-yellow-300)"' }),
  'bg-yellow-400': () => ({ backgroundColor: '"var(--color-yellow-400)"' }),
  'bg-yellow-500': () => ({ backgroundColor: '"var(--color-yellow-500)"' }),
  'bg-yellow-600': () => ({ backgroundColor: '"var(--color-yellow-600)"' }),
  'bg-yellow-700': () => ({ backgroundColor: '"var(--color-yellow-700)"' }),
  'bg-yellow-800': () => ({ backgroundColor: '"var(--color-yellow-800)"' }),
  'bg-yellow-900': () => ({ backgroundColor: '"var(--color-yellow-900)"' }),
  'bg-yellow-950': () => ({ backgroundColor: '"var(--color-yellow-950)"' }),
  'bg-lime-50': () => ({ backgroundColor: '"var(--color-lime-50)"' }),
  'bg-lime-100': () => ({ backgroundColor: '"var(--color-lime-100)"' }),
  'bg-lime-200': () => ({ backgroundColor: '"var(--color-lime-200)"' }),
  'bg-lime-300': () => ({ backgroundColor: '"var(--color-lime-300)"' }),
  'bg-lime-400': () => ({ backgroundColor: '"var(--color-lime-400)"' }),
  'bg-lime-500': () => ({ backgroundColor: '"var(--color-lime-500)"' }),
  'bg-lime-600': () => ({ backgroundColor: '"var(--color-lime-600)"' }),
  'bg-lime-700': () => ({ backgroundColor: '"var(--color-lime-700)"' }),
  'bg-lime-800': () => ({ backgroundColor: '"var(--color-lime-800)"' }),
  'bg-lime-900': () => ({ backgroundColor: '"var(--color-lime-900)"' }),
  'bg-lime-950': () => ({ backgroundColor: '"var(--color-lime-950)"' }),
  'bg-green-50': () => ({ backgroundColor: '"var(--color-green-50)"' }),
  'bg-green-100': () => ({ backgroundColor: '"var(--color-green-100)"' }),
  'bg-green-200': () => ({ backgroundColor: '"var(--color-green-200)"' }),
  'bg-green-300': () => ({ backgroundColor: '"var(--color-green-300)"' }),
  'bg-green-400': () => ({ backgroundColor: '"var(--color-green-400)"' }),
  'bg-green-500': () => ({ backgroundColor: '"var(--color-green-500)"' }),
  'bg-green-600': () => ({ backgroundColor: '"var(--color-green-600)"' }),
  'bg-green-700': () => ({ backgroundColor: '"var(--color-green-700)"' }),
  'bg-green-800': () => ({ backgroundColor: '"var(--color-green-800)"' }),
  'bg-green-900': () => ({ backgroundColor: '"var(--color-green-900)"' }),
  'bg-green-950': () => ({ backgroundColor: '"var(--color-green-950)"' }),
  'bg-emerald-50': () => ({ backgroundColor: '"var(--color-emerald-50)"' }),
  'bg-emerald-100': () => ({ backgroundColor: '"var(--color-emerald-100)"' }),
  'bg-emerald-200': () => ({ backgroundColor: '"var(--color-emerald-200)"' }),
  'bg-emerald-300': () => ({ backgroundColor: '"var(--color-emerald-300)"' }),
  'bg-emerald-400': () => ({ backgroundColor: '"var(--color-emerald-400)"' }),
  'bg-emerald-500': () => ({ backgroundColor: '"var(--color-emerald-500)"' }),
  'bg-emerald-600': () => ({ backgroundColor: '"var(--color-emerald-600)"' }),
  'bg-emerald-700': () => ({ backgroundColor: '"var(--color-emerald-700)"' }),
  'bg-emerald-800': () => ({ backgroundColor: '"var(--color-emerald-800)"' }),
  'bg-emerald-900': () => ({ backgroundColor: '"var(--color-emerald-900)"' }),
  'bg-emerald-950': () => ({ backgroundColor: '"var(--color-emerald-950)"' }),
  'bg-teal-50': () => ({ backgroundColor: '"var(--color-teal-50)"' }),
  'bg-teal-100': () => ({ backgroundColor: '"var(--color-teal-100)"' }),
  'bg-teal-200': () => ({ backgroundColor: '"var(--color-teal-200)"' }),
  'bg-teal-300': () => ({ backgroundColor: '"var(--color-teal-300)"' }),
  'bg-teal-400': () => ({ backgroundColor: '"var(--color-teal-400)"' }),
  'bg-teal-500': () => ({ backgroundColor: '"var(--color-teal-500)"' }),
  'bg-teal-600': () => ({ backgroundColor: '"var(--color-teal-600)"' }),
  'bg-teal-700': () => ({ backgroundColor: '"var(--color-teal-700)"' }),
  'bg-teal-800': () => ({ backgroundColor: '"var(--color-teal-800)"' }),
  'bg-teal-900': () => ({ backgroundColor: '"var(--color-teal-900)"' }),
  'bg-teal-950': () => ({ backgroundColor: '"var(--color-teal-950)"' }),
  'bg-cyan-50': () => ({ backgroundColor: '"var(--color-cyan-50)"' }),
  'bg-cyan-100': () => ({ backgroundColor: '"var(--color-cyan-100)"' }),
  'bg-cyan-200': () => ({ backgroundColor: '"var(--color-cyan-200)"' }),
  'bg-cyan-300': () => ({ backgroundColor: '"var(--color-cyan-300)"' }),
  'bg-cyan-400': () => ({ backgroundColor: '"var(--color-cyan-400)"' }),
  'bg-cyan-500': () => ({ backgroundColor: '"var(--color-cyan-500)"' }),
  'bg-cyan-600': () => ({ backgroundColor: '"var(--color-cyan-600)"' }),
  'bg-cyan-700': () => ({ backgroundColor: '"var(--color-cyan-700)"' }),
  'bg-cyan-800': () => ({ backgroundColor: '"var(--color-cyan-800)"' }),
  'bg-cyan-900': () => ({ backgroundColor: '"var(--color-cyan-900)"' }),
  'bg-cyan-950': () => ({ backgroundColor: '"var(--color-cyan-950)"' }),
  'bg-sky-50': () => ({ backgroundColor: '"var(--color-sky-50)"' }),
  'bg-sky-100': () => ({ backgroundColor: '"var(--color-sky-100)"' }),
  'bg-sky-200': () => ({ backgroundColor: '"var(--color-sky-200)"' }),
  'bg-sky-300': () => ({ backgroundColor: '"var(--color-sky-300)"' }),
  'bg-sky-400': () => ({ backgroundColor: '"var(--color-sky-400)"' }),
  'bg-sky-500': () => ({ backgroundColor: '"var(--color-sky-500)"' }),
  'bg-sky-600': () => ({ backgroundColor: '"var(--color-sky-600)"' }),
  'bg-sky-700': () => ({ backgroundColor: '"var(--color-sky-700)"' }),
  'bg-sky-800': () => ({ backgroundColor: '"var(--color-sky-800)"' }),
  'bg-sky-900': () => ({ backgroundColor: '"var(--color-sky-900)"' }),
  'bg-sky-950': () => ({ backgroundColor: '"var(--color-sky-950)"' }),
  'bg-blue-50': () => ({ backgroundColor: '"var(--color-blue-50)"' }),
  'bg-blue-100': () => ({ backgroundColor: '"var(--color-blue-100)"' }),
  'bg-blue-200': () => ({ backgroundColor: '"var(--color-blue-200)"' }),
  'bg-blue-300': () => ({ backgroundColor: '"var(--color-blue-300)"' }),
  'bg-blue-400': () => ({ backgroundColor: '"var(--color-blue-400)"' }),
  'bg-blue-500': () => ({ backgroundColor: '"var(--color-blue-500)"' }),
  'bg-blue-600': () => ({ backgroundColor: '"var(--color-blue-600)"' }),
  'bg-blue-700': () => ({ backgroundColor: '"var(--color-blue-700)"' }),
  'bg-blue-800': () => ({ backgroundColor: '"var(--color-blue-800)"' }),
  'bg-blue-900': () => ({ backgroundColor: '"var(--color-blue-900)"' }),
  'bg-blue-950': () => ({ backgroundColor: '"var(--color-blue-950)"' }),
  'bg-indigo-50': () => ({ backgroundColor: '"var(--color-indigo-50)"' }),
  'bg-indigo-100': () => ({ backgroundColor: '"var(--color-indigo-100)"' }),
  'bg-indigo-200': () => ({ backgroundColor: '"var(--color-indigo-200)"' }),
  'bg-indigo-300': () => ({ backgroundColor: '"var(--color-indigo-300)"' }),
  'bg-indigo-400': () => ({ backgroundColor: '"var(--color-indigo-400)"' }),
  'bg-indigo-500': () => ({ backgroundColor: '"var(--color-indigo-500)"' }),
  'bg-indigo-600': () => ({ backgroundColor: '"var(--color-indigo-600)"' }),
  'bg-indigo-700': () => ({ backgroundColor: '"var(--color-indigo-700)"' }),
  'bg-indigo-800': () => ({ backgroundColor: '"var(--color-indigo-800)"' }),
  'bg-indigo-900': () => ({ backgroundColor: '"var(--color-indigo-900)"' }),
  'bg-indigo-950': () => ({ backgroundColor: '"var(--color-indigo-950)"' }),
  'bg-violet-50': () => ({ backgroundColor: '"var(--color-violet-50)"' }),
  'bg-violet-100': () => ({ backgroundColor: '"var(--color-violet-100)"' }),
  'bg-violet-200': () => ({ backgroundColor: '"var(--color-violet-200)"' }),
  'bg-violet-300': () => ({ backgroundColor: '"var(--color-violet-300)"' }),
  'bg-violet-400': () => ({ backgroundColor: '"var(--color-violet-400)"' }),
  'bg-violet-500': () => ({ backgroundColor: '"var(--color-violet-500)"' }),
  'bg-violet-600': () => ({ backgroundColor: '"var(--color-violet-600)"' }),
  'bg-violet-700': () => ({ backgroundColor: '"var(--color-violet-700)"' }),
  'bg-violet-800': () => ({ backgroundColor: '"var(--color-violet-800)"' }),
  'bg-violet-900': () => ({ backgroundColor: '"var(--color-violet-900)"' }),
  'bg-violet-950': () => ({ backgroundColor: '"var(--color-violet-950)"' }),
  'bg-purple-50': () => ({ backgroundColor: '"var(--color-purple-50)"' }),
  'bg-purple-100': () => ({ backgroundColor: '"var(--color-purple-100)"' }),
  'bg-purple-200': () => ({ backgroundColor: '"var(--color-purple-200)"' }),
  'bg-purple-300': () => ({ backgroundColor: '"var(--color-purple-300)"' }),
  'bg-purple-400': () => ({ backgroundColor: '"var(--color-purple-400)"' }),
  'bg-purple-500': () => ({ backgroundColor: '"var(--color-purple-500)"' }),
  'bg-purple-600': () => ({ backgroundColor: '"var(--color-purple-600)"' }),
  'bg-purple-700': () => ({ backgroundColor: '"var(--color-purple-700)"' }),
  'bg-purple-800': () => ({ backgroundColor: '"var(--color-purple-800)"' }),
  'bg-purple-900': () => ({ backgroundColor: '"var(--color-purple-900)"' }),
  'bg-purple-950': () => ({ backgroundColor: '"var(--color-purple-950)"' }),
  'bg-fuchsia-50': () => ({ backgroundColor: '"var(--color-fuchsia-50)"' }),
  'bg-fuchsia-100': () => ({ backgroundColor: '"var(--color-fuchsia-100)"' }),
  'bg-fuchsia-200': () => ({ backgroundColor: '"var(--color-fuchsia-200)"' }),
  'bg-fuchsia-300': () => ({ backgroundColor: '"var(--color-fuchsia-300)"' }),
  'bg-fuchsia-400': () => ({ backgroundColor: '"var(--color-fuchsia-400)"' }),
  'bg-fuchsia-500': () => ({ backgroundColor: '"var(--color-fuchsia-500)"' }),
  'bg-fuchsia-600': () => ({ backgroundColor: '"var(--color-fuchsia-600)"' }),
  'bg-fuchsia-700': () => ({ backgroundColor: '"var(--color-fuchsia-700)"' }),
  'bg-fuchsia-800': () => ({ backgroundColor: '"var(--color-fuchsia-800)"' }),
  'bg-fuchsia-900': () => ({ backgroundColor: '"var(--color-fuchsia-900)"' }),
  'bg-fuchsia-950': () => ({ backgroundColor: '"var(--color-fuchsia-950)"' }),
  'bg-pink-50': () => ({ backgroundColor: '"var(--color-pink-50)"' }),
  'bg-pink-100': () => ({ backgroundColor: '"var(--color-pink-100)"' }),
  'bg-pink-200': () => ({ backgroundColor: '"var(--color-pink-200)"' }),
  'bg-pink-300': () => ({ backgroundColor: '"var(--color-pink-300)"' }),
  'bg-pink-400': () => ({ backgroundColor: '"var(--color-pink-400)"' }),
  'bg-pink-500': () => ({ backgroundColor: '"var(--color-pink-500)"' }),
  'bg-pink-600': () => ({ backgroundColor: '"var(--color-pink-600)"' }),
  'bg-pink-700': () => ({ backgroundColor: '"var(--color-pink-700)"' }),
  'bg-pink-800': () => ({ backgroundColor: '"var(--color-pink-800)"' }),
  'bg-pink-900': () => ({ backgroundColor: '"var(--color-pink-900)"' }),
  'bg-pink-950': () => ({ backgroundColor: '"var(--color-pink-950)"' }),
  'bg-rose-50': () => ({ backgroundColor: '"var(--color-rose-50)"' }),
  'bg-rose-100': () => ({ backgroundColor: '"var(--color-rose-100)"' }),
  'bg-rose-200': () => ({ backgroundColor: '"var(--color-rose-200)"' }),
  'bg-rose-300': () => ({ backgroundColor: '"var(--color-rose-300)"' }),
  'bg-rose-400': () => ({ backgroundColor: '"var(--color-rose-400)"' }),
  'bg-rose-500': () => ({ backgroundColor: '"var(--color-rose-500)"' }),
  'bg-rose-600': () => ({ backgroundColor: '"var(--color-rose-600)"' }),
  'bg-rose-700': () => ({ backgroundColor: '"var(--color-rose-700)"' }),
  'bg-rose-800': () => ({ backgroundColor: '"var(--color-rose-800)"' }),
  'bg-rose-900': () => ({ backgroundColor: '"var(--color-rose-900)"' }),
  'bg-rose-950': () => ({ backgroundColor: '"var(--color-rose-950)"' }),
  'bg-slate-50': () => ({ backgroundColor: '"var(--color-slate-50)"' }),
  'bg-slate-100': () => ({ backgroundColor: '"var(--color-slate-100)"' }),
  'bg-slate-200': () => ({ backgroundColor: '"var(--color-slate-200)"' }),
  'bg-slate-300': () => ({ backgroundColor: '"var(--color-slate-300)"' }),
  'bg-slate-400': () => ({ backgroundColor: '"var(--color-slate-400)"' }),
  'bg-slate-500': () => ({ backgroundColor: '"var(--color-slate-500)"' }),
  'bg-slate-600': () => ({ backgroundColor: '"var(--color-slate-600)"' }),
  'bg-slate-700': () => ({ backgroundColor: '"var(--color-slate-700)"' }),
  'bg-slate-800': () => ({ backgroundColor: '"var(--color-slate-800)"' }),
  'bg-slate-900': () => ({ backgroundColor: '"var(--color-slate-900)"' }),
  'bg-slate-950': () => ({ backgroundColor: '"var(--color-slate-950)"' }),
  'bg-gray-50': () => ({ backgroundColor: '"var(--color-gray-50)"' }),
  'bg-gray-100': () => ({ backgroundColor: '"var(--color-gray-100)"' }),
  'bg-gray-200': () => ({ backgroundColor: '"var(--color-gray-200)"' }),
  'bg-gray-300': () => ({ backgroundColor: '"var(--color-gray-300)"' }),
  'bg-gray-400': () => ({ backgroundColor: '"var(--color-gray-400)"' }),
  'bg-gray-500': () => ({ backgroundColor: '"var(--color-gray-500)"' }),
  'bg-gray-600': () => ({ backgroundColor: '"var(--color-gray-600)"' }),
  'bg-gray-700': () => ({ backgroundColor: '"var(--color-gray-700)"' }),
  'bg-gray-800': () => ({ backgroundColor: '"var(--color-gray-800)"' }),
  'bg-gray-900': () => ({ backgroundColor: '"var(--color-gray-900)"' }),
  'bg-gray-950': () => ({ backgroundColor: '"var(--color-gray-950)"' }),
  'bg-zinc-50': () => ({ backgroundColor: '"var(--color-zinc-50)"' }),
  'bg-zinc-100': () => ({ backgroundColor: '"var(--color-zinc-100)"' }),
  'bg-zinc-200': () => ({ backgroundColor: '"var(--color-zinc-200)"' }),
  'bg-zinc-300': () => ({ backgroundColor: '"var(--color-zinc-300)"' }),
  'bg-zinc-400': () => ({ backgroundColor: '"var(--color-zinc-400)"' }),
  'bg-zinc-500': () => ({ backgroundColor: '"var(--color-zinc-500)"' }),
  'bg-zinc-600': () => ({ backgroundColor: '"var(--color-zinc-600)"' }),
  'bg-zinc-700': () => ({ backgroundColor: '"var(--color-zinc-700)"' }),
  'bg-zinc-800': () => ({ backgroundColor: '"var(--color-zinc-800)"' }),
  'bg-zinc-900': () => ({ backgroundColor: '"var(--color-zinc-900)"' }),
  'bg-zinc-950': () => ({ backgroundColor: '"var(--color-zinc-950)"' }),
  'bg-neutral-50': () => ({ backgroundColor: '"var(--color-neutral-50)"' }),
  'bg-neutral-100': () => ({ backgroundColor: '"var(--color-neutral-100)"' }),
  'bg-neutral-200': () => ({ backgroundColor: '"var(--color-neutral-200)"' }),
  'bg-neutral-300': () => ({ backgroundColor: '"var(--color-neutral-300)"' }),
  'bg-neutral-400': () => ({ backgroundColor: '"var(--color-neutral-400)"' }),
  'bg-neutral-500': () => ({ backgroundColor: '"var(--color-neutral-500)"' }),
  'bg-neutral-600': () => ({ backgroundColor: '"var(--color-neutral-600)"' }),
  'bg-neutral-700': () => ({ backgroundColor: '"var(--color-neutral-700)"' }),
  'bg-neutral-800': () => ({ backgroundColor: '"var(--color-neutral-800)"' }),
  'bg-neutral-900': () => ({ backgroundColor: '"var(--color-neutral-900)"' }),
  'bg-neutral-950': () => ({ backgroundColor: '"var(--color-neutral-950)"' }),
  'bg-stone-50': () => ({ backgroundColor: '"var(--color-stone-50)"' }),
  'bg-stone-100': () => ({ backgroundColor: '"var(--color-stone-100)"' }),
  'bg-stone-200': () => ({ backgroundColor: '"var(--color-stone-200)"' }),
  'bg-stone-300': () => ({ backgroundColor: '"var(--color-stone-300)"' }),
  'bg-stone-400': () => ({ backgroundColor: '"var(--color-stone-400)"' }),
  'bg-stone-500': () => ({ backgroundColor: '"var(--color-stone-500)"' }),
  'bg-stone-600': () => ({ backgroundColor: '"var(--color-stone-600)"' }),
  'bg-stone-700': () => ({ backgroundColor: '"var(--color-stone-700)"' }),
  'bg-stone-800': () => ({ backgroundColor: '"var(--color-stone-800)"' }),
  'bg-stone-900': () => ({ backgroundColor: '"var(--color-stone-900)"' }),
  'bg-stone-950': () => ({ backgroundColor: '"var(--color-stone-950)"' }),
  'bg-(<custom-property>)': ([value]) => ({ backgroundColor: `"var(${value})"` }),
  'bg-[<color>]': ([value]) => ({ backgroundColor: `"${value}"` }),

  // background-image
  'bg-[<value>]': ([value]) => ({ backgroundImage: `"${value}"` }),
  'bg-(image:<custom-property>)': ([value]) => ({ backgroundImage: `"var(${value})"` }),
  'bg-none': () => ({ backgroundImage: '"none"' }),
  'bg-linear-to-t': () => ({
    backgroundImage: '"linear-gradient(to top, var(--tw-gradient-stops))"',
  }),
  'bg-linear-to-tr': () => ({
    backgroundImage: '"linear-gradient(to top right, var(--tw-gradient-stops))"',
  }),
  'bg-linear-to-r': () => ({
    backgroundImage: '"linear-gradient(to right, var(--tw-gradient-stops))"',
  }),
  'bg-linear-to-br': () => ({
    backgroundImage: '"linear-gradient(to bottom right, var(--tw-gradient-stops))"',
  }),
  'bg-linear-to-b': () => ({
    backgroundImage: '"linear-gradient(to bottom, var(--tw-gradient-stops))"',
  }),
  'bg-linear-to-bl': () => ({
    backgroundImage: '"linear-gradient(to bottom left, var(--tw-gradient-stops))"',
  }),
  'bg-linear-to-l': () => ({
    backgroundImage: '"linear-gradient(to left, var(--tw-gradient-stops))"',
  }),
  'bg-linear-to-tl': () => ({
    backgroundImage: '"linear-gradient(to top left, var(--tw-gradient-stops))"',
  }),
  'bg-linear-<angle>': ([value]) => ({
    backgroundImage: `"linear-gradient(${value} in oklab, var(--tw-gradient-stops))"`,
  }),
  '-bg-linear-<angle>': ([value]) => ({
    backgroundImage: `"linear-gradient(-${value} in oklab, var(--tw-gradient-stops))"`,
  }),
  'bg-linear-(<custom-property>)': ([value]) => ({
    backgroundImage: `"linear-gradient(var(--tw-gradient-stops, var(${value})))"`,
  }),
  'bg-linear-[<value>]': ([value]) => ({
    backgroundImage: `"linear-gradient(var(--tw-gradient-stops, ${value}))"`,
  }),
  'bg-radial': () => ({ backgroundImage: '"radial-gradient(var(--tw-gradient-stops))"' }),
  'bg-radial-(<custom-property>)': ([value]) => ({
    backgroundImage: `"radial-gradient(var(--tw-gradient-stops, var(${value})))"`,
  }),
  'bg-radial-[<value>]': ([value]) => ({
    backgroundImage: `"radial-gradient(var(--tw-gradient-stops, ${value}))"`,
  }),
  'bg-conic-<angle>': ([value]) => ({
    backgroundImage: `"conic-gradient(from ${value} in oklab, var(--tw-gradient-stops))"`,
  }),
  '-bg-conic-<angle>': ([value]) => ({
    backgroundImage: `"conic-gradient(from -${value} in oklab, var(--tw-gradient-stops))"`,
  }),
  'bg-conic-(<custom-property>)': ([value]) => ({
    backgroundImage: `"conic-gradient(from var(--tw-gradient-stops, var(${value})))"`,
  }),
  'bg-conic-[<value>]': ([value]) => ({
    backgroundImage: `"conic-gradient(from var(--tw-gradient-stops, ${value}))"`,
  }),
  'from-<color>': () => ({
    backgroundImage: '"linear-gradient(to bottom, var(--tw-gradient-stops))"',
  }),
  'from-<percentage>': () => ({
    backgroundImage: '"linear-gradient(to bottom, var(--tw-gradient-stops))"',
  }),
  'from-(<custom-property>)': ([value]) => ({
    backgroundImage: `"linear-gradient(to bottom, var(--tw-gradient-stops, var(${value})))"`,
  }),
  'from-[<value>]': ([value]) => ({
    backgroundImage: `"linear-gradient(to bottom, var(--tw-gradient-stops, ${value}))"`,
  }),
  'via-<color>': () => ({
    backgroundImage: '"linear-gradient(to bottom, var(--tw-gradient-stops))"',
  }),
  'via-<percentage>': () => ({
    backgroundImage: '"linear-gradient(to bottom, var(--tw-gradient-stops))"',
  }),
  'via-(<custom-property>)': ([value]) => ({
    backgroundImage: `"linear-gradient(to bottom, var(--tw-gradient-stops, var(${value})))"`,
  }),
  'via-[<value>]': ([value]) => ({
    backgroundImage: `"linear-gradient(to bottom, var(--tw-gradient-stops, ${value}))"`,
  }),
  'to-<color>': () => ({
    backgroundImage: '"linear-gradient(to bottom, var(--tw-gradient-stops))"',
  }),
  'to-<percentage>': () => ({
    backgroundImage: '"linear-gradient(to bottom, var(--tw-gradient-stops))"',
  }),
  'to-(<custom-property>)': ([value]) => ({
    backgroundImage: `"linear-gradient(to bottom, var(--tw-gradient-stops, var(${value})))"`,
  }),
  'to-[<value>]': ([value]) => ({
    backgroundImage: `"linear-gradient(to bottom, var(--tw-gradient-stops, ${value}))"`,
  }),

  //background-origin
  'bg-origin-border': () => ({ backgroundOrigin: '"border-box"' }),
  'bg-origin-padding': () => ({ backgroundOrigin: '"padding-box"' }),
  'bg-origin-content': () => ({ backgroundOrigin: '"content-box"' }),

  //background-position
  'bg-bottom': () => ({ backgroundPosition: '"bottom"' }),
  'bg-center': () => ({ backgroundPosition: '"center"' }),
  'bg-left': () => ({ backgroundPosition: '"left"' }),
  'bg-left-bottom': () => ({ backgroundPosition: '"left bottom"' }),
  'bg-left-top': () => ({ backgroundPosition: '"left top"' }),
  'bg-right': () => ({ backgroundPosition: '"right"' }),
  'bg-right-bottom': () => ({ backgroundPosition: '"right bottom"' }),
  'bg-right-top': () => ({ backgroundPosition: '"right top"' }),
  'bg-top': () => ({ backgroundPosition: '"top"' }),
  'bg-(position:<custom-property>)': ([value]) => ({ backgroundPosition: `"var(${value})"` }),
  'bg-[<size>]': ([value]) => ({ backgroundPosition: `"${value}"` }),

  //background-repeat
  'bg-repeat': () => ({ backgroundRepeat: '"repeat"' }),
  'bg-repeat-x': () => ({ backgroundRepeat: '"repeat-x"' }),
  'bg-repeat-y': () => ({ backgroundRepeat: '"repeat-y"' }),
  'bg-repeat-space': () => ({ backgroundRepeat: '"repeat-space"' }),
  'bg-repeat-round': () => ({ backgroundRepeat: '"repeat-round"' }),
  'bg-no-repeat': () => ({ backgroundRepeat: '"no-repeat"' }),

  //background-size
  'bg-auto': () => ({ backgroundSize: '"auto"' }),
  'bg-cover': () => ({ backgroundSize: '"cover"' }),
  'bg-contain': () => ({ backgroundSize: '"contain"' }),
  'bg-(length:<custom-property>)': ([value]) => ({ backgroundSize: `"var(${value})"` }),
  // 'bg-[<size>]': ([value]) => ({ backgroundSize: `"${value}"` }),

  // BORDERS

  // border-radius
  'rounded-xs': () => ({ borderRadius: 'var(--radius-xs)' }),
  'rounded-sm': () => ({ borderRadius: 'var(--radius-sm)' }),
  'rounded-md': () => ({ borderRadius: 'var(--radius-md)' }),
  'rounded-lg': () => ({ borderRadius: 'var(--radius-lg)' }),
  'rounded-xl': () => ({ borderRadius: 'var(--radius-xl)' }),
  'rounded-2xl': () => ({ borderRadius: 'var(--radius-2xl)' }),
  'rounded-3xl': () => ({ borderRadius: 'var(--radius-3xl)' }),
  'rounded-none': () => ({ borderRadius: '0' }),
  'rounded-full': () => ({ borderRadius: 'calc(infinity * 1px)' }),
  'rounded-(<custom-property>)': ([value]) => ({ borderRadius: `var(${value})` }),
  'rounded-[<value>]': ([value]) => ({ borderRadius: `"${value}"` }),
  'rounded-s-xs': () => ({
    borderStartStartRadius: 'var(--radius-xs)',
    borderEndStartRadius: 'var(--radius-xs)',
  }),
  'rounded-s-sm': () => ({
    borderStartStartRadius: 'var(--radius-sm)',
    borderEndStartRadius: 'var(--radius-sm)',
  }),
  'rounded-s-md': () => ({
    borderStartStartRadius: 'var(--radius-md)',
    borderEndStartRadius: 'var(--radius-md)',
  }),
  'rounded-s-lg': () => ({
    borderStartStartRadius: 'var(--radius-lg)',
    borderEndStartRadius: 'var(--radius-lg)',
  }),
  'rounded-s-xl': () => ({
    borderStartStartRadius: 'var(--radius-xl)',
    borderEndStartRadius: 'var(--radius-xl)',
  }),
  'rounded-s-2xl': () => ({
    borderStartStartRadius: 'var(--radius-2xl)',
    borderEndStartRadius: 'var(--radius-2xl)',
  }),
  'rounded-s-3xl': () => ({
    borderStartStartRadius: 'var(--radius-3xl)',
    borderEndStartRadius: 'var(--radius-3xl)',
  }),
  'rounded-s-none': () => ({
    borderStartStartRadius: '0',
    borderEndStartRadius: '0',
  }),
  'rounded-s-full': () => ({
    borderStartStartRadius: 'calc(infinity * 1px)',
    borderEndStartRadius: 'calc(infinity * 1px)',
  }),
  'rounded-s-(<custom-property>)': ([value]) => ({
    borderStartStartRadius: `var(${value})`,
    borderEndStartRadius: `var(${value})`,
  }),
  'rounded-s-[<value>]': ([value]) => ({
    borderStartStartRadius: `"${value}"`,
    borderEndStartRadius: `"${value}"`,
  }),
  'rounded-e-xs': () => ({
    borderStartEndRadius: 'var(--radius-xs)',
    borderEndEndRadius: 'var(--radius-xs)',
  }),
  'rounded-e-sm': () => ({
    borderStartEndRadius: 'var(--radius-sm)',
    borderEndEndRadius: 'var(--radius-sm)',
  }),
  'rounded-e-md': () => ({
    borderStartEndRadius: 'var(--radius-md)',
    borderEndEndRadius: 'var(--radius-md)',
  }),
  'rounded-e-lg': () => ({
    borderStartEndRadius: 'var(--radius-lg)',
    borderEndEndRadius: 'var(--radius-lg)',
  }),
  'rounded-e-xl': () => ({
    borderStartEndRadius: 'var(--radius-xl)',
    borderEndEndRadius: 'var(--radius-xl)',
  }),
  'rounded-e-2xl': () => ({
    borderStartEndRadius: 'var(--radius-2xl)',
    borderEndEndRadius: 'var(--radius-2xl)',
  }),
  'rounded-e-3xl': () => ({
    borderStartEndRadius: 'var(--radius-3xl)',
    borderEndEndRadius: 'var(--radius-3xl)',
  }),
  'rounded-e-none': () => ({ borderStartEndRadius: '0', borderEndEndRadius: '0' }),
  'rounded-e-full': () => ({
    borderStartEndRadius: 'calc(infinity * 1px)',
    borderEndEndRadius: 'calc(infinity * 1px)',
  }),
  'rounded-e-(<custom-property>)': ([value]) => ({
    borderStartEndRadius: `var(${value})`,
    borderEndEndRadius: `var(${value})`,
  }),
  'rounded-e-[<value>]': ([value]) => ({
    borderStartEndRadius: `"${value}"`,
    borderEndEndRadius: `"${value}"`,
  }),
  'rounded-t-xs': () => ({
    borderTopLeftRadius: 'var(--radius-xs)',
    borderTopRightRadius: 'var(--radius-xs)',
  }),
  'rounded-t-sm': () => ({
    borderTopLeftRadius: 'var(--radius-sm)',
    borderTopRightRadius: 'var(--radius-sm)',
  }),
  'rounded-t-md': () => ({
    borderTopLeftRadius: 'var(--radius-md)',
    borderTopRightRadius: 'var(--radius-md)',
  }),
  'rounded-t-lg': () => ({
    borderTopLeftRadius: 'var(--radius-lg)',
    borderTopRightRadius: 'var(--radius-lg)',
  }),
  'rounded-t-xl': () => ({
    borderTopLeftRadius: 'var(--radius-xl)',
    borderTopRightRadius: 'var(--radius-xl)',
  }),
  'rounded-t-2xl': () => ({
    borderTopLeftRadius: 'var(--radius-2xl)',
    borderTopRightRadius: 'var(--radius-2xl)',
  }),
  'rounded-t-3xl': () => ({
    borderTopLeftRadius: 'var(--radius-3xl)',
    borderTopRightRadius: 'var(--radius-3xl)',
  }),
  'rounded-t-none': () => ({ borderTopLeftRadius: '0', borderTopRightRadius: '0' }),
  'rounded-t-full': () => ({
    borderTopLeftRadius: 'calc(infinity * 1px)',
    borderTopRightRadius: 'calc(infinity * 1px)',
  }),
  'rounded-t-(<custom-property>)': ([value]) => ({
    borderTopLeftRadius: `var(${value})`,
    borderTopRightRadius: `var(${value})`,
  }),
  'rounded-t-[<value>]': ([value]) => ({
    borderTopLeftRadius: `"${value}"`,
    borderTopRightRadius: `"${value}"`,
  }),
  'rounded-r-xs': () => ({
    borderTopRightRadius: 'var(--radius-xs)',
    borderBottomRightRadius: 'var(--radius-xs)',
  }),
  'rounded-r-sm': () => ({
    borderTopRightRadius: 'var(--radius-sm)',
    borderBottomRightRadius: 'var(--radius-sm)',
  }),
  'rounded-r-md': () => ({
    borderTopRightRadius: 'var(--radius-md)',
    borderBottomRightRadius: 'var(--radius-md)',
  }),
  'rounded-r-lg': () => ({
    borderTopRightRadius: 'var(--radius-lg)',
    borderBottomRightRadius: 'var(--radius-lg)',
  }),
  'rounded-r-xl': () => ({
    borderTopRightRadius: 'var(--radius-xl)',
    borderBottomRightRadius: 'var(--radius-xl)',
  }),
  'rounded-r-2xl': () => ({
    borderTopRightRadius: 'var(--radius-2xl)',
    borderBottomRightRadius: 'var(--radius-2xl)',
  }),
  'rounded-r-3xl': () => ({
    borderTopRightRadius: 'var(--radius-3xl)',
    borderBottomRightRadius: 'var(--radius-3xl)',
  }),
  'rounded-r-none': () => ({ borderTopRightRadius: '0', borderBottomRightRadius: '0' }),
  'rounded-r-full': () => ({
    borderTopRightRadius: 'calc(infinity * 1px)',
    borderBottomRightRadius: 'calc(infinity * 1px)',
  }),
  'rounded-r-(<custom-property>)': ([value]) => ({
    borderTopRightRadius: `var(${value})`,
    borderBottomRightRadius: `var(${value})`,
  }),
  'rounded-r-[<value>]': ([value]) => ({
    borderTopRightRadius: `"${value}"`,
    borderBottomRightRadius: `"${value}"`,
  }),
  'rounded-b-xs': () => ({
    borderBottomRightRadius: 'var(--radius-xs)',
    borderBottomLeftRadius: 'var(--radius-xs)',
  }),
  'rounded-b-sm': () => ({
    borderBottomRightRadius: 'var(--radius-sm)',
    borderBottomLeftRadius: 'var(--radius-sm)',
  }),
  'rounded-b-md': () => ({
    borderBottomRightRadius: 'var(--radius-md)',
    borderBottomLeftRadius: 'var(--radius-md)',
  }),
  'rounded-b-lg': () => ({
    borderBottomRightRadius: 'var(--radius-lg)',
    borderBottomLeftRadius: 'var(--radius-lg)',
  }),
  'rounded-b-xl': () => ({
    borderBottomRightRadius: 'var(--radius-xl)',
    borderBottomLeftRadius: 'var(--radius-xl)',
  }),
  'rounded-b-2xl': () => ({
    borderBottomRightRadius: 'var(--radius-2xl)',
    borderBottomLeftRadius: 'var(--radius-2xl)',
  }),
  'rounded-b-3xl': () => ({
    borderBottomRightRadius: 'var(--radius-3xl)',
    borderBottomLeftRadius: 'var(--radius-3xl)',
  }),
  'rounded-b-none': () => ({ borderBottomRightRadius: '0', borderBottomLeftRadius: '0' }),
  'rounded-b-full': () => ({
    borderBottomRightRadius: 'calc(infinity * 1px)',
    borderBottomLeftRadius: 'calc(infinity * 1px)',
  }),
  'rounded-b-(<custom-property>)': ([value]) => ({
    borderBottomRightRadius: `var(${value})`,
    borderBottomLeftRadius: `var(${value})`,
  }),
  'rounded-b-[<value>]': ([value]) => ({
    borderBottomRightRadius: `"${value}"`,
    borderBottomLeftRadius: `"${value}"`,
  }),
  'rounded-l-xs': () => ({
    borderTopLeftRadius: 'var(--radius-xs)',
    borderBottomLeftRadius: 'var(--radius-xs)',
  }),
  'rounded-l-sm': () => ({
    borderTopLeftRadius: 'var(--radius-sm)',
    borderBottomLeftRadius: 'var(--radius-sm)',
  }),
  'rounded-l-md': () => ({
    borderTopLeftRadius: 'var(--radius-md)',
    borderBottomLeftRadius: 'var(--radius-md)',
  }),
  'rounded-l-lg': () => ({
    borderTopLeftRadius: 'var(--radius-lg)',
    borderBottomLeftRadius: 'var(--radius-lg)',
  }),
  'rounded-l-xl': () => ({
    borderTopLeftRadius: 'var(--radius-xl)',
    borderBottomLeftRadius: 'var(--radius-xl)',
  }),
  'rounded-l-2xl': () => ({
    borderTopLeftRadius: 'var(--radius-2xl)',
    borderBottomLeftRadius: 'var(--radius-2xl)',
  }),
  'rounded-l-3xl': () => ({
    borderTopLeftRadius: 'var(--radius-3xl)',
    borderBottomLeftRadius: 'var(--radius-3xl)',
  }),
  'rounded-l-none': () => ({ borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }),
  'rounded-l-full': () => ({
    borderTopLeftRadius: 'calc(infinity * 1px)',
    borderBottomLeftRadius: 'calc(infinity * 1px)',
  }),
  'rounded-l-(<custom-property>)': ([value]) => ({
    borderTopLeftRadius: `var(${value})`,
    borderBottomLeftRadius: `var(${value})`,
  }),
  'rounded-l-[<value>]': ([value]) => ({
    borderTopLeftRadius: `"${value}"`,
    borderBottomLeftRadius: `"${value}"`,
  }),
  'rounded-ss-xs': () => ({ borderStartStartRadius: 'var(--radius-xs)' }),
  'rounded-ss-sm': () => ({ borderStartStartRadius: 'var(--radius-sm)' }),
  'rounded-ss-md': () => ({ borderStartStartRadius: 'var(--radius-md)' }),
  'rounded-ss-lg': () => ({ borderStartStartRadius: 'var(--radius-lg)' }),
  'rounded-ss-xl': () => ({ borderStartStartRadius: 'var(--radius-xl)' }),
  'rounded-ss-2xl': () => ({ borderStartStartRadius: 'var(--radius-2xl)' }),
  'rounded-ss-3xl': () => ({ borderStartStartRadius: 'var(--radius-3xl)' }),
  'rounded-ss-none': () => ({ borderStartStartRadius: '0' }),
  'rounded-ss-full': () => ({ borderStartStartRadius: 'calc(infinity * 1px)' }),
  'rounded-ss-(<custom-property>)': ([value]) => ({ borderStartStartRadius: `var(${value})` }),
  'rounded-ss-[<value>]': ([value]) => ({ borderStartStartRadius: `"${value}"` }),
  'rounded-se-xs': () => ({ borderStartEndRadius: 'var(--radius-xs)' }),
  'rounded-se-sm': () => ({ borderStartEndRadius: 'var(--radius-sm)' }),
  'rounded-se-md': () => ({ borderStartEndRadius: 'var(--radius-md)' }),
  'rounded-se-lg': () => ({ borderStartEndRadius: 'var(--radius-lg)' }),
  'rounded-se-xl': () => ({ borderStartEndRadius: 'var(--radius-xl)' }),
  'rounded-se-2xl': () => ({ borderStartEndRadius: 'var(--radius-2xl)' }),
  'rounded-se-3xl': () => ({ borderStartEndRadius: 'var(--radius-3xl)' }),
  'rounded-se-none': () => ({ borderStartEndRadius: '0' }),
  'rounded-se-full': () => ({ borderStartEndRadius: 'calc(infinity * 1px)' }),
  'rounded-se-(<custom-property>)': ([value]) => ({ borderStartEndRadius: `var(${value})` }),
  'rounded-se-[<value>]': ([value]) => ({ borderStartEndRadius: `"${value}"` }),
  'rounded-ee-xs': () => ({ borderEndEndRadius: 'var(--radius-xs)' }),
  'rounded-ee-sm': () => ({ borderEndEndRadius: 'var(--radius-sm)' }),
  'rounded-ee-md': () => ({ borderEndEndRadius: 'var(--radius-md)' }),
  'rounded-ee-lg': () => ({ borderEndEndRadius: 'var(--radius-lg)' }),
  'rounded-ee-xl': () => ({ borderEndEndRadius: 'var(--radius-xl)' }),
  'rounded-ee-2xl': () => ({ borderEndEndRadius: 'var(--radius-2xl)' }),
  'rounded-ee-3xl': () => ({ borderEndEndRadius: 'var(--radius-3xl)' }),
  'rounded-ee-none': () => ({ borderEndEndRadius: '0' }),
  'rounded-ee-full': () => ({ borderEndEndRadius: 'calc(infinity * 1px)' }),
  'rounded-ee-(<custom-property>)': ([value]) => ({ borderEndEndRadius: `var(${value})` }),
  'rounded-ee-[<value>]': ([value]) => ({ borderEndEndRadius: `"${value}"` }),
  'rounded-es-xs': () => ({ borderEndStartRadius: 'var(--radius-xs)' }),
  'rounded-es-sm': () => ({ borderEndStartRadius: 'var(--radius-sm)' }),
  'rounded-es-md': () => ({ borderEndStartRadius: 'var(--radius-md)' }),
  'rounded-es-lg': () => ({ borderEndStartRadius: 'var(--radius-lg)' }),
  'rounded-es-xl': () => ({ borderEndStartRadius: 'var(--radius-xl)' }),
  'rounded-es-2xl': () => ({ borderEndStartRadius: 'var(--radius-2xl)' }),
  'rounded-es-3xl': () => ({ borderEndStartRadius: 'var(--radius-3xl)' }),
  'rounded-es-none': () => ({ borderEndStartRadius: '0' }),
  'rounded-es-full': () => ({ borderEndStartRadius: 'calc(infinity * 1px)' }),
  'rounded-es-(<custom-property>)': ([value]) => ({ borderEndStartRadius: `var(${value})` }),
  'rounded-es-[<value>]': ([value]) => ({ borderEndStartRadius: `"${value}"` }),
  'rounded-tl-xs': () => ({ borderTopLeftRadius: 'var(--radius-xs)' }),
  'rounded-tl-sm': () => ({ borderTopLeftRadius: 'var(--radius-sm)' }),
  'rounded-tl-md': () => ({ borderTopLeftRadius: 'var(--radius-md)' }),
  'rounded-tl-lg': () => ({ borderTopLeftRadius: 'var(--radius-lg)' }),
  'rounded-tl-xl': () => ({ borderTopLeftRadius: 'var(--radius-xl)' }),
  'rounded-tl-2xl': () => ({ borderTopLeftRadius: 'var(--radius-2xl)' }),
  'rounded-tl-3xl': () => ({ borderTopLeftRadius: 'var(--radius-3xl)' }),
  'rounded-tl-none': () => ({ borderTopLeftRadius: '0' }),
  'rounded-tl-full': () => ({ borderTopLeftRadius: 'calc(infinity * 1px)' }),
  'rounded-tl-(<custom-property>)': ([value]) => ({ borderTopLeftRadius: `var(${value})` }),
  'rounded-tl-[<value>]': ([value]) => ({ borderTopLeftRadius: `"${value}"` }),
  'rounded-tr-xs': () => ({ borderTopRightRadius: 'var(--radius-xs)' }),
  'rounded-tr-sm': () => ({ borderTopRightRadius: 'var(--radius-sm)' }),
  'rounded-tr-md': () => ({ borderTopRightRadius: 'var(--radius-md)' }),
  'rounded-tr-lg': () => ({ borderTopRightRadius: 'var(--radius-lg)' }),
  'rounded-tr-xl': () => ({ borderTopRightRadius: 'var(--radius-xl)' }),
  'rounded-tr-2xl': () => ({ borderTopRightRadius: 'var(--radius-2xl)' }),
  'rounded-tr-3xl': () => ({ borderTopRightRadius: 'var(--radius-3xl)' }),
  'rounded-tr-none': () => ({ borderTopRightRadius: '0' }),
  'rounded-tr-full': () => ({ borderTopRightRadius: 'calc(infinity * 1px)' }),
  'rounded-tr-(<custom-property>)': ([value]) => ({ borderTopRightRadius: `var(${value})` }),
  'rounded-tr-[<value>]': ([value]) => ({ borderTopRightRadius: `"${value}"` }),
  'rounded-br-xs': () => ({ borderBottomRightRadius: 'var(--radius-xs)' }),
  'rounded-br-sm': () => ({ borderBottomRightRadius: 'var(--radius-sm)' }),
  'rounded-br-md': () => ({ borderBottomRightRadius: 'var(--radius-md)' }),
  'rounded-br-lg': () => ({ borderBottomRightRadius: 'var(--radius-lg)' }),
  'rounded-br-xl': () => ({ borderBottomRightRadius: 'var(--radius-xl)' }),
  'rounded-br-2xl': () => ({ borderBottomRightRadius: 'var(--radius-2xl)' }),
  'rounded-br-3xl': () => ({ borderBottomRightRadius: 'var(--radius-3xl)' }),
  'rounded-br-none': () => ({ borderBottomRightRadius: '0' }),
  'rounded-br-full': () => ({ borderBottomRightRadius: 'calc(infinity * 1px)' }),
  'rounded-br-(<custom-property>)': ([value]) => ({ borderBottomRightRadius: `var(${value})` }),
  'rounded-br-[<value>]': ([value]) => ({ borderBottomRightRadius: `"${value}"` }),
  'rounded-bl-xs': () => ({ borderBottomLeftRadius: 'var(--radius-xs)' }),
  'rounded-bl-sm': () => ({ borderBottomLeftRadius: 'var(--radius-sm)' }),
  'rounded-bl-md': () => ({ borderBottomLeftRadius: 'var(--radius-md)' }),
  'rounded-bl-lg': () => ({ borderBottomLeftRadius: 'var(--radius-lg)' }),
  'rounded-bl-xl': () => ({ borderBottomLeftRadius: 'var(--radius-xl)' }),
  'rounded-bl-2xl': () => ({ borderBottomLeftRadius: 'var(--radius-2xl)' }),
  'rounded-bl-3xl': () => ({ borderBottomLeftRadius: 'var(--radius-3xl)' }),
  'rounded-bl-none': () => ({ borderBottomLeftRadius: '0' }),
  'rounded-bl-full': () => ({ borderBottomLeftRadius: 'calc(infinity * 1px)' }),
  'rounded-bl-(<custom-property>)': ([value]) => ({ borderBottomLeftRadius: `var(${value})` }),
  'rounded-bl-[<value>]': ([value]) => ({ borderBottomLeftRadius: `"${value}"` }),

  // border-width
  border: () => ({ borderWidth: '1px' }),
  'border-<number>': ([value]) => ({ borderWidth: `${value}px` }),
  'border-(length:<custom-property>)': ([value]) => ({ borderWidth: `var(${value})` }),
  'border-[<size>]': ([value]) => ({ borderWidth: `"${value}"` }),
  'border-x': () => ({ borderInlineWidth: '1px' }),
  'border-x-<number>': ([value]) => ({ borderInlineWidth: `${value}px` }),
  'border-x-(length:<custom-property>)': ([value]) => ({ borderInlineWidth: `var(${value})` }),
  'border-x-[<size>]': ([value]) => ({ borderInlineWidth: `"${value}"` }),
  'border-y': () => ({ borderBlockWidth: '1px' }),
  'border-y-<number>': ([value]) => ({ borderBlockWidth: `${value}px` }),
  'border-y-(length:<custom-property>)': ([value]) => ({ borderBlockWidth: `var(${value})` }),
  'border-y-[<size>]': ([value]) => ({ borderBlockWidth: `"${value}"` }),
  'border-s': () => ({ borderInlineStartWidth: '1px' }),
  'border-s-<number>': ([value]) => ({ borderInlineStartWidth: `${value}px` }),
  'border-s-(length:<custom-property>)': ([value]) => ({ borderInlineStartWidth: `var(${value})` }),
  'border-s-[<size>]': ([value]) => ({ borderInlineStartWidth: `"${value}"` }),
  'border-e': () => ({ borderInlineEndWidth: '1px' }),
  'border-e-<number>': ([value]) => ({ borderInlineEndWidth: `${value}px` }),
  'border-e-(length:<custom-property>)': ([value]) => ({ borderInlineEndWidth: `var(${value})` }),
  'border-e-[<size>]': ([value]) => ({ borderInlineEndWidth: `"${value}"` }),
  'border-t': () => ({ borderTopWidth: '1px' }),
  'border-t-<number>': ([value]) => ({ borderTopWidth: `${value}px` }),
  'border-t-(length:<custom-property>)': ([value]) => ({ borderTopWidth: `var(${value})` }),
  'border-t-[<size>]': ([value]) => ({ borderTopWidth: `"${value}"` }),
  'border-r': () => ({ borderRightWidth: '1px' }),
  'border-r-<number>': ([value]) => ({ borderRightWidth: `${value}px` }),
  'border-r-(length:<custom-property>)': ([value]) => ({ borderRightWidth: `var(${value})` }),
  'border-r-[<size>]': ([value]) => ({ borderRightWidth: `"${value}"` }),
  'border-b': () => ({ borderBottomWidth: '1px' }),
  'border-b-<number>': ([value]) => ({ borderBottomWidth: `${value}px` }),
  'border-b-(length:<custom-property>)': ([value]) => ({ borderBottomWidth: `var(${value})` }),
  'border-b-[<size>]': ([value]) => ({ borderBottomWidth: `"${value}"` }),
  'border-l': () => ({ borderLeftWidth: '1px' }),
  'border-l-<number>': ([value]) => ({ borderLeftWidth: `${value}px` }),
  'border-l-(length:<custom-property>)': ([value]) => ({ borderLeftWidth: `var(${value})` }),
  'border-l-[<size>]': ([value]) => ({ borderLeftWidth: `"${value}"` }),
  'divide-x': () => {
    throw new Error('divide-x is not supported')
  },
  'divide-x-<number>': () => {
    throw new Error('divide-x-<number> is not supported')
  },
  'divide-x-(length:<custom-property>)': () => {
    throw new Error('divide-x-(length:<custom-property>) is not supported')
  },
  'divide-x-[<value>]': () => {
    throw new Error('divide-x-[<value>] is not supported')
  },
  'divide-y': () => {
    throw new Error('divide-y is not supported')
  },
  'divide-y-<number>': () => {
    throw new Error('divide-y-<number> is not supported')
  },
  'divide-y-(length:<custom-property>)': () => {
    throw new Error('divide-y-(length:<custom-property>) is not supported')
  },
  'divide-y-[<value>]': () => {
    throw new Error('divide-y-[<value>] is not supported')
  },
  'divide-x-reverse': () => {
    throw new Error('divide-x-reverse is not supported')
  },
  'divide-y-reverse': () => {
    throw new Error('divide-y-reverse is not supported')
  },

  // border-color
  'border-inherit': () => ({ borderColor: 'inherit' }),
  'border-current': () => ({ borderColor: 'currentColor' }),
  'border-transparent': () => ({ borderColor: 'transparent' }),
  'border-black': () => ({ borderColor: 'var(--color-black)' }),
  'border-white': () => ({ borderColor: 'var(--color-white)' }),
  'border-red-50': () => ({ borderColor: 'var(--color-red-50)' }),
  'border-red-100': () => ({ borderColor: 'var(--color-red-100)' }),
  'border-red-200': () => ({ borderColor: 'var(--color-red-200)' }),
  'border-red-300': () => ({ borderColor: 'var(--color-red-300)' }),
  'border-red-400': () => ({ borderColor: 'var(--color-red-400)' }),
  'border-red-500': () => ({ borderColor: 'var(--color-red-500)' }),
  'border-red-600': () => ({ borderColor: 'var(--color-red-600)' }),
  'border-red-700': () => ({ borderColor: 'var(--color-red-700)' }),
  'border-red-800': () => ({ borderColor: 'var(--color-red-800)' }),
  'border-red-900': () => ({ borderColor: 'var(--color-red-900)' }),
  'border-red-950': () => ({ borderColor: 'var(--color-red-950)' }),
  'border-orange-50': () => ({ borderColor: 'var(--color-orange-50)' }),
  'border-orange-100': () => ({ borderColor: 'var(--color-orange-100)' }),
  'border-orange-200': () => ({ borderColor: 'var(--color-orange-200)' }),
  'border-orange-300': () => ({ borderColor: 'var(--color-orange-300)' }),
  'border-orange-400': () => ({ borderColor: 'var(--color-orange-400)' }),
  'border-orange-500': () => ({ borderColor: 'var(--color-orange-500)' }),
  'border-orange-600': () => ({ borderColor: 'var(--color-orange-600)' }),
  'border-orange-700': () => ({ borderColor: 'var(--color-orange-700)' }),
  'border-orange-800': () => ({ borderColor: 'var(--color-orange-800)' }),
  'border-orange-900': () => ({ borderColor: 'var(--color-orange-900)' }),
  'border-orange-950': () => ({ borderColor: 'var(--color-orange-950)' }),
  'border-amber-50': () => ({ borderColor: 'var(--color-amber-50)' }),
  'border-amber-100': () => ({ borderColor: 'var(--color-amber-100)' }),
  'border-amber-200': () => ({ borderColor: 'var(--color-amber-200)' }),
  'border-amber-300': () => ({ borderColor: 'var(--color-amber-300)' }),
  'border-amber-400': () => ({ borderColor: 'var(--color-amber-400)' }),
  'border-amber-500': () => ({ borderColor: 'var(--color-amber-500)' }),
  'border-amber-600': () => ({ borderColor: 'var(--color-amber-600)' }),
  'border-amber-700': () => ({ borderColor: 'var(--color-amber-700)' }),
  'border-amber-800': () => ({ borderColor: 'var(--color-amber-800)' }),
  'border-amber-900': () => ({ borderColor: 'var(--color-amber-900)' }),
  'border-amber-950': () => ({ borderColor: 'var(--color-amber-950)' }),
  'border-yellow-50': () => ({ borderColor: 'var(--color-yellow-50)' }),
  'border-yellow-100': () => ({ borderColor: 'var(--color-yellow-100)' }),
  'border-yellow-200': () => ({ borderColor: 'var(--color-yellow-200)' }),
  'border-yellow-300': () => ({ borderColor: 'var(--color-yellow-300)' }),
  'border-yellow-400': () => ({ borderColor: 'var(--color-yellow-400)' }),
  'border-yellow-500': () => ({ borderColor: 'var(--color-yellow-500)' }),
  'border-yellow-600': () => ({ borderColor: 'var(--color-yellow-600)' }),
  'border-yellow-700': () => ({ borderColor: 'var(--color-yellow-700)' }),
  'border-yellow-800': () => ({ borderColor: 'var(--color-yellow-800)' }),
  'border-yellow-900': () => ({ borderColor: 'var(--color-yellow-900)' }),
  'border-yellow-950': () => ({ borderColor: 'var(--color-yellow-950)' }),
  'border-lime-50': () => ({ borderColor: 'var(--color-lime-50)' }),
  'border-lime-100': () => ({ borderColor: 'var(--color-lime-100)' }),
  'border-lime-200': () => ({ borderColor: 'var(--color-lime-200)' }),
  'border-lime-300': () => ({ borderColor: 'var(--color-lime-300)' }),
  'border-lime-400': () => ({ borderColor: 'var(--color-lime-400)' }),
  'border-lime-500': () => ({ borderColor: 'var(--color-lime-500)' }),
  'border-lime-600': () => ({ borderColor: 'var(--color-lime-600)' }),
  'border-lime-700': () => ({ borderColor: 'var(--color-lime-700)' }),
  'border-lime-800': () => ({ borderColor: 'var(--color-lime-800)' }),
  'border-lime-900': () => ({ borderColor: 'var(--color-lime-900)' }),
  'border-lime-950': () => ({ borderColor: 'var(--color-lime-950)' }),
  'border-green-50': () => ({ borderColor: 'var(--color-green-50)' }),
  'border-green-100': () => ({ borderColor: 'var(--color-green-100)' }),
  'border-green-200': () => ({ borderColor: 'var(--color-green-200)' }),
  'border-green-300': () => ({ borderColor: 'var(--color-green-300)' }),
  'border-green-400': () => ({ borderColor: 'var(--color-green-400)' }),
  'border-green-500': () => ({ borderColor: 'var(--color-green-500)' }),
  'border-green-600': () => ({ borderColor: 'var(--color-green-600)' }),
  'border-green-700': () => ({ borderColor: 'var(--color-green-700)' }),
  'border-green-800': () => ({ borderColor: 'var(--color-green-800)' }),
  'border-green-900': () => ({ borderColor: 'var(--color-green-900)' }),
  'border-green-950': () => ({ borderColor: 'var(--color-green-950)' }),
  'border-emerald-50': () => ({ borderColor: 'var(--color-emerald-50)' }),
  'border-emerald-100': () => ({ borderColor: 'var(--color-emerald-100)' }),
  'border-emerald-200': () => ({ borderColor: 'var(--color-emerald-200)' }),
  'border-emerald-300': () => ({ borderColor: 'var(--color-emerald-300)' }),
  'border-emerald-400': () => ({ borderColor: 'var(--color-emerald-400)' }),
  'border-emerald-500': () => ({ borderColor: 'var(--color-emerald-500)' }),
  'border-emerald-600': () => ({ borderColor: 'var(--color-emerald-600)' }),
  'border-emerald-700': () => ({ borderColor: 'var(--color-emerald-700)' }),
  'border-emerald-800': () => ({ borderColor: 'var(--color-emerald-800)' }),
  'border-emerald-900': () => ({ borderColor: 'var(--color-emerald-900)' }),
  'border-emerald-950': () => ({ borderColor: 'var(--color-emerald-950)' }),
  'border-teal-50': () => ({ borderColor: 'var(--color-teal-50)' }),
  'border-teal-100': () => ({ borderColor: 'var(--color-teal-100)' }),
  'border-teal-200': () => ({ borderColor: 'var(--color-teal-200)' }),
  'border-teal-300': () => ({ borderColor: 'var(--color-teal-300)' }),
  'border-teal-400': () => ({ borderColor: 'var(--color-teal-400)' }),
  'border-teal-500': () => ({ borderColor: 'var(--color-teal-500)' }),
  'border-teal-600': () => ({ borderColor: 'var(--color-teal-600)' }),
  'border-teal-700': () => ({ borderColor: 'var(--color-teal-700)' }),
  'border-teal-800': () => ({ borderColor: 'var(--color-teal-800)' }),
  'border-teal-900': () => ({ borderColor: 'var(--color-teal-900)' }),
  'border-teal-950': () => ({ borderColor: 'var(--color-teal-950)' }),
  'border-cyan-50': () => ({ borderColor: 'var(--color-cyan-50)' }),
  'border-cyan-100': () => ({ borderColor: 'var(--color-cyan-100)' }),
  'border-cyan-200': () => ({ borderColor: 'var(--color-cyan-200)' }),
  'border-cyan-300': () => ({ borderColor: 'var(--color-cyan-300)' }),
  'border-cyan-400': () => ({ borderColor: 'var(--color-cyan-400)' }),
  'border-cyan-500': () => ({ borderColor: 'var(--color-cyan-500)' }),
  'border-cyan-600': () => ({ borderColor: 'var(--color-cyan-600)' }),
  'border-cyan-700': () => ({ borderColor: 'var(--color-cyan-700)' }),
  'border-cyan-800': () => ({ borderColor: 'var(--color-cyan-800)' }),
  'border-cyan-900': () => ({ borderColor: 'var(--color-cyan-900)' }),
  'border-cyan-950': () => ({ borderColor: 'var(--color-cyan-950)' }),
  'border-sky-50': () => ({ borderColor: 'var(--color-sky-50)' }),
  'border-sky-100': () => ({ borderColor: 'var(--color-sky-100)' }),
  'border-sky-200': () => ({ borderColor: 'var(--color-sky-200)' }),
  'border-sky-300': () => ({ borderColor: 'var(--color-sky-300)' }),
  'border-sky-400': () => ({ borderColor: 'var(--color-sky-400)' }),
  'border-sky-500': () => ({ borderColor: 'var(--color-sky-500)' }),
  'border-sky-600': () => ({ borderColor: 'var(--color-sky-600)' }),
  'border-sky-700': () => ({ borderColor: 'var(--color-sky-700)' }),
  'border-sky-800': () => ({ borderColor: 'var(--color-sky-800)' }),
  'border-sky-900': () => ({ borderColor: 'var(--color-sky-900)' }),
  'border-sky-950': () => ({ borderColor: 'var(--color-sky-950)' }),
  'border-blue-50': () => ({ borderColor: 'var(--color-blue-50)' }),
  'border-blue-100': () => ({ borderColor: 'var(--color-blue-100)' }),
  'border-blue-200': () => ({ borderColor: 'var(--color-blue-200)' }),
  'border-blue-300': () => ({ borderColor: 'var(--color-blue-300)' }),
  'border-blue-400': () => ({ borderColor: 'var(--color-blue-400)' }),
  'border-blue-500': () => ({ borderColor: 'var(--color-blue-500)' }),
  'border-blue-600': () => ({ borderColor: 'var(--color-blue-600)' }),
  'border-blue-700': () => ({ borderColor: 'var(--color-blue-700)' }),
  'border-blue-800': () => ({ borderColor: 'var(--color-blue-800)' }),
  'border-blue-900': () => ({ borderColor: 'var(--color-blue-900)' }),
  'border-blue-950': () => ({ borderColor: 'var(--color-blue-950)' }),
  'border-indigo-50': () => ({ borderColor: 'var(--color-indigo-50)' }),
  'border-indigo-100': () => ({ borderColor: 'var(--color-indigo-100)' }),
  'border-indigo-200': () => ({ borderColor: 'var(--color-indigo-200)' }),
  'border-indigo-300': () => ({ borderColor: 'var(--color-indigo-300)' }),
  'border-indigo-400': () => ({ borderColor: 'var(--color-indigo-400)' }),
  'border-indigo-500': () => ({ borderColor: 'var(--color-indigo-500)' }),
  'border-indigo-600': () => ({ borderColor: 'var(--color-indigo-600)' }),
  'border-indigo-700': () => ({ borderColor: 'var(--color-indigo-700)' }),
  'border-indigo-800': () => ({ borderColor: 'var(--color-indigo-800)' }),
  'border-indigo-900': () => ({ borderColor: 'var(--color-indigo-900)' }),
  'border-indigo-950': () => ({ borderColor: 'var(--color-indigo-950)' }),
  'border-violet-50': () => ({ borderColor: 'var(--color-violet-50)' }),
  'border-violet-100': () => ({ borderColor: 'var(--color-violet-100)' }),
  'border-violet-200': () => ({ borderColor: 'var(--color-violet-200)' }),
  'border-violet-300': () => ({ borderColor: 'var(--color-violet-300)' }),
  'border-violet-400': () => ({ borderColor: 'var(--color-violet-400)' }),
  'border-violet-500': () => ({ borderColor: 'var(--color-violet-500)' }),
  'border-violet-600': () => ({ borderColor: 'var(--color-violet-600)' }),
  'border-violet-700': () => ({ borderColor: 'var(--color-violet-700)' }),
  'border-violet-800': () => ({ borderColor: 'var(--color-violet-800)' }),
  'border-violet-900': () => ({ borderColor: 'var(--color-violet-900)' }),
  'border-violet-950': () => ({ borderColor: 'var(--color-violet-950)' }),
  'border-purple-50': () => ({ borderColor: 'var(--color-purple-50)' }),
  'border-purple-100': () => ({ borderColor: 'var(--color-purple-100)' }),
  'border-purple-200': () => ({ borderColor: 'var(--color-purple-200)' }),
  'border-purple-300': () => ({ borderColor: 'var(--color-purple-300)' }),
  'border-purple-400': () => ({ borderColor: 'var(--color-purple-400)' }),
  'border-purple-500': () => ({ borderColor: 'var(--color-purple-500)' }),
  'border-purple-600': () => ({ borderColor: 'var(--color-purple-600)' }),
  'border-purple-700': () => ({ borderColor: 'var(--color-purple-700)' }),
  'border-purple-800': () => ({ borderColor: 'var(--color-purple-800)' }),
  'border-purple-900': () => ({ borderColor: 'var(--color-purple-900)' }),
  'border-purple-950': () => ({ borderColor: 'var(--color-purple-950)' }),
  'border-fuchsia-50': () => ({ borderColor: 'var(--color-fuchsia-50)' }),
  'border-fuchsia-100': () => ({ borderColor: 'var(--color-fuchsia-100)' }),
  'border-fuchsia-200': () => ({ borderColor: 'var(--color-fuchsia-200)' }),
  'border-fuchsia-300': () => ({ borderColor: 'var(--color-fuchsia-300)' }),
  'border-fuchsia-400': () => ({ borderColor: 'var(--color-fuchsia-400)' }),
  'border-fuchsia-500': () => ({ borderColor: 'var(--color-fuchsia-500)' }),
  'border-fuchsia-600': () => ({ borderColor: 'var(--color-fuchsia-600)' }),
  'border-fuchsia-700': () => ({ borderColor: 'var(--color-fuchsia-700)' }),
  'border-fuchsia-800': () => ({ borderColor: 'var(--color-fuchsia-800)' }),
  'border-fuchsia-900': () => ({ borderColor: 'var(--color-fuchsia-900)' }),
  'border-fuchsia-950': () => ({ borderColor: 'var(--color-fuchsia-950)' }),
  'border-pink-50': () => ({ borderColor: 'var(--color-pink-50)' }),
  'border-pink-100': () => ({ borderColor: 'var(--color-pink-100)' }),
  'border-pink-200': () => ({ borderColor: 'var(--color-pink-200)' }),
  'border-pink-300': () => ({ borderColor: 'var(--color-pink-300)' }),
  'border-pink-400': () => ({ borderColor: 'var(--color-pink-400)' }),
  'border-pink-500': () => ({ borderColor: 'var(--color-pink-500)' }),
  'border-pink-600': () => ({ borderColor: 'var(--color-pink-600)' }),
  'border-pink-700': () => ({ borderColor: 'var(--color-pink-700)' }),
  'border-pink-800': () => ({ borderColor: 'var(--color-pink-800)' }),
  'border-pink-900': () => ({ borderColor: 'var(--color-pink-900)' }),
  'border-pink-950': () => ({ borderColor: 'var(--color-pink-950)' }),
  'border-rose-50': () => ({ borderColor: 'var(--color-rose-50)' }),
  'border-rose-100': () => ({ borderColor: 'var(--color-rose-100)' }),
  'border-rose-200': () => ({ borderColor: 'var(--color-rose-200)' }),
  'border-rose-300': () => ({ borderColor: 'var(--color-rose-300)' }),
  'border-rose-400': () => ({ borderColor: 'var(--color-rose-400)' }),
  'border-rose-500': () => ({ borderColor: 'var(--color-rose-500)' }),
  'border-rose-600': () => ({ borderColor: 'var(--color-rose-600)' }),
  'border-rose-700': () => ({ borderColor: 'var(--color-rose-700)' }),
  'border-rose-800': () => ({ borderColor: 'var(--color-rose-800)' }),
  'border-rose-900': () => ({ borderColor: 'var(--color-rose-900)' }),
  'border-rose-950': () => ({ borderColor: 'var(--color-rose-950)' }),
  'border-slate-50': () => ({ borderColor: 'var(--color-slate-50)' }),
  'border-slate-100': () => ({ borderColor: 'var(--color-slate-100)' }),
  'border-slate-200': () => ({ borderColor: 'var(--color-slate-200)' }),
  'border-slate-300': () => ({ borderColor: 'var(--color-slate-300)' }),
  'border-slate-400': () => ({ borderColor: 'var(--color-slate-400)' }),
  'border-slate-500': () => ({ borderColor: 'var(--color-slate-500)' }),
  'border-slate-600': () => ({ borderColor: 'var(--color-slate-600)' }),
  'border-slate-700': () => ({ borderColor: 'var(--color-slate-700)' }),
  'border-slate-800': () => ({ borderColor: 'var(--color-slate-800)' }),
  'border-slate-900': () => ({ borderColor: 'var(--color-slate-900)' }),
  'border-slate-950': () => ({ borderColor: 'var(--color-slate-950)' }),
  'border-gray-50': () => ({ borderColor: 'var(--color-gray-50)' }),
  'border-gray-100': () => ({ borderColor: 'var(--color-gray-100)' }),
  'border-gray-200': () => ({ borderColor: 'var(--color-gray-200)' }),
  'border-gray-300': () => ({ borderColor: 'var(--color-gray-300)' }),
  'border-gray-400': () => ({ borderColor: 'var(--color-gray-400)' }),
  'border-gray-500': () => ({ borderColor: 'var(--color-gray-500)' }),
  'border-gray-600': () => ({ borderColor: 'var(--color-gray-600)' }),
  'border-gray-700': () => ({ borderColor: 'var(--color-gray-700)' }),
  'border-gray-800': () => ({ borderColor: 'var(--color-gray-800)' }),
  'border-gray-900': () => ({ borderColor: 'var(--color-gray-900)' }),
  'border-gray-950': () => ({ borderColor: 'var(--color-gray-950)' }),
  'border-zinc-50': () => ({ borderColor: 'var(--color-zinc-50)' }),
  'border-zinc-100': () => ({ borderColor: 'var(--color-zinc-100)' }),
  'border-zinc-200': () => ({ borderColor: 'var(--color-zinc-200)' }),
  'border-zinc-300': () => ({ borderColor: 'var(--color-zinc-300)' }),
  'border-zinc-400': () => ({ borderColor: 'var(--color-zinc-400)' }),
  'border-zinc-500': () => ({ borderColor: 'var(--color-zinc-500)' }),
  'border-zinc-600': () => ({ borderColor: 'var(--color-zinc-600)' }),
  'border-zinc-700': () => ({ borderColor: 'var(--color-zinc-700)' }),
  'border-zinc-800': () => ({ borderColor: 'var(--color-zinc-800)' }),
  'border-zinc-900': () => ({ borderColor: 'var(--color-zinc-900)' }),
  'border-zinc-950': () => ({ borderColor: 'var(--color-zinc-950)' }),
  'border-neutral-50': () => ({ borderColor: 'var(--color-neutral-50)' }),
  'border-neutral-100': () => ({ borderColor: 'var(--color-neutral-100)' }),
  'border-neutral-200': () => ({ borderColor: 'var(--color-neutral-200)' }),
  'border-neutral-300': () => ({ borderColor: 'var(--color-neutral-300)' }),
  'border-neutral-400': () => ({ borderColor: 'var(--color-neutral-400)' }),
  'border-neutral-500': () => ({ borderColor: 'var(--color-neutral-500)' }),
  'border-neutral-600': () => ({ borderColor: 'var(--color-neutral-600)' }),
  'border-neutral-700': () => ({ borderColor: 'var(--color-neutral-700)' }),
  'border-neutral-800': () => ({ borderColor: 'var(--color-neutral-800)' }),
  'border-neutral-900': () => ({ borderColor: 'var(--color-neutral-900)' }),
  'border-neutral-950': () => ({ borderColor: 'var(--color-neutral-950)' }),
  'border-stone-50': () => ({ borderColor: 'var(--color-stone-50)' }),
  'border-stone-100': () => ({ borderColor: 'var(--color-stone-100)' }),
  'border-stone-200': () => ({ borderColor: 'var(--color-stone-200)' }),
  'border-stone-300': () => ({ borderColor: 'var(--color-stone-300)' }),
  'border-stone-400': () => ({ borderColor: 'var(--color-stone-400)' }),
  'border-stone-500': () => ({ borderColor: 'var(--color-stone-500)' }),
  'border-stone-600': () => ({ borderColor: 'var(--color-stone-600)' }),
  'border-stone-700': () => ({ borderColor: 'var(--color-stone-700)' }),
  'border-stone-800': () => ({ borderColor: 'var(--color-stone-800)' }),
  'border-stone-900': () => ({ borderColor: 'var(--color-stone-900)' }),
  'border-stone-950': () => ({ borderColor: 'var(--color-stone-950)' }),
  'border-(<custom-property>)': ([value]) => ({ borderColor: `var(${value})` }),
  'border-[<value>]': ([value]) => ({ borderColor: `"${value}"` }),
  'border-x-inherit': () => ({ borderInlineColor: 'inherit' }),
  'border-x-current': () => ({ borderInlineColor: 'currentColor' }),
  'border-x-transparent': () => ({ borderInlineColor: 'transparent' }),
  'border-x-black': () => ({ borderInlineColor: 'var(--color-black)' }),
  'border-x-white': () => ({ borderInlineColor: 'var(--color-white)' }),
  'border-x-red-50': () => ({ borderInlineColor: 'var(--color-red-50)' }),
  'border-x-red-100': () => ({ borderInlineColor: 'var(--color-red-100)' }),
  'border-x-red-200': () => ({ borderInlineColor: 'var(--color-red-200)' }),
  'border-x-red-300': () => ({ borderInlineColor: 'var(--color-red-300)' }),
  'border-x-red-400': () => ({ borderInlineColor: 'var(--color-red-400)' }),
  'border-x-red-500': () => ({ borderInlineColor: 'var(--color-red-500)' }),
  'border-x-red-600': () => ({ borderInlineColor: 'var(--color-red-600)' }),
  'border-x-red-700': () => ({ borderInlineColor: 'var(--color-red-700)' }),
  'border-x-red-800': () => ({ borderInlineColor: 'var(--color-red-800)' }),
  'border-x-red-900': () => ({ borderInlineColor: 'var(--color-red-900)' }),
  'border-x-red-950': () => ({ borderInlineColor: 'var(--color-red-950)' }),
  'border-x-orange-50': () => ({ borderInlineColor: 'var(--color-orange-50)' }),
  'border-x-orange-100': () => ({ borderInlineColor: 'var(--color-orange-100)' }),
  'border-x-orange-200': () => ({ borderInlineColor: 'var(--color-orange-200)' }),
  'border-x-orange-300': () => ({ borderInlineColor: 'var(--color-orange-300)' }),
  'border-x-orange-400': () => ({ borderInlineColor: 'var(--color-orange-400)' }),
  'border-x-orange-500': () => ({ borderInlineColor: 'var(--color-orange-500)' }),
  'border-x-orange-600': () => ({ borderInlineColor: 'var(--color-orange-600)' }),
  'border-x-orange-700': () => ({ borderInlineColor: 'var(--color-orange-700)' }),
  'border-x-orange-800': () => ({ borderInlineColor: 'var(--color-orange-800)' }),
  'border-x-orange-900': () => ({ borderInlineColor: 'var(--color-orange-900)' }),
  'border-x-orange-950': () => ({ borderInlineColor: 'var(--color-orange-950)' }),
  'border-x-amber-50': () => ({ borderInlineColor: 'var(--color-amber-50)' }),
  'border-x-amber-100': () => ({ borderInlineColor: 'var(--color-amber-100)' }),
  'border-x-amber-200': () => ({ borderInlineColor: 'var(--color-amber-200)' }),
  'border-x-amber-300': () => ({ borderInlineColor: 'var(--color-amber-300)' }),
  'border-x-amber-400': () => ({ borderInlineColor: 'var(--color-amber-400)' }),
  'border-x-amber-500': () => ({ borderInlineColor: 'var(--color-amber-500)' }),
  'border-x-amber-600': () => ({ borderInlineColor: 'var(--color-amber-600)' }),
  'border-x-amber-700': () => ({ borderInlineColor: 'var(--color-amber-700)' }),
  'border-x-amber-800': () => ({ borderInlineColor: 'var(--color-amber-800)' }),
  'border-x-amber-900': () => ({ borderInlineColor: 'var(--color-amber-900)' }),
  'border-x-amber-950': () => ({ borderInlineColor: 'var(--color-amber-950)' }),
  'border-x-yellow-50': () => ({ borderInlineColor: 'var(--color-yellow-50)' }),
  'border-x-yellow-100': () => ({ borderInlineColor: 'var(--color-yellow-100)' }),
  'border-x-yellow-200': () => ({ borderInlineColor: 'var(--color-yellow-200)' }),
  'border-x-yellow-300': () => ({ borderInlineColor: 'var(--color-yellow-300)' }),
  'border-x-yellow-400': () => ({ borderInlineColor: 'var(--color-yellow-400)' }),
  'border-x-yellow-500': () => ({ borderInlineColor: 'var(--color-yellow-500)' }),
  'border-x-yellow-600': () => ({ borderInlineColor: 'var(--color-yellow-600)' }),
  'border-x-yellow-700': () => ({ borderInlineColor: 'var(--color-yellow-700)' }),
  'border-x-yellow-800': () => ({ borderInlineColor: 'var(--color-yellow-800)' }),
  'border-x-yellow-900': () => ({ borderInlineColor: 'var(--color-yellow-900)' }),
  'border-x-yellow-950': () => ({ borderInlineColor: 'var(--color-yellow-950)' }),
  'border-x-lime-50': () => ({ borderInlineColor: 'var(--color-lime-50)' }),
  'border-x-lime-100': () => ({ borderInlineColor: 'var(--color-lime-100)' }),
  'border-x-lime-200': () => ({ borderInlineColor: 'var(--color-lime-200)' }),
  'border-x-lime-300': () => ({ borderInlineColor: 'var(--color-lime-300)' }),
  'border-x-lime-400': () => ({ borderInlineColor: 'var(--color-lime-400)' }),
  'border-x-lime-500': () => ({ borderInlineColor: 'var(--color-lime-500)' }),
  'border-x-lime-600': () => ({ borderInlineColor: 'var(--color-lime-600)' }),
  'border-x-lime-700': () => ({ borderInlineColor: 'var(--color-lime-700)' }),
  'border-x-lime-800': () => ({ borderInlineColor: 'var(--color-lime-800)' }),
  'border-x-lime-900': () => ({ borderInlineColor: 'var(--color-lime-900)' }),
  'border-x-lime-950': () => ({ borderInlineColor: 'var(--color-lime-950)' }),
  'border-x-green-50': () => ({ borderInlineColor: 'var(--color-green-50)' }),
  'border-x-green-100': () => ({ borderInlineColor: 'var(--color-green-100)' }),
  'border-x-green-200': () => ({ borderInlineColor: 'var(--color-green-200)' }),
  'border-x-green-300': () => ({ borderInlineColor: 'var(--color-green-300)' }),
  'border-x-green-400': () => ({ borderInlineColor: 'var(--color-green-400)' }),
  'border-x-green-500': () => ({ borderInlineColor: 'var(--color-green-500)' }),
  'border-x-green-600': () => ({ borderInlineColor: 'var(--color-green-600)' }),
  'border-x-green-700': () => ({ borderInlineColor: 'var(--color-green-700)' }),
  'border-x-green-800': () => ({ borderInlineColor: 'var(--color-green-800)' }),
  'border-x-green-900': () => ({ borderInlineColor: 'var(--color-green-900)' }),
  'border-x-green-950': () => ({ borderInlineColor: 'var(--color-green-950)' }),
  'border-x-emerald-50': () => ({ borderInlineColor: 'var(--color-emerald-50)' }),
  'border-x-emerald-100': () => ({ borderInlineColor: 'var(--color-emerald-100)' }),
  'border-x-emerald-200': () => ({ borderInlineColor: 'var(--color-emerald-200)' }),
  'border-x-emerald-300': () => ({ borderInlineColor: 'var(--color-emerald-300)' }),
  'border-x-emerald-400': () => ({ borderInlineColor: 'var(--color-emerald-400)' }),
  'border-x-emerald-500': () => ({ borderInlineColor: 'var(--color-emerald-500)' }),
  'border-x-emerald-600': () => ({ borderInlineColor: 'var(--color-emerald-600)' }),
  'border-x-emerald-700': () => ({ borderInlineColor: 'var(--color-emerald-700)' }),
  'border-x-emerald-800': () => ({ borderInlineColor: 'var(--color-emerald-800)' }),
  'border-x-emerald-900': () => ({ borderInlineColor: 'var(--color-emerald-900)' }),
  'border-x-emerald-950': () => ({ borderInlineColor: 'var(--color-emerald-950)' }),
  'border-x-teal-50': () => ({ borderInlineColor: 'var(--color-teal-50)' }),
  'border-x-teal-100': () => ({ borderInlineColor: 'var(--color-teal-100)' }),
  'border-x-teal-200': () => ({ borderInlineColor: 'var(--color-teal-200)' }),
  'border-x-teal-300': () => ({ borderInlineColor: 'var(--color-teal-300)' }),
  'border-x-teal-400': () => ({ borderInlineColor: 'var(--color-teal-400)' }),
  'border-x-teal-500': () => ({ borderInlineColor: 'var(--color-teal-500)' }),
  'border-x-teal-600': () => ({ borderInlineColor: 'var(--color-teal-600)' }),
  'border-x-teal-700': () => ({ borderInlineColor: 'var(--color-teal-700)' }),
  'border-x-teal-800': () => ({ borderInlineColor: 'var(--color-teal-800)' }),
  'border-x-teal-900': () => ({ borderInlineColor: 'var(--color-teal-900)' }),
  'border-x-teal-950': () => ({ borderInlineColor: 'var(--color-teal-950)' }),
  'border-x-cyan-50': () => ({ borderInlineColor: 'var(--color-cyan-50)' }),
  'border-x-cyan-100': () => ({ borderInlineColor: 'var(--color-cyan-100)' }),
  'border-x-cyan-200': () => ({ borderInlineColor: 'var(--color-cyan-200)' }),
  'border-x-cyan-300': () => ({ borderInlineColor: 'var(--color-cyan-300)' }),
  'border-x-cyan-400': () => ({ borderInlineColor: 'var(--color-cyan-400)' }),
  'border-x-cyan-500': () => ({ borderInlineColor: 'var(--color-cyan-500)' }),
  'border-x-cyan-600': () => ({ borderInlineColor: 'var(--color-cyan-600)' }),
  'border-x-cyan-700': () => ({ borderInlineColor: 'var(--color-cyan-700)' }),
  'border-x-cyan-800': () => ({ borderInlineColor: 'var(--color-cyan-800)' }),
  'border-x-cyan-900': () => ({ borderInlineColor: 'var(--color-cyan-900)' }),
  'border-x-cyan-950': () => ({ borderInlineColor: 'var(--color-cyan-950)' }),
  'border-x-sky-50': () => ({ borderInlineColor: 'var(--color-sky-50)' }),
  'border-x-sky-100': () => ({ borderInlineColor: 'var(--color-sky-100)' }),
  'border-x-sky-200': () => ({ borderInlineColor: 'var(--color-sky-200)' }),
  'border-x-sky-300': () => ({ borderInlineColor: 'var(--color-sky-300)' }),
  'border-x-sky-400': () => ({ borderInlineColor: 'var(--color-sky-400)' }),
  'border-x-sky-500': () => ({ borderInlineColor: 'var(--color-sky-500)' }),
  'border-x-sky-600': () => ({ borderInlineColor: 'var(--color-sky-600)' }),
  'border-x-sky-700': () => ({ borderInlineColor: 'var(--color-sky-700)' }),
  'border-x-sky-800': () => ({ borderInlineColor: 'var(--color-sky-800)' }),
  'border-x-sky-900': () => ({ borderInlineColor: 'var(--color-sky-900)' }),
  'border-x-sky-950': () => ({ borderInlineColor: 'var(--color-sky-950)' }),
  'border-x-blue-50': () => ({ borderInlineColor: 'var(--color-blue-50)' }),
  'border-x-blue-100': () => ({ borderInlineColor: 'var(--color-blue-100)' }),
  'border-x-blue-200': () => ({ borderInlineColor: 'var(--color-blue-200)' }),
  'border-x-blue-300': () => ({ borderInlineColor: 'var(--color-blue-300)' }),
  'border-x-blue-400': () => ({ borderInlineColor: 'var(--color-blue-400)' }),
  'border-x-blue-500': () => ({ borderInlineColor: 'var(--color-blue-500)' }),
  'border-x-blue-600': () => ({ borderInlineColor: 'var(--color-blue-600)' }),
  'border-x-blue-700': () => ({ borderInlineColor: 'var(--color-blue-700)' }),
  'border-x-blue-800': () => ({ borderInlineColor: 'var(--color-blue-800)' }),
  'border-x-blue-900': () => ({ borderInlineColor: 'var(--color-blue-900)' }),
  'border-x-blue-950': () => ({ borderInlineColor: 'var(--color-blue-950)' }),
  'border-x-indigo-50': () => ({ borderInlineColor: 'var(--color-indigo-50)' }),
  'border-x-indigo-100': () => ({ borderInlineColor: 'var(--color-indigo-100)' }),
  'border-x-indigo-200': () => ({ borderInlineColor: 'var(--color-indigo-200)' }),
  'border-x-indigo-300': () => ({ borderInlineColor: 'var(--color-indigo-300)' }),
  'border-x-indigo-400': () => ({ borderInlineColor: 'var(--color-indigo-400)' }),
  'border-x-indigo-500': () => ({ borderInlineColor: 'var(--color-indigo-500)' }),
  'border-x-indigo-600': () => ({ borderInlineColor: 'var(--color-indigo-600)' }),
  'border-x-indigo-700': () => ({ borderInlineColor: 'var(--color-indigo-700)' }),
  'border-x-indigo-800': () => ({ borderInlineColor: 'var(--color-indigo-800)' }),
  'border-x-indigo-900': () => ({ borderInlineColor: 'var(--color-indigo-900)' }),
  'border-x-indigo-950': () => ({ borderInlineColor: 'var(--color-indigo-950)' }),
  'border-x-violet-50': () => ({ borderInlineColor: 'var(--color-violet-50)' }),
  'border-x-violet-100': () => ({ borderInlineColor: 'var(--color-violet-100)' }),
  'border-x-violet-200': () => ({ borderInlineColor: 'var(--color-violet-200)' }),
  'border-x-violet-300': () => ({ borderInlineColor: 'var(--color-violet-300)' }),
  'border-x-violet-400': () => ({ borderInlineColor: 'var(--color-violet-400)' }),
  'border-x-violet-500': () => ({ borderInlineColor: 'var(--color-violet-500)' }),
  'border-x-violet-600': () => ({ borderInlineColor: 'var(--color-violet-600)' }),
  'border-x-violet-700': () => ({ borderInlineColor: 'var(--color-violet-700)' }),
  'border-x-violet-800': () => ({ borderInlineColor: 'var(--color-violet-800)' }),
  'border-x-violet-900': () => ({ borderInlineColor: 'var(--color-violet-900)' }),
  'border-x-violet-950': () => ({ borderInlineColor: 'var(--color-violet-950)' }),
  'border-x-purple-50': () => ({ borderInlineColor: 'var(--color-purple-50)' }),
  'border-x-purple-100': () => ({ borderInlineColor: 'var(--color-purple-100)' }),
  'border-x-purple-200': () => ({ borderInlineColor: 'var(--color-purple-200)' }),
  'border-x-purple-300': () => ({ borderInlineColor: 'var(--color-purple-300)' }),
  'border-x-purple-400': () => ({ borderInlineColor: 'var(--color-purple-400)' }),
  'border-x-purple-500': () => ({ borderInlineColor: 'var(--color-purple-500)' }),
  'border-x-purple-600': () => ({ borderInlineColor: 'var(--color-purple-600)' }),
  'border-x-purple-700': () => ({ borderInlineColor: 'var(--color-purple-700)' }),
  'border-x-purple-800': () => ({ borderInlineColor: 'var(--color-purple-800)' }),
  'border-x-purple-900': () => ({ borderInlineColor: 'var(--color-purple-900)' }),
  'border-x-purple-950': () => ({ borderInlineColor: 'var(--color-purple-950)' }),
  'border-x-fuchsia-50': () => ({ borderInlineColor: 'var(--color-fuchsia-50)' }),
  'border-x-fuchsia-100': () => ({ borderInlineColor: 'var(--color-fuchsia-100)' }),
  'border-x-fuchsia-200': () => ({ borderInlineColor: 'var(--color-fuchsia-200)' }),
  'border-x-fuchsia-300': () => ({ borderInlineColor: 'var(--color-fuchsia-300)' }),
  'border-x-fuchsia-400': () => ({ borderInlineColor: 'var(--color-fuchsia-400)' }),
  'border-x-fuchsia-500': () => ({ borderInlineColor: 'var(--color-fuchsia-500)' }),
  'border-x-fuchsia-600': () => ({ borderInlineColor: 'var(--color-fuchsia-600)' }),
  'border-x-fuchsia-700': () => ({ borderInlineColor: 'var(--color-fuchsia-700)' }),
  'border-x-fuchsia-800': () => ({ borderInlineColor: 'var(--color-fuchsia-800)' }),
  'border-x-fuchsia-900': () => ({ borderInlineColor: 'var(--color-fuchsia-900)' }),
  'border-x-fuchsia-950': () => ({ borderInlineColor: 'var(--color-fuchsia-950)' }),
  'border-x-pink-50': () => ({ borderInlineColor: 'var(--color-pink-50)' }),
  'border-x-pink-100': () => ({ borderInlineColor: 'var(--color-pink-100)' }),
  'border-x-pink-200': () => ({ borderInlineColor: 'var(--color-pink-200)' }),
  'border-x-pink-300': () => ({ borderInlineColor: 'var(--color-pink-300)' }),
  'border-x-pink-400': () => ({ borderInlineColor: 'var(--color-pink-400)' }),
  'border-x-pink-500': () => ({ borderInlineColor: 'var(--color-pink-500)' }),
  'border-x-pink-600': () => ({ borderInlineColor: 'var(--color-pink-600)' }),
  'border-x-pink-700': () => ({ borderInlineColor: 'var(--color-pink-700)' }),
  'border-x-pink-800': () => ({ borderInlineColor: 'var(--color-pink-800)' }),
  'border-x-pink-900': () => ({ borderInlineColor: 'var(--color-pink-900)' }),
  'border-x-pink-950': () => ({ borderInlineColor: 'var(--color-pink-950)' }),
  'border-x-rose-50': () => ({ borderInlineColor: 'var(--color-rose-50)' }),
  'border-x-rose-100': () => ({ borderInlineColor: 'var(--color-rose-100)' }),
  'border-x-rose-200': () => ({ borderInlineColor: 'var(--color-rose-200)' }),
  'border-x-rose-300': () => ({ borderInlineColor: 'var(--color-rose-300)' }),
  'border-x-rose-400': () => ({ borderInlineColor: 'var(--color-rose-400)' }),
  'border-x-rose-500': () => ({ borderInlineColor: 'var(--color-rose-500)' }),
  'border-x-rose-600': () => ({ borderInlineColor: 'var(--color-rose-600)' }),
  'border-x-rose-700': () => ({ borderInlineColor: 'var(--color-rose-700)' }),
  'border-x-rose-800': () => ({ borderInlineColor: 'var(--color-rose-800)' }),
  'border-x-rose-900': () => ({ borderInlineColor: 'var(--color-rose-900)' }),
  'border-x-rose-950': () => ({ borderInlineColor: 'var(--color-rose-950)' }),
  'border-x-slate-50': () => ({ borderInlineColor: 'var(--color-slate-50)' }),
  'border-x-slate-100': () => ({ borderInlineColor: 'var(--color-slate-100)' }),
  'border-x-slate-200': () => ({ borderInlineColor: 'var(--color-slate-200)' }),
  'border-x-slate-300': () => ({ borderInlineColor: 'var(--color-slate-300)' }),
  'border-x-slate-400': () => ({ borderInlineColor: 'var(--color-slate-400)' }),
  'border-x-slate-500': () => ({ borderInlineColor: 'var(--color-slate-500)' }),
  'border-x-slate-600': () => ({ borderInlineColor: 'var(--color-slate-600)' }),
  'border-x-slate-700': () => ({ borderInlineColor: 'var(--color-slate-700)' }),
  'border-x-slate-800': () => ({ borderInlineColor: 'var(--color-slate-800)' }),
  'border-x-slate-900': () => ({ borderInlineColor: 'var(--color-slate-900)' }),
  'border-x-slate-950': () => ({ borderInlineColor: 'var(--color-slate-950)' }),
  'border-x-gray-50': () => ({ borderInlineColor: 'var(--color-gray-50)' }),
  'border-x-gray-100': () => ({ borderInlineColor: 'var(--color-gray-100)' }),
  'border-x-gray-200': () => ({ borderInlineColor: 'var(--color-gray-200)' }),
  'border-x-gray-300': () => ({ borderInlineColor: 'var(--color-gray-300)' }),
  'border-x-gray-400': () => ({ borderInlineColor: 'var(--color-gray-400)' }),
  'border-x-gray-500': () => ({ borderInlineColor: 'var(--color-gray-500)' }),
  'border-x-gray-600': () => ({ borderInlineColor: 'var(--color-gray-600)' }),
  'border-x-gray-700': () => ({ borderInlineColor: 'var(--color-gray-700)' }),
  'border-x-gray-800': () => ({ borderInlineColor: 'var(--color-gray-800)' }),
  'border-x-gray-900': () => ({ borderInlineColor: 'var(--color-gray-900)' }),
  'border-x-gray-950': () => ({ borderInlineColor: 'var(--color-gray-950)' }),
  'border-x-zinc-50': () => ({ borderInlineColor: 'var(--color-zinc-50)' }),
  'border-x-zinc-100': () => ({ borderInlineColor: 'var(--color-zinc-100)' }),
  'border-x-zinc-200': () => ({ borderInlineColor: 'var(--color-zinc-200)' }),
  'border-x-zinc-300': () => ({ borderInlineColor: 'var(--color-zinc-300)' }),
  'border-x-zinc-400': () => ({ borderInlineColor: 'var(--color-zinc-400)' }),
  'border-x-zinc-500': () => ({ borderInlineColor: 'var(--color-zinc-500)' }),
  'border-x-zinc-600': () => ({ borderInlineColor: 'var(--color-zinc-600)' }),
  'border-x-zinc-700': () => ({ borderInlineColor: 'var(--color-zinc-700)' }),
  'border-x-zinc-800': () => ({ borderInlineColor: 'var(--color-zinc-800)' }),
  'border-x-zinc-900': () => ({ borderInlineColor: 'var(--color-zinc-900)' }),
  'border-x-zinc-950': () => ({ borderInlineColor: 'var(--color-zinc-950)' }),
  'border-x-neutral-50': () => ({ borderInlineColor: 'var(--color-neutral-50)' }),
  'border-x-neutral-100': () => ({ borderInlineColor: 'var(--color-neutral-100)' }),
  'border-x-neutral-200': () => ({ borderInlineColor: 'var(--color-neutral-200)' }),
  'border-x-neutral-300': () => ({ borderInlineColor: 'var(--color-neutral-300)' }),
  'border-x-neutral-400': () => ({ borderInlineColor: 'var(--color-neutral-400)' }),
  'border-x-neutral-500': () => ({ borderInlineColor: 'var(--color-neutral-500)' }),
  'border-x-neutral-600': () => ({ borderInlineColor: 'var(--color-neutral-600)' }),
  'border-x-neutral-700': () => ({ borderInlineColor: 'var(--color-neutral-700)' }),
  'border-x-neutral-800': () => ({ borderInlineColor: 'var(--color-neutral-800)' }),
  'border-x-neutral-900': () => ({ borderInlineColor: 'var(--color-neutral-900)' }),
  'border-x-neutral-950': () => ({ borderInlineColor: 'var(--color-neutral-950)' }),
  'border-x-stone-50': () => ({ borderInlineColor: 'var(--color-stone-50)' }),
  'border-x-stone-100': () => ({ borderInlineColor: 'var(--color-stone-100)' }),
  'border-x-stone-200': () => ({ borderInlineColor: 'var(--color-stone-200)' }),
  'border-x-stone-300': () => ({ borderInlineColor: 'var(--color-stone-300)' }),
  'border-x-stone-400': () => ({ borderInlineColor: 'var(--color-stone-400)' }),
  'border-x-stone-500': () => ({ borderInlineColor: 'var(--color-stone-500)' }),
  'border-x-stone-600': () => ({ borderInlineColor: 'var(--color-stone-600)' }),
  'border-x-stone-700': () => ({ borderInlineColor: 'var(--color-stone-700)' }),
  'border-x-stone-800': () => ({ borderInlineColor: 'var(--color-stone-800)' }),
  'border-x-stone-900': () => ({ borderInlineColor: 'var(--color-stone-900)' }),
  'border-x-stone-950': () => ({ borderInlineColor: 'var(--color-stone-950)' }),
  'border-x-(<custom-property>)': ([value]) => ({ borderInlineColor: `var(${value})` }),
  'border-x-[<value>]': ([value]) => ({ borderInlineColor: `"${value}"` }),
  'border-y-inherit': () => ({ borderBlockColor: 'inherit' }),
  'border-y-current': () => ({ borderBlockColor: 'currentColor' }),
  'border-y-transparent': () => ({ borderBlockColor: 'transparent' }),
  'border-y-black': () => ({ borderBlockColor: 'var(--color-black)' }),
  'border-y-white': () => ({ borderBlockColor: 'var(--color-white)' }),
  'border-y-red-50': () => ({ borderBlockColor: 'var(--color-red-50)' }),
  'border-y-red-100': () => ({ borderBlockColor: 'var(--color-red-100)' }),
  'border-y-red-200': () => ({ borderBlockColor: 'var(--color-red-200)' }),
  'border-y-red-300': () => ({ borderBlockColor: 'var(--color-red-300)' }),
  'border-y-red-400': () => ({ borderBlockColor: 'var(--color-red-400)' }),
  'border-y-red-500': () => ({ borderBlockColor: 'var(--color-red-500)' }),
  'border-y-red-600': () => ({ borderBlockColor: 'var(--color-red-600)' }),
  'border-y-red-700': () => ({ borderBlockColor: 'var(--color-red-700)' }),
  'border-y-red-800': () => ({ borderBlockColor: 'var(--color-red-800)' }),
  'border-y-red-900': () => ({ borderBlockColor: 'var(--color-red-900)' }),
  'border-y-red-950': () => ({ borderBlockColor: 'var(--color-red-950)' }),
  'border-y-orange-50': () => ({ borderBlockColor: 'var(--color-orange-50)' }),
  'border-y-orange-100': () => ({ borderBlockColor: 'var(--color-orange-100)' }),
  'border-y-orange-200': () => ({ borderBlockColor: 'var(--color-orange-200)' }),
  'border-y-orange-300': () => ({ borderBlockColor: 'var(--color-orange-300)' }),
  'border-y-orange-400': () => ({ borderBlockColor: 'var(--color-orange-400)' }),
  'border-y-orange-500': () => ({ borderBlockColor: 'var(--color-orange-500)' }),
  'border-y-orange-600': () => ({ borderBlockColor: 'var(--color-orange-600)' }),
  'border-y-orange-700': () => ({ borderBlockColor: 'var(--color-orange-700)' }),
  'border-y-orange-800': () => ({ borderBlockColor: 'var(--color-orange-800)' }),
  'border-y-orange-900': () => ({ borderBlockColor: 'var(--color-orange-900)' }),
  'border-y-orange-950': () => ({ borderBlockColor: 'var(--color-orange-950)' }),
  'border-y-amber-50': () => ({ borderBlockColor: 'var(--color-amber-50)' }),
  'border-y-amber-100': () => ({ borderBlockColor: 'var(--color-amber-100)' }),
  'border-y-amber-200': () => ({ borderBlockColor: 'var(--color-amber-200)' }),
  'border-y-amber-300': () => ({ borderBlockColor: 'var(--color-amber-300)' }),
  'border-y-amber-400': () => ({ borderBlockColor: 'var(--color-amber-400)' }),
  'border-y-amber-500': () => ({ borderBlockColor: 'var(--color-amber-500)' }),
  'border-y-amber-600': () => ({ borderBlockColor: 'var(--color-amber-600)' }),
  'border-y-amber-700': () => ({ borderBlockColor: 'var(--color-amber-700)' }),
  'border-y-amber-800': () => ({ borderBlockColor: 'var(--color-amber-800)' }),
  'border-y-amber-900': () => ({ borderBlockColor: 'var(--color-amber-900)' }),
  'border-y-amber-950': () => ({ borderBlockColor: 'var(--color-amber-950)' }),
  'border-y-yellow-50': () => ({ borderBlockColor: 'var(--color-yellow-50)' }),
  'border-y-yellow-100': () => ({ borderBlockColor: 'var(--color-yellow-100)' }),
  'border-y-yellow-200': () => ({ borderBlockColor: 'var(--color-yellow-200)' }),
  'border-y-yellow-300': () => ({ borderBlockColor: 'var(--color-yellow-300)' }),
  'border-y-yellow-400': () => ({ borderBlockColor: 'var(--color-yellow-400)' }),
  'border-y-yellow-500': () => ({ borderBlockColor: 'var(--color-yellow-500)' }),
  'border-y-yellow-600': () => ({ borderBlockColor: 'var(--color-yellow-600)' }),
  'border-y-yellow-700': () => ({ borderBlockColor: 'var(--color-yellow-700)' }),
  'border-y-yellow-800': () => ({ borderBlockColor: 'var(--color-yellow-800)' }),
  'border-y-yellow-900': () => ({ borderBlockColor: 'var(--color-yellow-900)' }),
  'border-y-yellow-950': () => ({ borderBlockColor: 'var(--color-yellow-950)' }),
  'border-y-lime-50': () => ({ borderBlockColor: 'var(--color-lime-50)' }),
  'border-y-lime-100': () => ({ borderBlockColor: 'var(--color-lime-100)' }),
  'border-y-lime-200': () => ({ borderBlockColor: 'var(--color-lime-200)' }),
  'border-y-lime-300': () => ({ borderBlockColor: 'var(--color-lime-300)' }),
  'border-y-lime-400': () => ({ borderBlockColor: 'var(--color-lime-400)' }),
  'border-y-lime-500': () => ({ borderBlockColor: 'var(--color-lime-500)' }),
  'border-y-lime-600': () => ({ borderBlockColor: 'var(--color-lime-600)' }),
  'border-y-lime-700': () => ({ borderBlockColor: 'var(--color-lime-700)' }),
  'border-y-lime-800': () => ({ borderBlockColor: 'var(--color-lime-800)' }),
  'border-y-lime-900': () => ({ borderBlockColor: 'var(--color-lime-900)' }),
  'border-y-lime-950': () => ({ borderBlockColor: 'var(--color-lime-950)' }),
  'border-y-green-50': () => ({ borderBlockColor: 'var(--color-green-50)' }),
  'border-y-green-100': () => ({ borderBlockColor: 'var(--color-green-100)' }),
  'border-y-green-200': () => ({ borderBlockColor: 'var(--color-green-200)' }),
  'border-y-green-300': () => ({ borderBlockColor: 'var(--color-green-300)' }),
  'border-y-green-400': () => ({ borderBlockColor: 'var(--color-green-400)' }),
  'border-y-green-500': () => ({ borderBlockColor: 'var(--color-green-500)' }),
  'border-y-green-600': () => ({ borderBlockColor: 'var(--color-green-600)' }),
  'border-y-green-700': () => ({ borderBlockColor: 'var(--color-green-700)' }),
  'border-y-green-800': () => ({ borderBlockColor: 'var(--color-green-800)' }),
  'border-y-green-900': () => ({ borderBlockColor: 'var(--color-green-900)' }),
  'border-y-green-950': () => ({ borderBlockColor: 'var(--color-green-950)' }),
  'border-y-emerald-50': () => ({ borderBlockColor: 'var(--color-emerald-50)' }),
  'border-y-emerald-100': () => ({ borderBlockColor: 'var(--color-emerald-100)' }),
  'border-y-emerald-200': () => ({ borderBlockColor: 'var(--color-emerald-200)' }),
  'border-y-emerald-300': () => ({ borderBlockColor: 'var(--color-emerald-300)' }),
  'border-y-emerald-400': () => ({ borderBlockColor: 'var(--color-emerald-400)' }),
  'border-y-emerald-500': () => ({ borderBlockColor: 'var(--color-emerald-500)' }),
  'border-y-emerald-600': () => ({ borderBlockColor: 'var(--color-emerald-600)' }),
  'border-y-emerald-700': () => ({ borderBlockColor: 'var(--color-emerald-700)' }),
  'border-y-emerald-800': () => ({ borderBlockColor: 'var(--color-emerald-800)' }),
  'border-y-emerald-900': () => ({ borderBlockColor: 'var(--color-emerald-900)' }),
  'border-y-emerald-950': () => ({ borderBlockColor: 'var(--color-emerald-950)' }),
  'border-y-teal-50': () => ({ borderBlockColor: 'var(--color-teal-50)' }),
  'border-y-teal-100': () => ({ borderBlockColor: 'var(--color-teal-100)' }),
  'border-y-teal-200': () => ({ borderBlockColor: 'var(--color-teal-200)' }),
  'border-y-teal-300': () => ({ borderBlockColor: 'var(--color-teal-300)' }),
  'border-y-teal-400': () => ({ borderBlockColor: 'var(--color-teal-400)' }),
  'border-y-teal-500': () => ({ borderBlockColor: 'var(--color-teal-500)' }),
  'border-y-teal-600': () => ({ borderBlockColor: 'var(--color-teal-600)' }),
  'border-y-teal-700': () => ({ borderBlockColor: 'var(--color-teal-700)' }),
  'border-y-teal-800': () => ({ borderBlockColor: 'var(--color-teal-800)' }),
  'border-y-teal-900': () => ({ borderBlockColor: 'var(--color-teal-900)' }),
  'border-y-teal-950': () => ({ borderBlockColor: 'var(--color-teal-950)' }),
  'border-y-cyan-50': () => ({ borderBlockColor: 'var(--color-cyan-50)' }),
  'border-y-cyan-100': () => ({ borderBlockColor: 'var(--color-cyan-100)' }),
  'border-y-cyan-200': () => ({ borderBlockColor: 'var(--color-cyan-200)' }),
  'border-y-cyan-300': () => ({ borderBlockColor: 'var(--color-cyan-300)' }),
  'border-y-cyan-400': () => ({ borderBlockColor: 'var(--color-cyan-400)' }),
  'border-y-cyan-500': () => ({ borderBlockColor: 'var(--color-cyan-500)' }),
  'border-y-cyan-600': () => ({ borderBlockColor: 'var(--color-cyan-600)' }),
  'border-y-cyan-700': () => ({ borderBlockColor: 'var(--color-cyan-700)' }),
  'border-y-cyan-800': () => ({ borderBlockColor: 'var(--color-cyan-800)' }),
  'border-y-cyan-900': () => ({ borderBlockColor: 'var(--color-cyan-900)' }),
  'border-y-cyan-950': () => ({ borderBlockColor: 'var(--color-cyan-950)' }),
  'border-y-sky-50': () => ({ borderBlockColor: 'var(--color-sky-50)' }),
  'border-y-sky-100': () => ({ borderBlockColor: 'var(--color-sky-100)' }),
  'border-y-sky-200': () => ({ borderBlockColor: 'var(--color-sky-200)' }),
  'border-y-sky-300': () => ({ borderBlockColor: 'var(--color-sky-300)' }),
  'border-y-sky-400': () => ({ borderBlockColor: 'var(--color-sky-400)' }),
  'border-y-sky-500': () => ({ borderBlockColor: 'var(--color-sky-500)' }),
  'border-y-sky-600': () => ({ borderBlockColor: 'var(--color-sky-600)' }),
  'border-y-sky-700': () => ({ borderBlockColor: 'var(--color-sky-700)' }),
  'border-y-sky-800': () => ({ borderBlockColor: 'var(--color-sky-800)' }),
  'border-y-sky-900': () => ({ borderBlockColor: 'var(--color-sky-900)' }),
  'border-y-sky-950': () => ({ borderBlockColor: 'var(--color-sky-950)' }),
  'border-y-blue-50': () => ({ borderBlockColor: 'var(--color-blue-50)' }),
  'border-y-blue-100': () => ({ borderBlockColor: 'var(--color-blue-100)' }),
  'border-y-blue-200': () => ({ borderBlockColor: 'var(--color-blue-200)' }),
  'border-y-blue-300': () => ({ borderBlockColor: 'var(--color-blue-300)' }),
  'border-y-blue-400': () => ({ borderBlockColor: 'var(--color-blue-400)' }),
  'border-y-blue-500': () => ({ borderBlockColor: 'var(--color-blue-500)' }),
  'border-y-blue-600': () => ({ borderBlockColor: 'var(--color-blue-600)' }),
  'border-y-blue-700': () => ({ borderBlockColor: 'var(--color-blue-700)' }),
  'border-y-blue-800': () => ({ borderBlockColor: 'var(--color-blue-800)' }),
  'border-y-blue-900': () => ({ borderBlockColor: 'var(--color-blue-900)' }),
  'border-y-blue-950': () => ({ borderBlockColor: 'var(--color-blue-950)' }),
  'border-y-indigo-50': () => ({ borderBlockColor: 'var(--color-indigo-50)' }),
  'border-y-indigo-100': () => ({ borderBlockColor: 'var(--color-indigo-100)' }),
  'border-y-indigo-200': () => ({ borderBlockColor: 'var(--color-indigo-200)' }),
  'border-y-indigo-300': () => ({ borderBlockColor: 'var(--color-indigo-300)' }),
  'border-y-indigo-400': () => ({ borderBlockColor: 'var(--color-indigo-400)' }),
  'border-y-indigo-500': () => ({ borderBlockColor: 'var(--color-indigo-500)' }),
  'border-y-indigo-600': () => ({ borderBlockColor: 'var(--color-indigo-600)' }),
  'border-y-indigo-700': () => ({ borderBlockColor: 'var(--color-indigo-700)' }),
  'border-y-indigo-800': () => ({ borderBlockColor: 'var(--color-indigo-800)' }),
  'border-y-indigo-900': () => ({ borderBlockColor: 'var(--color-indigo-900)' }),
  'border-y-indigo-950': () => ({ borderBlockColor: 'var(--color-indigo-950)' }),
  'border-y-violet-50': () => ({ borderBlockColor: 'var(--color-violet-50)' }),
  'border-y-violet-100': () => ({ borderBlockColor: 'var(--color-violet-100)' }),
  'border-y-violet-200': () => ({ borderBlockColor: 'var(--color-violet-200)' }),
  'border-y-violet-300': () => ({ borderBlockColor: 'var(--color-violet-300)' }),
  'border-y-violet-400': () => ({ borderBlockColor: 'var(--color-violet-400)' }),
  'border-y-violet-500': () => ({ borderBlockColor: 'var(--color-violet-500)' }),
  'border-y-violet-600': () => ({ borderBlockColor: 'var(--color-violet-600)' }),
  'border-y-violet-700': () => ({ borderBlockColor: 'var(--color-violet-700)' }),
  'border-y-violet-800': () => ({ borderBlockColor: 'var(--color-violet-800)' }),
  'border-y-violet-900': () => ({ borderBlockColor: 'var(--color-violet-900)' }),
  'border-y-violet-950': () => ({ borderBlockColor: 'var(--color-violet-950)' }),
  'border-y-purple-50': () => ({ borderBlockColor: 'var(--color-purple-50)' }),
  'border-y-purple-100': () => ({ borderBlockColor: 'var(--color-purple-100)' }),
  'border-y-purple-200': () => ({ borderBlockColor: 'var(--color-purple-200)' }),
  'border-y-purple-300': () => ({ borderBlockColor: 'var(--color-purple-300)' }),
  'border-y-purple-400': () => ({ borderBlockColor: 'var(--color-purple-400)' }),
  'border-y-purple-500': () => ({ borderBlockColor: 'var(--color-purple-500)' }),
  'border-y-purple-600': () => ({ borderBlockColor: 'var(--color-purple-600)' }),
  'border-y-purple-700': () => ({ borderBlockColor: 'var(--color-purple-700)' }),
  'border-y-purple-800': () => ({ borderBlockColor: 'var(--color-purple-800)' }),
  'border-y-purple-900': () => ({ borderBlockColor: 'var(--color-purple-900)' }),
  'border-y-purple-950': () => ({ borderBlockColor: 'var(--color-purple-950)' }),
  'border-y-fuchsia-50': () => ({ borderBlockColor: 'var(--color-fuchsia-50)' }),
  'border-y-fuchsia-100': () => ({ borderBlockColor: 'var(--color-fuchsia-100)' }),
  'border-y-fuchsia-200': () => ({ borderBlockColor: 'var(--color-fuchsia-200)' }),
  'border-y-fuchsia-300': () => ({ borderBlockColor: 'var(--color-fuchsia-300)' }),
  'border-y-fuchsia-400': () => ({ borderBlockColor: 'var(--color-fuchsia-400)' }),
  'border-y-fuchsia-500': () => ({ borderBlockColor: 'var(--color-fuchsia-500)' }),
  'border-y-fuchsia-600': () => ({ borderBlockColor: 'var(--color-fuchsia-600)' }),
  'border-y-fuchsia-700': () => ({ borderBlockColor: 'var(--color-fuchsia-700)' }),
  'border-y-fuchsia-800': () => ({ borderBlockColor: 'var(--color-fuchsia-800)' }),
  'border-y-fuchsia-900': () => ({ borderBlockColor: 'var(--color-fuchsia-900)' }),
  'border-y-fuchsia-950': () => ({ borderBlockColor: 'var(--color-fuchsia-950)' }),
  'border-y-pink-50': () => ({ borderBlockColor: 'var(--color-pink-50)' }),
  'border-y-pink-100': () => ({ borderBlockColor: 'var(--color-pink-100)' }),
  'border-y-pink-200': () => ({ borderBlockColor: 'var(--color-pink-200)' }),
  'border-y-pink-300': () => ({ borderBlockColor: 'var(--color-pink-300)' }),
  'border-y-pink-400': () => ({ borderBlockColor: 'var(--color-pink-400)' }),
  'border-y-pink-500': () => ({ borderBlockColor: 'var(--color-pink-500)' }),
  'border-y-pink-600': () => ({ borderBlockColor: 'var(--color-pink-600)' }),
  'border-y-pink-700': () => ({ borderBlockColor: 'var(--color-pink-700)' }),
  'border-y-pink-800': () => ({ borderBlockColor: 'var(--color-pink-800)' }),
  'border-y-pink-900': () => ({ borderBlockColor: 'var(--color-pink-900)' }),
  'border-y-pink-950': () => ({ borderBlockColor: 'var(--color-pink-950)' }),
  'border-y-rose-50': () => ({ borderBlockColor: 'var(--color-rose-50)' }),
  'border-y-rose-100': () => ({ borderBlockColor: 'var(--color-rose-100)' }),
  'border-y-rose-200': () => ({ borderBlockColor: 'var(--color-rose-200)' }),
  'border-y-rose-300': () => ({ borderBlockColor: 'var(--color-rose-300)' }),
  'border-y-rose-400': () => ({ borderBlockColor: 'var(--color-rose-400)' }),
  'border-y-rose-500': () => ({ borderBlockColor: 'var(--color-rose-500)' }),
  'border-y-rose-600': () => ({ borderBlockColor: 'var(--color-rose-600)' }),
  'border-y-rose-700': () => ({ borderBlockColor: 'var(--color-rose-700)' }),
  'border-y-rose-800': () => ({ borderBlockColor: 'var(--color-rose-800)' }),
  'border-y-rose-900': () => ({ borderBlockColor: 'var(--color-rose-900)' }),
  'border-y-rose-950': () => ({ borderBlockColor: 'var(--color-rose-950)' }),
  'border-y-slate-50': () => ({ borderBlockColor: 'var(--color-slate-50)' }),
  'border-y-slate-100': () => ({ borderBlockColor: 'var(--color-slate-100)' }),
  'border-y-slate-200': () => ({ borderBlockColor: 'var(--color-slate-200)' }),
  'border-y-slate-300': () => ({ borderBlockColor: 'var(--color-slate-300)' }),
  'border-y-slate-400': () => ({ borderBlockColor: 'var(--color-slate-400)' }),
  'border-y-slate-500': () => ({ borderBlockColor: 'var(--color-slate-500)' }),
  'border-y-slate-600': () => ({ borderBlockColor: 'var(--color-slate-600)' }),
  'border-y-slate-700': () => ({ borderBlockColor: 'var(--color-slate-700)' }),
  'border-y-slate-800': () => ({ borderBlockColor: 'var(--color-slate-800)' }),
  'border-y-slate-900': () => ({ borderBlockColor: 'var(--color-slate-900)' }),
  'border-y-slate-950': () => ({ borderBlockColor: 'var(--color-slate-950)' }),
  'border-y-gray-50': () => ({ borderBlockColor: 'var(--color-gray-50)' }),
  'border-y-gray-100': () => ({ borderBlockColor: 'var(--color-gray-100)' }),
  'border-y-gray-200': () => ({ borderBlockColor: 'var(--color-gray-200)' }),
  'border-y-gray-300': () => ({ borderBlockColor: 'var(--color-gray-300)' }),
  'border-y-gray-400': () => ({ borderBlockColor: 'var(--color-gray-400)' }),
  'border-y-gray-500': () => ({ borderBlockColor: 'var(--color-gray-500)' }),
  'border-y-gray-600': () => ({ borderBlockColor: 'var(--color-gray-600)' }),
  'border-y-gray-700': () => ({ borderBlockColor: 'var(--color-gray-700)' }),
  'border-y-gray-800': () => ({ borderBlockColor: 'var(--color-gray-800)' }),
  'border-y-gray-900': () => ({ borderBlockColor: 'var(--color-gray-900)' }),
  'border-y-gray-950': () => ({ borderBlockColor: 'var(--color-gray-950)' }),
  'border-y-zinc-50': () => ({ borderBlockColor: 'var(--color-zinc-50)' }),
  'border-y-zinc-100': () => ({ borderBlockColor: 'var(--color-zinc-100)' }),
  'border-y-zinc-200': () => ({ borderBlockColor: 'var(--color-zinc-200)' }),
  'border-y-zinc-300': () => ({ borderBlockColor: 'var(--color-zinc-300)' }),
  'border-y-zinc-400': () => ({ borderBlockColor: 'var(--color-zinc-400)' }),
  'border-y-zinc-500': () => ({ borderBlockColor: 'var(--color-zinc-500)' }),
  'border-y-zinc-600': () => ({ borderBlockColor: 'var(--color-zinc-600)' }),
  'border-y-zinc-700': () => ({ borderBlockColor: 'var(--color-zinc-700)' }),
  'border-y-zinc-800': () => ({ borderBlockColor: 'var(--color-zinc-800)' }),
  'border-y-zinc-900': () => ({ borderBlockColor: 'var(--color-zinc-900)' }),
  'border-y-zinc-950': () => ({ borderBlockColor: 'var(--color-zinc-950)' }),
  'border-y-neutral-50': () => ({ borderBlockColor: 'var(--color-neutral-50)' }),
  'border-y-neutral-100': () => ({ borderBlockColor: 'var(--color-neutral-100)' }),
  'border-y-neutral-200': () => ({ borderBlockColor: 'var(--color-neutral-200)' }),
  'border-y-neutral-300': () => ({ borderBlockColor: 'var(--color-neutral-300)' }),
  'border-y-neutral-400': () => ({ borderBlockColor: 'var(--color-neutral-400)' }),
  'border-y-neutral-500': () => ({ borderBlockColor: 'var(--color-neutral-500)' }),
  'border-y-neutral-600': () => ({ borderBlockColor: 'var(--color-neutral-600)' }),
  'border-y-neutral-700': () => ({ borderBlockColor: 'var(--color-neutral-700)' }),
  'border-y-neutral-800': () => ({ borderBlockColor: 'var(--color-neutral-800)' }),
  'border-y-neutral-900': () => ({ borderBlockColor: 'var(--color-neutral-900)' }),
  'border-y-neutral-950': () => ({ borderBlockColor: 'var(--color-neutral-950)' }),
  'border-y-stone-50': () => ({ borderBlockColor: 'var(--color-stone-50)' }),
  'border-y-stone-100': () => ({ borderBlockColor: 'var(--color-stone-100)' }),
  'border-y-stone-200': () => ({ borderBlockColor: 'var(--color-stone-200)' }),
  'border-y-stone-300': () => ({ borderBlockColor: 'var(--color-stone-300)' }),
  'border-y-stone-400': () => ({ borderBlockColor: 'var(--color-stone-400)' }),
  'border-y-stone-500': () => ({ borderBlockColor: 'var(--color-stone-500)' }),
  'border-y-stone-600': () => ({ borderBlockColor: 'var(--color-stone-600)' }),
  'border-y-stone-700': () => ({ borderBlockColor: 'var(--color-stone-700)' }),
  'border-y-stone-800': () => ({ borderBlockColor: 'var(--color-stone-800)' }),
  'border-y-stone-900': () => ({ borderBlockColor: 'var(--color-stone-900)' }),
  'border-y-stone-950': () => ({ borderBlockColor: 'var(--color-stone-950)' }),
  'border-y-(<custom-property>)': ([value]) => ({ borderBlockColor: `var(${value})` }),
  'border-y-[<value>]': ([value]) => ({ borderBlockColor: `"${value}"` }),
  'border-s-inherit': () => ({ borderInlineStartColor: 'inherit' }),
  'border-s-current': () => ({ borderInlineStartColor: 'currentColor' }),
  'border-s-transparent': () => ({ borderInlineStartColor: 'transparent' }),
  'border-s-black': () => ({ borderInlineStartColor: 'var(--color-black)' }),
  'border-s-white': () => ({ borderInlineStartColor: 'var(--color-white)' }),
  'border-s-red-50': () => ({ borderInlineStartColor: 'var(--color-red-50)' }),
  'border-s-red-100': () => ({ borderInlineStartColor: 'var(--color-red-100)' }),
  'border-s-red-200': () => ({ borderInlineStartColor: 'var(--color-red-200)' }),
  'border-s-red-300': () => ({ borderInlineStartColor: 'var(--color-red-300)' }),
  'border-s-red-400': () => ({ borderInlineStartColor: 'var(--color-red-400)' }),
  'border-s-red-500': () => ({ borderInlineStartColor: 'var(--color-red-500)' }),
  'border-s-red-600': () => ({ borderInlineStartColor: 'var(--color-red-600)' }),
  'border-s-red-700': () => ({ borderInlineStartColor: 'var(--color-red-700)' }),
  'border-s-red-800': () => ({ borderInlineStartColor: 'var(--color-red-800)' }),
  'border-s-red-900': () => ({ borderInlineStartColor: 'var(--color-red-900)' }),
  'border-s-red-950': () => ({ borderInlineStartColor: 'var(--color-red-950)' }),
  'border-s-orange-50': () => ({ borderInlineStartColor: 'var(--color-orange-50)' }),
  'border-s-orange-100': () => ({ borderInlineStartColor: 'var(--color-orange-100)' }),
  'border-s-orange-200': () => ({ borderInlineStartColor: 'var(--color-orange-200)' }),
  'border-s-orange-300': () => ({ borderInlineStartColor: 'var(--color-orange-300)' }),
  'border-s-orange-400': () => ({ borderInlineStartColor: 'var(--color-orange-400)' }),
  'border-s-orange-500': () => ({ borderInlineStartColor: 'var(--color-orange-500)' }),
  'border-s-orange-600': () => ({ borderInlineStartColor: 'var(--color-orange-600)' }),
  'border-s-orange-700': () => ({ borderInlineStartColor: 'var(--color-orange-700)' }),
  'border-s-orange-800': () => ({ borderInlineStartColor: 'var(--color-orange-800)' }),
  'border-s-orange-900': () => ({ borderInlineStartColor: 'var(--color-orange-900)' }),
  'border-s-orange-950': () => ({ borderInlineStartColor: 'var(--color-orange-950)' }),
  'border-s-amber-50': () => ({ borderInlineStartColor: 'var(--color-amber-50)' }),
  'border-s-amber-100': () => ({ borderInlineStartColor: 'var(--color-amber-100)' }),
  'border-s-amber-200': () => ({ borderInlineStartColor: 'var(--color-amber-200)' }),
  'border-s-amber-300': () => ({ borderInlineStartColor: 'var(--color-amber-300)' }),
  'border-s-amber-400': () => ({ borderInlineStartColor: 'var(--color-amber-400)' }),
  'border-s-amber-500': () => ({ borderInlineStartColor: 'var(--color-amber-500)' }),
  'border-s-amber-600': () => ({ borderInlineStartColor: 'var(--color-amber-600)' }),
  'border-s-amber-700': () => ({ borderInlineStartColor: 'var(--color-amber-700)' }),
  'border-s-amber-800': () => ({ borderInlineStartColor: 'var(--color-amber-800)' }),
  'border-s-amber-900': () => ({ borderInlineStartColor: 'var(--color-amber-900)' }),
  'border-s-amber-950': () => ({ borderInlineStartColor: 'var(--color-amber-950)' }),
  'border-s-yellow-50': () => ({ borderInlineStartColor: 'var(--color-yellow-50)' }),
  'border-s-yellow-100': () => ({ borderInlineStartColor: 'var(--color-yellow-100)' }),
  'border-s-yellow-200': () => ({ borderInlineStartColor: 'var(--color-yellow-200)' }),
  'border-s-yellow-300': () => ({ borderInlineStartColor: 'var(--color-yellow-300)' }),
  'border-s-yellow-400': () => ({ borderInlineStartColor: 'var(--color-yellow-400)' }),
  'border-s-yellow-500': () => ({ borderInlineStartColor: 'var(--color-yellow-500)' }),
  'border-s-yellow-600': () => ({ borderInlineStartColor: 'var(--color-yellow-600)' }),
  'border-s-yellow-700': () => ({ borderInlineStartColor: 'var(--color-yellow-700)' }),
  'border-s-yellow-800': () => ({ borderInlineStartColor: 'var(--color-yellow-800)' }),
  'border-s-yellow-900': () => ({ borderInlineStartColor: 'var(--color-yellow-900)' }),
  'border-s-yellow-950': () => ({ borderInlineStartColor: 'var(--color-yellow-950)' }),
  'border-s-lime-50': () => ({ borderInlineStartColor: 'var(--color-lime-50)' }),
  'border-s-lime-100': () => ({ borderInlineStartColor: 'var(--color-lime-100)' }),
  'border-s-lime-200': () => ({ borderInlineStartColor: 'var(--color-lime-200)' }),
  'border-s-lime-300': () => ({ borderInlineStartColor: 'var(--color-lime-300)' }),
  'border-s-lime-400': () => ({ borderInlineStartColor: 'var(--color-lime-400)' }),
  'border-s-lime-500': () => ({ borderInlineStartColor: 'var(--color-lime-500)' }),
  'border-s-lime-600': () => ({ borderInlineStartColor: 'var(--color-lime-600)' }),
  'border-s-lime-700': () => ({ borderInlineStartColor: 'var(--color-lime-700)' }),
  'border-s-lime-800': () => ({ borderInlineStartColor: 'var(--color-lime-800)' }),
  'border-s-lime-900': () => ({ borderInlineStartColor: 'var(--color-lime-900)' }),
  'border-s-lime-950': () => ({ borderInlineStartColor: 'var(--color-lime-950)' }),
  'border-s-green-50': () => ({ borderInlineStartColor: 'var(--color-green-50)' }),
  'border-s-green-100': () => ({ borderInlineStartColor: 'var(--color-green-100)' }),
  'border-s-green-200': () => ({ borderInlineStartColor: 'var(--color-green-200)' }),
  'border-s-green-300': () => ({ borderInlineStartColor: 'var(--color-green-300)' }),
  'border-s-green-400': () => ({ borderInlineStartColor: 'var(--color-green-400)' }),
  'border-s-green-500': () => ({ borderInlineStartColor: 'var(--color-green-500)' }),
  'border-s-green-600': () => ({ borderInlineStartColor: 'var(--color-green-600)' }),
  'border-s-green-700': () => ({ borderInlineStartColor: 'var(--color-green-700)' }),
  'border-s-green-800': () => ({ borderInlineStartColor: 'var(--color-green-800)' }),
  'border-s-green-900': () => ({ borderInlineStartColor: 'var(--color-green-900)' }),
  'border-s-green-950': () => ({ borderInlineStartColor: 'var(--color-green-950)' }),
  'border-s-emerald-50': () => ({ borderInlineStartColor: 'var(--color-emerald-50)' }),
  'border-s-emerald-100': () => ({ borderInlineStartColor: 'var(--color-emerald-100)' }),
  'border-s-emerald-200': () => ({ borderInlineStartColor: 'var(--color-emerald-200)' }),
  'border-s-emerald-300': () => ({ borderInlineStartColor: 'var(--color-emerald-300)' }),
  'border-s-emerald-400': () => ({ borderInlineStartColor: 'var(--color-emerald-400)' }),
  'border-s-emerald-500': () => ({ borderInlineStartColor: 'var(--color-emerald-500)' }),
  'border-s-emerald-600': () => ({ borderInlineStartColor: 'var(--color-emerald-600)' }),
  'border-s-emerald-700': () => ({ borderInlineStartColor: 'var(--color-emerald-700)' }),
  'border-s-emerald-800': () => ({ borderInlineStartColor: 'var(--color-emerald-800)' }),
  'border-s-emerald-900': () => ({ borderInlineStartColor: 'var(--color-emerald-900)' }),
  'border-s-emerald-950': () => ({ borderInlineStartColor: 'var(--color-emerald-950)' }),
  'border-s-teal-50': () => ({ borderInlineStartColor: 'var(--color-teal-50)' }),
  'border-s-teal-100': () => ({ borderInlineStartColor: 'var(--color-teal-100)' }),
  'border-s-teal-200': () => ({ borderInlineStartColor: 'var(--color-teal-200)' }),
  'border-s-teal-300': () => ({ borderInlineStartColor: 'var(--color-teal-300)' }),
  'border-s-teal-400': () => ({ borderInlineStartColor: 'var(--color-teal-400)' }),
  'border-s-teal-500': () => ({ borderInlineStartColor: 'var(--color-teal-500)' }),
  'border-s-teal-600': () => ({ borderInlineStartColor: 'var(--color-teal-600)' }),
  'border-s-teal-700': () => ({ borderInlineStartColor: 'var(--color-teal-700)' }),
  'border-s-teal-800': () => ({ borderInlineStartColor: 'var(--color-teal-800)' }),
  'border-s-teal-900': () => ({ borderInlineStartColor: 'var(--color-teal-900)' }),
  'border-s-teal-950': () => ({ borderInlineStartColor: 'var(--color-teal-950)' }),
  'border-s-cyan-50': () => ({ borderInlineStartColor: 'var(--color-cyan-50)' }),
  'border-s-cyan-100': () => ({ borderInlineStartColor: 'var(--color-cyan-100)' }),
  'border-s-cyan-200': () => ({ borderInlineStartColor: 'var(--color-cyan-200)' }),
  'border-s-cyan-300': () => ({ borderInlineStartColor: 'var(--color-cyan-300)' }),
  'border-s-cyan-400': () => ({ borderInlineStartColor: 'var(--color-cyan-400)' }),
  'border-s-cyan-500': () => ({ borderInlineStartColor: 'var(--color-cyan-500)' }),
  'border-s-cyan-600': () => ({ borderInlineStartColor: 'var(--color-cyan-600)' }),
  'border-s-cyan-700': () => ({ borderInlineStartColor: 'var(--color-cyan-700)' }),
  'border-s-cyan-800': () => ({ borderInlineStartColor: 'var(--color-cyan-800)' }),
  'border-s-cyan-900': () => ({ borderInlineStartColor: 'var(--color-cyan-900)' }),
  'border-s-cyan-950': () => ({ borderInlineStartColor: 'var(--color-cyan-950)' }),
  'border-s-sky-50': () => ({ borderInlineStartColor: 'var(--color-sky-50)' }),
  'border-s-sky-100': () => ({ borderInlineStartColor: 'var(--color-sky-100)' }),
  'border-s-sky-200': () => ({ borderInlineStartColor: 'var(--color-sky-200)' }),
  'border-s-sky-300': () => ({ borderInlineStartColor: 'var(--color-sky-300)' }),
  'border-s-sky-400': () => ({ borderInlineStartColor: 'var(--color-sky-400)' }),
  'border-s-sky-500': () => ({ borderInlineStartColor: 'var(--color-sky-500)' }),
  'border-s-sky-600': () => ({ borderInlineStartColor: 'var(--color-sky-600)' }),
  'border-s-sky-700': () => ({ borderInlineStartColor: 'var(--color-sky-700)' }),
  'border-s-sky-800': () => ({ borderInlineStartColor: 'var(--color-sky-800)' }),
  'border-s-sky-900': () => ({ borderInlineStartColor: 'var(--color-sky-900)' }),
  'border-s-sky-950': () => ({ borderInlineStartColor: 'var(--color-sky-950)' }),
  'border-s-blue-50': () => ({ borderInlineStartColor: 'var(--color-blue-50)' }),
  'border-s-blue-100': () => ({ borderInlineStartColor: 'var(--color-blue-100)' }),
  'border-s-blue-200': () => ({ borderInlineStartColor: 'var(--color-blue-200)' }),
  'border-s-blue-300': () => ({ borderInlineStartColor: 'var(--color-blue-300)' }),
  'border-s-blue-400': () => ({ borderInlineStartColor: 'var(--color-blue-400)' }),
  'border-s-blue-500': () => ({ borderInlineStartColor: 'var(--color-blue-500)' }),
  'border-s-blue-600': () => ({ borderInlineStartColor: 'var(--color-blue-600)' }),
  'border-s-blue-700': () => ({ borderInlineStartColor: 'var(--color-blue-700)' }),
  'border-s-blue-800': () => ({ borderInlineStartColor: 'var(--color-blue-800)' }),
  'border-s-blue-900': () => ({ borderInlineStartColor: 'var(--color-blue-900)' }),
  'border-s-blue-950': () => ({ borderInlineStartColor: 'var(--color-blue-950)' }),
  'border-s-indigo-50': () => ({ borderInlineStartColor: 'var(--color-indigo-50)' }),
  'border-s-indigo-100': () => ({ borderInlineStartColor: 'var(--color-indigo-100)' }),
  'border-s-indigo-200': () => ({ borderInlineStartColor: 'var(--color-indigo-200)' }),
  'border-s-indigo-300': () => ({ borderInlineStartColor: 'var(--color-indigo-300)' }),
  'border-s-indigo-400': () => ({ borderInlineStartColor: 'var(--color-indigo-400)' }),
  'border-s-indigo-500': () => ({ borderInlineStartColor: 'var(--color-indigo-500)' }),
  'border-s-indigo-600': () => ({ borderInlineStartColor: 'var(--color-indigo-600)' }),
  'border-s-indigo-700': () => ({ borderInlineStartColor: 'var(--color-indigo-700)' }),
  'border-s-indigo-800': () => ({ borderInlineStartColor: 'var(--color-indigo-800)' }),
  'border-s-indigo-900': () => ({ borderInlineStartColor: 'var(--color-indigo-900)' }),
  'border-s-indigo-950': () => ({ borderInlineStartColor: 'var(--color-indigo-950)' }),
  'border-s-violet-50': () => ({ borderInlineStartColor: 'var(--color-violet-50)' }),
  'border-s-violet-100': () => ({ borderInlineStartColor: 'var(--color-violet-100)' }),
  'border-s-violet-200': () => ({ borderInlineStartColor: 'var(--color-violet-200)' }),
  'border-s-violet-300': () => ({ borderInlineStartColor: 'var(--color-violet-300)' }),
  'border-s-violet-400': () => ({ borderInlineStartColor: 'var(--color-violet-400)' }),
  'border-s-violet-500': () => ({ borderInlineStartColor: 'var(--color-violet-500)' }),
  'border-s-violet-600': () => ({ borderInlineStartColor: 'var(--color-violet-600)' }),
  'border-s-violet-700': () => ({ borderInlineStartColor: 'var(--color-violet-700)' }),
  'border-s-violet-800': () => ({ borderInlineStartColor: 'var(--color-violet-800)' }),
  'border-s-violet-900': () => ({ borderInlineStartColor: 'var(--color-violet-900)' }),
  'border-s-violet-950': () => ({ borderInlineStartColor: 'var(--color-violet-950)' }),
  'border-s-purple-50': () => ({ borderInlineStartColor: 'var(--color-purple-50)' }),
  'border-s-purple-100': () => ({ borderInlineStartColor: 'var(--color-purple-100)' }),
  'border-s-purple-200': () => ({ borderInlineStartColor: 'var(--color-purple-200)' }),
  'border-s-purple-300': () => ({ borderInlineStartColor: 'var(--color-purple-300)' }),
  'border-s-purple-400': () => ({ borderInlineStartColor: 'var(--color-purple-400)' }),
  'border-s-purple-500': () => ({ borderInlineStartColor: 'var(--color-purple-500)' }),
  'border-s-purple-600': () => ({ borderInlineStartColor: 'var(--color-purple-600)' }),
  'border-s-purple-700': () => ({ borderInlineStartColor: 'var(--color-purple-700)' }),
  'border-s-purple-800': () => ({ borderInlineStartColor: 'var(--color-purple-800)' }),
  'border-s-purple-900': () => ({ borderInlineStartColor: 'var(--color-purple-900)' }),
  'border-s-purple-950': () => ({ borderInlineStartColor: 'var(--color-purple-950)' }),
  'border-s-fuchsia-50': () => ({ borderInlineStartColor: 'var(--color-fuchsia-50)' }),
  'border-s-fuchsia-100': () => ({ borderInlineStartColor: 'var(--color-fuchsia-100)' }),
  'border-s-fuchsia-200': () => ({ borderInlineStartColor: 'var(--color-fuchsia-200)' }),
  'border-s-fuchsia-300': () => ({ borderInlineStartColor: 'var(--color-fuchsia-300)' }),
  'border-s-fuchsia-400': () => ({ borderInlineStartColor: 'var(--color-fuchsia-400)' }),
  'border-s-fuchsia-500': () => ({ borderInlineStartColor: 'var(--color-fuchsia-500)' }),
  'border-s-fuchsia-600': () => ({ borderInlineStartColor: 'var(--color-fuchsia-600)' }),
  'border-s-fuchsia-700': () => ({ borderInlineStartColor: 'var(--color-fuchsia-700)' }),
  'border-s-fuchsia-800': () => ({ borderInlineStartColor: 'var(--color-fuchsia-800)' }),
  'border-s-fuchsia-900': () => ({ borderInlineStartColor: 'var(--color-fuchsia-900)' }),
  'border-s-fuchsia-950': () => ({ borderInlineStartColor: 'var(--color-fuchsia-950)' }),
  'border-s-pink-50': () => ({ borderInlineStartColor: 'var(--color-pink-50)' }),
  'border-s-pink-100': () => ({ borderInlineStartColor: 'var(--color-pink-100)' }),
  'border-s-pink-200': () => ({ borderInlineStartColor: 'var(--color-pink-200)' }),
  'border-s-pink-300': () => ({ borderInlineStartColor: 'var(--color-pink-300)' }),
  'border-s-pink-400': () => ({ borderInlineStartColor: 'var(--color-pink-400)' }),
  'border-s-pink-500': () => ({ borderInlineStartColor: 'var(--color-pink-500)' }),
  'border-s-pink-600': () => ({ borderInlineStartColor: 'var(--color-pink-600)' }),
  'border-s-pink-700': () => ({ borderInlineStartColor: 'var(--color-pink-700)' }),
  'border-s-pink-800': () => ({ borderInlineStartColor: 'var(--color-pink-800)' }),
  'border-s-pink-900': () => ({ borderInlineStartColor: 'var(--color-pink-900)' }),
  'border-s-pink-950': () => ({ borderInlineStartColor: 'var(--color-pink-950)' }),
  'border-s-rose-50': () => ({ borderInlineStartColor: 'var(--color-rose-50)' }),
  'border-s-rose-100': () => ({ borderInlineStartColor: 'var(--color-rose-100)' }),
  'border-s-rose-200': () => ({ borderInlineStartColor: 'var(--color-rose-200)' }),
  'border-s-rose-300': () => ({ borderInlineStartColor: 'var(--color-rose-300)' }),
  'border-s-rose-400': () => ({ borderInlineStartColor: 'var(--color-rose-400)' }),
  'border-s-rose-500': () => ({ borderInlineStartColor: 'var(--color-rose-500)' }),
  'border-s-rose-600': () => ({ borderInlineStartColor: 'var(--color-rose-600)' }),
  'border-s-rose-700': () => ({ borderInlineStartColor: 'var(--color-rose-700)' }),
  'border-s-rose-800': () => ({ borderInlineStartColor: 'var(--color-rose-800)' }),
  'border-s-rose-900': () => ({ borderInlineStartColor: 'var(--color-rose-900)' }),
  'border-s-rose-950': () => ({ borderInlineStartColor: 'var(--color-rose-950)' }),
  'border-s-slate-50': () => ({ borderInlineStartColor: 'var(--color-slate-50)' }),
  'border-s-slate-100': () => ({ borderInlineStartColor: 'var(--color-slate-100)' }),
  'border-s-slate-200': () => ({ borderInlineStartColor: 'var(--color-slate-200)' }),
  'border-s-slate-300': () => ({ borderInlineStartColor: 'var(--color-slate-300)' }),
  'border-s-slate-400': () => ({ borderInlineStartColor: 'var(--color-slate-400)' }),
  'border-s-slate-500': () => ({ borderInlineStartColor: 'var(--color-slate-500)' }),
  'border-s-slate-600': () => ({ borderInlineStartColor: 'var(--color-slate-600)' }),
  'border-s-slate-700': () => ({ borderInlineStartColor: 'var(--color-slate-700)' }),
  'border-s-slate-800': () => ({ borderInlineStartColor: 'var(--color-slate-800)' }),
  'border-s-slate-900': () => ({ borderInlineStartColor: 'var(--color-slate-900)' }),
  'border-s-slate-950': () => ({ borderInlineStartColor: 'var(--color-slate-950)' }),
  'border-s-gray-50': () => ({ borderInlineStartColor: 'var(--color-gray-50)' }),
  'border-s-gray-100': () => ({ borderInlineStartColor: 'var(--color-gray-100)' }),
  'border-s-gray-200': () => ({ borderInlineStartColor: 'var(--color-gray-200)' }),
  'border-s-gray-300': () => ({ borderInlineStartColor: 'var(--color-gray-300)' }),
  'border-s-gray-400': () => ({ borderInlineStartColor: 'var(--color-gray-400)' }),
  'border-s-gray-500': () => ({ borderInlineStartColor: 'var(--color-gray-500)' }),
  'border-s-gray-600': () => ({ borderInlineStartColor: 'var(--color-gray-600)' }),
  'border-s-gray-700': () => ({ borderInlineStartColor: 'var(--color-gray-700)' }),
  'border-s-gray-800': () => ({ borderInlineStartColor: 'var(--color-gray-800)' }),
  'border-s-gray-900': () => ({ borderInlineStartColor: 'var(--color-gray-900)' }),
  'border-s-gray-950': () => ({ borderInlineStartColor: 'var(--color-gray-950)' }),
  'border-s-zinc-50': () => ({ borderInlineStartColor: 'var(--color-zinc-50)' }),
  'border-s-zinc-100': () => ({ borderInlineStartColor: 'var(--color-zinc-100)' }),
  'border-s-zinc-200': () => ({ borderInlineStartColor: 'var(--color-zinc-200)' }),
  'border-s-zinc-300': () => ({ borderInlineStartColor: 'var(--color-zinc-300)' }),
  'border-s-zinc-400': () => ({ borderInlineStartColor: 'var(--color-zinc-400)' }),
  'border-s-zinc-500': () => ({ borderInlineStartColor: 'var(--color-zinc-500)' }),
  'border-s-zinc-600': () => ({ borderInlineStartColor: 'var(--color-zinc-600)' }),
  'border-s-zinc-700': () => ({ borderInlineStartColor: 'var(--color-zinc-700)' }),
  'border-s-zinc-800': () => ({ borderInlineStartColor: 'var(--color-zinc-800)' }),
  'border-s-zinc-900': () => ({ borderInlineStartColor: 'var(--color-zinc-900)' }),
  'border-s-zinc-950': () => ({ borderInlineStartColor: 'var(--color-zinc-950)' }),
  'border-s-neutral-50': () => ({ borderInlineStartColor: 'var(--color-neutral-50)' }),
  'border-s-neutral-100': () => ({ borderInlineStartColor: 'var(--color-neutral-100)' }),
  'border-s-neutral-200': () => ({ borderInlineStartColor: 'var(--color-neutral-200)' }),
  'border-s-neutral-300': () => ({ borderInlineStartColor: 'var(--color-neutral-300)' }),
  'border-s-neutral-400': () => ({ borderInlineStartColor: 'var(--color-neutral-400)' }),
  'border-s-neutral-500': () => ({ borderInlineStartColor: 'var(--color-neutral-500)' }),
  'border-s-neutral-600': () => ({ borderInlineStartColor: 'var(--color-neutral-600)' }),
  'border-s-neutral-700': () => ({ borderInlineStartColor: 'var(--color-neutral-700)' }),
  'border-s-neutral-800': () => ({ borderInlineStartColor: 'var(--color-neutral-800)' }),
  'border-s-neutral-900': () => ({ borderInlineStartColor: 'var(--color-neutral-900)' }),
  'border-s-neutral-950': () => ({ borderInlineStartColor: 'var(--color-neutral-950)' }),
  'border-s-stone-50': () => ({ borderInlineStartColor: 'var(--color-stone-50)' }),
  'border-s-stone-100': () => ({ borderInlineStartColor: 'var(--color-stone-100)' }),
  'border-s-stone-200': () => ({ borderInlineStartColor: 'var(--color-stone-200)' }),
  'border-s-stone-300': () => ({ borderInlineStartColor: 'var(--color-stone-300)' }),
  'border-s-stone-400': () => ({ borderInlineStartColor: 'var(--color-stone-400)' }),
  'border-s-stone-500': () => ({ borderInlineStartColor: 'var(--color-stone-500)' }),
  'border-s-stone-600': () => ({ borderInlineStartColor: 'var(--color-stone-600)' }),
  'border-s-stone-700': () => ({ borderInlineStartColor: 'var(--color-stone-700)' }),
  'border-s-stone-800': () => ({ borderInlineStartColor: 'var(--color-stone-800)' }),
  'border-s-stone-900': () => ({ borderInlineStartColor: 'var(--color-stone-900)' }),
  'border-s-stone-950': () => ({ borderInlineStartColor: 'var(--color-stone-950)' }),
  'border-s-(<custom-property>)': ([value]) => ({ borderInlineStartColor: `var(${value})` }),
  'border-s-[<value>]': ([value]) => ({ borderInlineStartColor: `"${value}"` }),
  'border-e-inherit': () => ({ borderInlineEndColor: 'inherit' }),
  'border-e-current': () => ({ borderInlineEndColor: 'currentColor' }),
  'border-e-transparent': () => ({ borderInlineEndColor: 'transparent' }),
  'border-e-black': () => ({ borderInlineEndColor: 'var(--color-black)' }),
  'border-e-white': () => ({ borderInlineEndColor: 'var(--color-white)' }),
  'border-e-red-50': () => ({ borderInlineEndColor: 'var(--color-red-50)' }),
  'border-e-red-100': () => ({ borderInlineEndColor: 'var(--color-red-100)' }),
  'border-e-red-200': () => ({ borderInlineEndColor: 'var(--color-red-200)' }),
  'border-e-red-300': () => ({ borderInlineEndColor: 'var(--color-red-300)' }),
  'border-e-red-400': () => ({ borderInlineEndColor: 'var(--color-red-400)' }),
  'border-e-red-500': () => ({ borderInlineEndColor: 'var(--color-red-500)' }),
  'border-e-red-600': () => ({ borderInlineEndColor: 'var(--color-red-600)' }),
  'border-e-red-700': () => ({ borderInlineEndColor: 'var(--color-red-700)' }),
  'border-e-red-800': () => ({ borderInlineEndColor: 'var(--color-red-800)' }),
  'border-e-red-900': () => ({ borderInlineEndColor: 'var(--color-red-900)' }),
  'border-e-red-950': () => ({ borderInlineEndColor: 'var(--color-red-950)' }),
  'border-e-orange-50': () => ({ borderInlineEndColor: 'var(--color-orange-50)' }),
  'border-e-orange-100': () => ({ borderInlineEndColor: 'var(--color-orange-100)' }),
  'border-e-orange-200': () => ({ borderInlineEndColor: 'var(--color-orange-200)' }),
  'border-e-orange-300': () => ({ borderInlineEndColor: 'var(--color-orange-300)' }),
  'border-e-orange-400': () => ({ borderInlineEndColor: 'var(--color-orange-400)' }),
  'border-e-orange-500': () => ({ borderInlineEndColor: 'var(--color-orange-500)' }),
  'border-e-orange-600': () => ({ borderInlineEndColor: 'var(--color-orange-600)' }),
  'border-e-orange-700': () => ({ borderInlineEndColor: 'var(--color-orange-700)' }),
  'border-e-orange-800': () => ({ borderInlineEndColor: 'var(--color-orange-800)' }),
  'border-e-orange-900': () => ({ borderInlineEndColor: 'var(--color-orange-900)' }),
  'border-e-orange-950': () => ({ borderInlineEndColor: 'var(--color-orange-950)' }),
  'border-e-amber-50': () => ({ borderInlineEndColor: 'var(--color-amber-50)' }),
  'border-e-amber-100': () => ({ borderInlineEndColor: 'var(--color-amber-100)' }),
  'border-e-amber-200': () => ({ borderInlineEndColor: 'var(--color-amber-200)' }),
  'border-e-amber-300': () => ({ borderInlineEndColor: 'var(--color-amber-300)' }),
  'border-e-amber-400': () => ({ borderInlineEndColor: 'var(--color-amber-400)' }),
  'border-e-amber-500': () => ({ borderInlineEndColor: 'var(--color-amber-500)' }),
  'border-e-amber-600': () => ({ borderInlineEndColor: 'var(--color-amber-600)' }),
  'border-e-amber-700': () => ({ borderInlineEndColor: 'var(--color-amber-700)' }),
  'border-e-amber-800': () => ({ borderInlineEndColor: 'var(--color-amber-800)' }),
  'border-e-amber-900': () => ({ borderInlineEndColor: 'var(--color-amber-900)' }),
  'border-e-amber-950': () => ({ borderInlineEndColor: 'var(--color-amber-950)' }),
  'border-e-yellow-50': () => ({ borderInlineEndColor: 'var(--color-yellow-50)' }),
  'border-e-yellow-100': () => ({ borderInlineEndColor: 'var(--color-yellow-100)' }),
  'border-e-yellow-200': () => ({ borderInlineEndColor: 'var(--color-yellow-200)' }),
  'border-e-yellow-300': () => ({ borderInlineEndColor: 'var(--color-yellow-300)' }),
  'border-e-yellow-400': () => ({ borderInlineEndColor: 'var(--color-yellow-400)' }),
  'border-e-yellow-500': () => ({ borderInlineEndColor: 'var(--color-yellow-500)' }),
  'border-e-yellow-600': () => ({ borderInlineEndColor: 'var(--color-yellow-600)' }),
  'border-e-yellow-700': () => ({ borderInlineEndColor: 'var(--color-yellow-700)' }),
  'border-e-yellow-800': () => ({ borderInlineEndColor: 'var(--color-yellow-800)' }),
  'border-e-yellow-900': () => ({ borderInlineEndColor: 'var(--color-yellow-900)' }),
  'border-e-yellow-950': () => ({ borderInlineEndColor: 'var(--color-yellow-950)' }),
  'border-e-lime-50': () => ({ borderInlineEndColor: 'var(--color-lime-50)' }),
  'border-e-lime-100': () => ({ borderInlineEndColor: 'var(--color-lime-100)' }),
  'border-e-lime-200': () => ({ borderInlineEndColor: 'var(--color-lime-200)' }),
  'border-e-lime-300': () => ({ borderInlineEndColor: 'var(--color-lime-300)' }),
  'border-e-lime-400': () => ({ borderInlineEndColor: 'var(--color-lime-400)' }),
  'border-e-lime-500': () => ({ borderInlineEndColor: 'var(--color-lime-500)' }),
  'border-e-lime-600': () => ({ borderInlineEndColor: 'var(--color-lime-600)' }),
  'border-e-lime-700': () => ({ borderInlineEndColor: 'var(--color-lime-700)' }),
  'border-e-lime-800': () => ({ borderInlineEndColor: 'var(--color-lime-800)' }),
  'border-e-lime-900': () => ({ borderInlineEndColor: 'var(--color-lime-900)' }),
  'border-e-lime-950': () => ({ borderInlineEndColor: 'var(--color-lime-950)' }),
  'border-e-green-50': () => ({ borderInlineEndColor: 'var(--color-green-50)' }),
  'border-e-green-100': () => ({ borderInlineEndColor: 'var(--color-green-100)' }),
  'border-e-green-200': () => ({ borderInlineEndColor: 'var(--color-green-200)' }),
  'border-e-green-300': () => ({ borderInlineEndColor: 'var(--color-green-300)' }),
  'border-e-green-400': () => ({ borderInlineEndColor: 'var(--color-green-400)' }),
  'border-e-green-500': () => ({ borderInlineEndColor: 'var(--color-green-500)' }),
  'border-e-green-600': () => ({ borderInlineEndColor: 'var(--color-green-600)' }),
  'border-e-green-700': () => ({ borderInlineEndColor: 'var(--color-green-700)' }),
  'border-e-green-800': () => ({ borderInlineEndColor: 'var(--color-green-800)' }),
  'border-e-green-900': () => ({ borderInlineEndColor: 'var(--color-green-900)' }),
  'border-e-green-950': () => ({ borderInlineEndColor: 'var(--color-green-950)' }),
  'border-e-emerald-50': () => ({ borderInlineEndColor: 'var(--color-emerald-50)' }),
  'border-e-emerald-100': () => ({ borderInlineEndColor: 'var(--color-emerald-100)' }),
  'border-e-emerald-200': () => ({ borderInlineEndColor: 'var(--color-emerald-200)' }),
  'border-e-emerald-300': () => ({ borderInlineEndColor: 'var(--color-emerald-300)' }),
  'border-e-emerald-400': () => ({ borderInlineEndColor: 'var(--color-emerald-400)' }),
  'border-e-emerald-500': () => ({ borderInlineEndColor: 'var(--color-emerald-500)' }),
  'border-e-emerald-600': () => ({ borderInlineEndColor: 'var(--color-emerald-600)' }),
  'border-e-emerald-700': () => ({ borderInlineEndColor: 'var(--color-emerald-700)' }),
  'border-e-emerald-800': () => ({ borderInlineEndColor: 'var(--color-emerald-800)' }),
  'border-e-emerald-900': () => ({ borderInlineEndColor: 'var(--color-emerald-900)' }),
  'border-e-emerald-950': () => ({ borderInlineEndColor: 'var(--color-emerald-950)' }),
  'border-e-teal-50': () => ({ borderInlineEndColor: 'var(--color-teal-50)' }),
  'border-e-teal-100': () => ({ borderInlineEndColor: 'var(--color-teal-100)' }),
  'border-e-teal-200': () => ({ borderInlineEndColor: 'var(--color-teal-200)' }),
  'border-e-teal-300': () => ({ borderInlineEndColor: 'var(--color-teal-300)' }),
  'border-e-teal-400': () => ({ borderInlineEndColor: 'var(--color-teal-400)' }),
  'border-e-teal-500': () => ({ borderInlineEndColor: 'var(--color-teal-500)' }),
  'border-e-teal-600': () => ({ borderInlineEndColor: 'var(--color-teal-600)' }),
  'border-e-teal-700': () => ({ borderInlineEndColor: 'var(--color-teal-700)' }),
  'border-e-teal-800': () => ({ borderInlineEndColor: 'var(--color-teal-800)' }),
  'border-e-teal-900': () => ({ borderInlineEndColor: 'var(--color-teal-900)' }),
  'border-e-teal-950': () => ({ borderInlineEndColor: 'var(--color-teal-950)' }),
  'border-e-cyan-50': () => ({ borderInlineEndColor: 'var(--color-cyan-50)' }),
  'border-e-cyan-100': () => ({ borderInlineEndColor: 'var(--color-cyan-100)' }),
  'border-e-cyan-200': () => ({ borderInlineEndColor: 'var(--color-cyan-200)' }),
  'border-e-cyan-300': () => ({ borderInlineEndColor: 'var(--color-cyan-300)' }),
  'border-e-cyan-400': () => ({ borderInlineEndColor: 'var(--color-cyan-400)' }),
  'border-e-cyan-500': () => ({ borderInlineEndColor: 'var(--color-cyan-500)' }),
  'border-e-cyan-600': () => ({ borderInlineEndColor: 'var(--color-cyan-600)' }),
  'border-e-cyan-700': () => ({ borderInlineEndColor: 'var(--color-cyan-700)' }),
  'border-e-cyan-800': () => ({ borderInlineEndColor: 'var(--color-cyan-800)' }),
  'border-e-cyan-900': () => ({ borderInlineEndColor: 'var(--color-cyan-900)' }),
  'border-e-cyan-950': () => ({ borderInlineEndColor: 'var(--color-cyan-950)' }),
  'border-e-sky-50': () => ({ borderInlineEndColor: 'var(--color-sky-50)' }),
  'border-e-sky-100': () => ({ borderInlineEndColor: 'var(--color-sky-100)' }),
  'border-e-sky-200': () => ({ borderInlineEndColor: 'var(--color-sky-200)' }),
  'border-e-sky-300': () => ({ borderInlineEndColor: 'var(--color-sky-300)' }),
  'border-e-sky-400': () => ({ borderInlineEndColor: 'var(--color-sky-400)' }),
  'border-e-sky-500': () => ({ borderInlineEndColor: 'var(--color-sky-500)' }),
  'border-e-sky-600': () => ({ borderInlineEndColor: 'var(--color-sky-600)' }),
  'border-e-sky-700': () => ({ borderInlineEndColor: 'var(--color-sky-700)' }),
  'border-e-sky-800': () => ({ borderInlineEndColor: 'var(--color-sky-800)' }),
  'border-e-sky-900': () => ({ borderInlineEndColor: 'var(--color-sky-900)' }),
  'border-e-sky-950': () => ({ borderInlineEndColor: 'var(--color-sky-950)' }),
  'border-e-blue-50': () => ({ borderInlineEndColor: 'var(--color-blue-50)' }),
  'border-e-blue-100': () => ({ borderInlineEndColor: 'var(--color-blue-100)' }),
  'border-e-blue-200': () => ({ borderInlineEndColor: 'var(--color-blue-200)' }),
  'border-e-blue-300': () => ({ borderInlineEndColor: 'var(--color-blue-300)' }),
  'border-e-blue-400': () => ({ borderInlineEndColor: 'var(--color-blue-400)' }),
  'border-e-blue-500': () => ({ borderInlineEndColor: 'var(--color-blue-500)' }),
  'border-e-blue-600': () => ({ borderInlineEndColor: 'var(--color-blue-600)' }),
  'border-e-blue-700': () => ({ borderInlineEndColor: 'var(--color-blue-700)' }),
  'border-e-blue-800': () => ({ borderInlineEndColor: 'var(--color-blue-800)' }),
  'border-e-blue-900': () => ({ borderInlineEndColor: 'var(--color-blue-900)' }),
  'border-e-blue-950': () => ({ borderInlineEndColor: 'var(--color-blue-950)' }),
  'border-e-indigo-50': () => ({ borderInlineEndColor: 'var(--color-indigo-50)' }),
  'border-e-indigo-100': () => ({ borderInlineEndColor: 'var(--color-indigo-100)' }),
  'border-e-indigo-200': () => ({ borderInlineEndColor: 'var(--color-indigo-200)' }),
  'border-e-indigo-300': () => ({ borderInlineEndColor: 'var(--color-indigo-300)' }),
  'border-e-indigo-400': () => ({ borderInlineEndColor: 'var(--color-indigo-400)' }),
  'border-e-indigo-500': () => ({ borderInlineEndColor: 'var(--color-indigo-500)' }),
  'border-e-indigo-600': () => ({ borderInlineEndColor: 'var(--color-indigo-600)' }),
  'border-e-indigo-700': () => ({ borderInlineEndColor: 'var(--color-indigo-700)' }),
  'border-e-indigo-800': () => ({ borderInlineEndColor: 'var(--color-indigo-800)' }),
  'border-e-indigo-900': () => ({ borderInlineEndColor: 'var(--color-indigo-900)' }),
  'border-e-indigo-950': () => ({ borderInlineEndColor: 'var(--color-indigo-950)' }),
  'border-e-violet-50': () => ({ borderInlineEndColor: 'var(--color-violet-50)' }),
  'border-e-violet-100': () => ({ borderInlineEndColor: 'var(--color-violet-100)' }),
  'border-e-violet-200': () => ({ borderInlineEndColor: 'var(--color-violet-200)' }),
  'border-e-violet-300': () => ({ borderInlineEndColor: 'var(--color-violet-300)' }),
  'border-e-violet-400': () => ({ borderInlineEndColor: 'var(--color-violet-400)' }),
  'border-e-violet-500': () => ({ borderInlineEndColor: 'var(--color-violet-500)' }),
  'border-e-violet-600': () => ({ borderInlineEndColor: 'var(--color-violet-600)' }),
  'border-e-violet-700': () => ({ borderInlineEndColor: 'var(--color-violet-700)' }),
  'border-e-violet-800': () => ({ borderInlineEndColor: 'var(--color-violet-800)' }),
  'border-e-violet-900': () => ({ borderInlineEndColor: 'var(--color-violet-900)' }),
  'border-e-violet-950': () => ({ borderInlineEndColor: 'var(--color-violet-950)' }),
  'border-e-purple-50': () => ({ borderInlineEndColor: 'var(--color-purple-50)' }),
  'border-e-purple-100': () => ({ borderInlineEndColor: 'var(--color-purple-100)' }),
  'border-e-purple-200': () => ({ borderInlineEndColor: 'var(--color-purple-200)' }),
  'border-e-purple-300': () => ({ borderInlineEndColor: 'var(--color-purple-300)' }),
  'border-e-purple-400': () => ({ borderInlineEndColor: 'var(--color-purple-400)' }),
  'border-e-purple-500': () => ({ borderInlineEndColor: 'var(--color-purple-500)' }),
  'border-e-purple-600': () => ({ borderInlineEndColor: 'var(--color-purple-600)' }),
  'border-e-purple-700': () => ({ borderInlineEndColor: 'var(--color-purple-700)' }),
  'border-e-purple-800': () => ({ borderInlineEndColor: 'var(--color-purple-800)' }),
  'border-e-purple-900': () => ({ borderInlineEndColor: 'var(--color-purple-900)' }),
  'border-e-purple-950': () => ({ borderInlineEndColor: 'var(--color-purple-950)' }),
  'border-e-fuchsia-50': () => ({ borderInlineEndColor: 'var(--color-fuchsia-50)' }),
  'border-e-fuchsia-100': () => ({ borderInlineEndColor: 'var(--color-fuchsia-100)' }),
  'border-e-fuchsia-200': () => ({ borderInlineEndColor: 'var(--color-fuchsia-200)' }),
  'border-e-fuchsia-300': () => ({ borderInlineEndColor: 'var(--color-fuchsia-300)' }),
  'border-e-fuchsia-400': () => ({ borderInlineEndColor: 'var(--color-fuchsia-400)' }),
  'border-e-fuchsia-500': () => ({ borderInlineEndColor: 'var(--color-fuchsia-500)' }),
  'border-e-fuchsia-600': () => ({ borderInlineEndColor: 'var(--color-fuchsia-600)' }),
  'border-e-fuchsia-700': () => ({ borderInlineEndColor: 'var(--color-fuchsia-700)' }),
  'border-e-fuchsia-800': () => ({ borderInlineEndColor: 'var(--color-fuchsia-800)' }),
  'border-e-fuchsia-900': () => ({ borderInlineEndColor: 'var(--color-fuchsia-900)' }),
  'border-e-fuchsia-950': () => ({ borderInlineEndColor: 'var(--color-fuchsia-950)' }),
  'border-e-pink-50': () => ({ borderInlineEndColor: 'var(--color-pink-50)' }),
  'border-e-pink-100': () => ({ borderInlineEndColor: 'var(--color-pink-100)' }),
  'border-e-pink-200': () => ({ borderInlineEndColor: 'var(--color-pink-200)' }),
  'border-e-pink-300': () => ({ borderInlineEndColor: 'var(--color-pink-300)' }),
  'border-e-pink-400': () => ({ borderInlineEndColor: 'var(--color-pink-400)' }),
  'border-e-pink-500': () => ({ borderInlineEndColor: 'var(--color-pink-500)' }),
  'border-e-pink-600': () => ({ borderInlineEndColor: 'var(--color-pink-600)' }),
  'border-e-pink-700': () => ({ borderInlineEndColor: 'var(--color-pink-700)' }),
  'border-e-pink-800': () => ({ borderInlineEndColor: 'var(--color-pink-800)' }),
  'border-e-pink-900': () => ({ borderInlineEndColor: 'var(--color-pink-900)' }),
  'border-e-pink-950': () => ({ borderInlineEndColor: 'var(--color-pink-950)' }),
  'border-e-rose-50': () => ({ borderInlineEndColor: 'var(--color-rose-50)' }),
  'border-e-rose-100': () => ({ borderInlineEndColor: 'var(--color-rose-100)' }),
  'border-e-rose-200': () => ({ borderInlineEndColor: 'var(--color-rose-200)' }),
  'border-e-rose-300': () => ({ borderInlineEndColor: 'var(--color-rose-300)' }),
  'border-e-rose-400': () => ({ borderInlineEndColor: 'var(--color-rose-400)' }),
  'border-e-rose-500': () => ({ borderInlineEndColor: 'var(--color-rose-500)' }),
  'border-e-rose-600': () => ({ borderInlineEndColor: 'var(--color-rose-600)' }),
  'border-e-rose-700': () => ({ borderInlineEndColor: 'var(--color-rose-700)' }),
  'border-e-rose-800': () => ({ borderInlineEndColor: 'var(--color-rose-800)' }),
  'border-e-rose-900': () => ({ borderInlineEndColor: 'var(--color-rose-900)' }),
  'border-e-rose-950': () => ({ borderInlineEndColor: 'var(--color-rose-950)' }),
  'border-e-slate-50': () => ({ borderInlineEndColor: 'var(--color-slate-50)' }),
  'border-e-slate-100': () => ({ borderInlineEndColor: 'var(--color-slate-100)' }),
  'border-e-slate-200': () => ({ borderInlineEndColor: 'var(--color-slate-200)' }),
  'border-e-slate-300': () => ({ borderInlineEndColor: 'var(--color-slate-300)' }),
  'border-e-slate-400': () => ({ borderInlineEndColor: 'var(--color-slate-400)' }),
  'border-e-slate-500': () => ({ borderInlineEndColor: 'var(--color-slate-500)' }),
  'border-e-slate-600': () => ({ borderInlineEndColor: 'var(--color-slate-600)' }),
  'border-e-slate-700': () => ({ borderInlineEndColor: 'var(--color-slate-700)' }),
  'border-e-slate-800': () => ({ borderInlineEndColor: 'var(--color-slate-800)' }),
  'border-e-slate-900': () => ({ borderInlineEndColor: 'var(--color-slate-900)' }),
  'border-e-slate-950': () => ({ borderInlineEndColor: 'var(--color-slate-950)' }),
  'border-e-gray-50': () => ({ borderInlineEndColor: 'var(--color-gray-50)' }),
  'border-e-gray-100': () => ({ borderInlineEndColor: 'var(--color-gray-100)' }),
  'border-e-gray-200': () => ({ borderInlineEndColor: 'var(--color-gray-200)' }),
  'border-e-gray-300': () => ({ borderInlineEndColor: 'var(--color-gray-300)' }),
  'border-e-gray-400': () => ({ borderInlineEndColor: 'var(--color-gray-400)' }),
  'border-e-gray-500': () => ({ borderInlineEndColor: 'var(--color-gray-500)' }),
  'border-e-gray-600': () => ({ borderInlineEndColor: 'var(--color-gray-600)' }),
  'border-e-gray-700': () => ({ borderInlineEndColor: 'var(--color-gray-700)' }),
  'border-e-gray-800': () => ({ borderInlineEndColor: 'var(--color-gray-800)' }),
  'border-e-gray-900': () => ({ borderInlineEndColor: 'var(--color-gray-900)' }),
  'border-e-gray-950': () => ({ borderInlineEndColor: 'var(--color-gray-950)' }),
  'border-e-zinc-50': () => ({ borderInlineEndColor: 'var(--color-zinc-50)' }),
  'border-e-zinc-100': () => ({ borderInlineEndColor: 'var(--color-zinc-100)' }),
  'border-e-zinc-200': () => ({ borderInlineEndColor: 'var(--color-zinc-200)' }),
  'border-e-zinc-300': () => ({ borderInlineEndColor: 'var(--color-zinc-300)' }),
  'border-e-zinc-400': () => ({ borderInlineEndColor: 'var(--color-zinc-400)' }),
  'border-e-zinc-500': () => ({ borderInlineEndColor: 'var(--color-zinc-500)' }),
  'border-e-zinc-600': () => ({ borderInlineEndColor: 'var(--color-zinc-600)' }),
  'border-e-zinc-700': () => ({ borderInlineEndColor: 'var(--color-zinc-700)' }),
  'border-e-zinc-800': () => ({ borderInlineEndColor: 'var(--color-zinc-800)' }),
  'border-e-zinc-900': () => ({ borderInlineEndColor: 'var(--color-zinc-900)' }),
  'border-e-zinc-950': () => ({ borderInlineEndColor: 'var(--color-zinc-950)' }),
  'border-e-neutral-50': () => ({ borderInlineEndColor: 'var(--color-neutral-50)' }),
  'border-e-neutral-100': () => ({ borderInlineEndColor: 'var(--color-neutral-100)' }),
  'border-e-neutral-200': () => ({ borderInlineEndColor: 'var(--color-neutral-200)' }),
  'border-e-neutral-300': () => ({ borderInlineEndColor: 'var(--color-neutral-300)' }),
  'border-e-neutral-400': () => ({ borderInlineEndColor: 'var(--color-neutral-400)' }),
  'border-e-neutral-500': () => ({ borderInlineEndColor: 'var(--color-neutral-500)' }),
  'border-e-neutral-600': () => ({ borderInlineEndColor: 'var(--color-neutral-600)' }),
  'border-e-neutral-700': () => ({ borderInlineEndColor: 'var(--color-neutral-700)' }),
  'border-e-neutral-800': () => ({ borderInlineEndColor: 'var(--color-neutral-800)' }),
  'border-e-neutral-900': () => ({ borderInlineEndColor: 'var(--color-neutral-900)' }),
  'border-e-neutral-950': () => ({ borderInlineEndColor: 'var(--color-neutral-950)' }),
  'border-e-stone-50': () => ({ borderInlineEndColor: 'var(--color-stone-50)' }),
  'border-e-stone-100': () => ({ borderInlineEndColor: 'var(--color-stone-100)' }),
  'border-e-stone-200': () => ({ borderInlineEndColor: 'var(--color-stone-200)' }),
  'border-e-stone-300': () => ({ borderInlineEndColor: 'var(--color-stone-300)' }),
  'border-e-stone-400': () => ({ borderInlineEndColor: 'var(--color-stone-400)' }),
  'border-e-stone-500': () => ({ borderInlineEndColor: 'var(--color-stone-500)' }),
  'border-e-stone-600': () => ({ borderInlineEndColor: 'var(--color-stone-600)' }),
  'border-e-stone-700': () => ({ borderInlineEndColor: 'var(--color-stone-700)' }),
  'border-e-stone-800': () => ({ borderInlineEndColor: 'var(--color-stone-800)' }),
  'border-e-stone-900': () => ({ borderInlineEndColor: 'var(--color-stone-900)' }),
  'border-e-stone-950': () => ({ borderInlineEndColor: 'var(--color-stone-950)' }),
  'border-e-(<custom-property>)': ([value]) => ({ borderInlineEndColor: `var(${value})` }),
  'border-e-[<value>]': ([value]) => ({ borderInlineEndColor: `"${value}"` }),
  'border-t-inherit': () => ({ borderTopColor: 'inherit' }),
  'border-t-current': () => ({ borderTopColor: 'currentColor' }),
  'border-t-transparent': () => ({ borderTopColor: 'transparent' }),
  'border-t-black': () => ({ borderTopColor: 'var(--color-black)' }),
  'border-t-white': () => ({ borderTopColor: 'var(--color-white)' }),
  'border-t-red-50': () => ({ borderTopColor: 'var(--color-red-50)' }),
  'border-t-red-100': () => ({ borderTopColor: 'var(--color-red-100)' }),
  'border-t-red-200': () => ({ borderTopColor: 'var(--color-red-200)' }),
  'border-t-red-300': () => ({ borderTopColor: 'var(--color-red-300)' }),
  'border-t-red-400': () => ({ borderTopColor: 'var(--color-red-400)' }),
  'border-t-red-500': () => ({ borderTopColor: 'var(--color-red-500)' }),
  'border-t-red-600': () => ({ borderTopColor: 'var(--color-red-600)' }),
  'border-t-red-700': () => ({ borderTopColor: 'var(--color-red-700)' }),
  'border-t-red-800': () => ({ borderTopColor: 'var(--color-red-800)' }),
  'border-t-red-900': () => ({ borderTopColor: 'var(--color-red-900)' }),
  'border-t-red-950': () => ({ borderTopColor: 'var(--color-red-950)' }),
  'border-t-orange-50': () => ({ borderTopColor: 'var(--color-orange-50)' }),
  'border-t-orange-100': () => ({ borderTopColor: 'var(--color-orange-100)' }),
  'border-t-orange-200': () => ({ borderTopColor: 'var(--color-orange-200)' }),
  'border-t-orange-300': () => ({ borderTopColor: 'var(--color-orange-300)' }),
  'border-t-orange-400': () => ({ borderTopColor: 'var(--color-orange-400)' }),
  'border-t-orange-500': () => ({ borderTopColor: 'var(--color-orange-500)' }),
  'border-t-orange-600': () => ({ borderTopColor: 'var(--color-orange-600)' }),
  'border-t-orange-700': () => ({ borderTopColor: 'var(--color-orange-700)' }),
  'border-t-orange-800': () => ({ borderTopColor: 'var(--color-orange-800)' }),
  'border-t-orange-900': () => ({ borderTopColor: 'var(--color-orange-900)' }),
  'border-t-orange-950': () => ({ borderTopColor: 'var(--color-orange-950)' }),
  'border-t-amber-50': () => ({ borderTopColor: 'var(--color-amber-50)' }),
  'border-t-amber-100': () => ({ borderTopColor: 'var(--color-amber-100)' }),
  'border-t-amber-200': () => ({ borderTopColor: 'var(--color-amber-200)' }),
  'border-t-amber-300': () => ({ borderTopColor: 'var(--color-amber-300)' }),
  'border-t-amber-400': () => ({ borderTopColor: 'var(--color-amber-400)' }),
  'border-t-amber-500': () => ({ borderTopColor: 'var(--color-amber-500)' }),
  'border-t-amber-600': () => ({ borderTopColor: 'var(--color-amber-600)' }),
  'border-t-amber-700': () => ({ borderTopColor: 'var(--color-amber-700)' }),
  'border-t-amber-800': () => ({ borderTopColor: 'var(--color-amber-800)' }),
  'border-t-amber-900': () => ({ borderTopColor: 'var(--color-amber-900)' }),
  'border-t-amber-950': () => ({ borderTopColor: 'var(--color-amber-950)' }),
  'border-t-yellow-50': () => ({ borderTopColor: 'var(--color-yellow-50)' }),
  'border-t-yellow-100': () => ({ borderTopColor: 'var(--color-yellow-100)' }),
  'border-t-yellow-200': () => ({ borderTopColor: 'var(--color-yellow-200)' }),
  'border-t-yellow-300': () => ({ borderTopColor: 'var(--color-yellow-300)' }),
  'border-t-yellow-400': () => ({ borderTopColor: 'var(--color-yellow-400)' }),
  'border-t-yellow-500': () => ({ borderTopColor: 'var(--color-yellow-500)' }),
  'border-t-yellow-600': () => ({ borderTopColor: 'var(--color-yellow-600)' }),
  'border-t-yellow-700': () => ({ borderTopColor: 'var(--color-yellow-700)' }),
  'border-t-yellow-800': () => ({ borderTopColor: 'var(--color-yellow-800)' }),
  'border-t-yellow-900': () => ({ borderTopColor: 'var(--color-yellow-900)' }),
  'border-t-yellow-950': () => ({ borderTopColor: 'var(--color-yellow-950)' }),
  'border-t-lime-50': () => ({ borderTopColor: 'var(--color-lime-50)' }),
  'border-t-lime-100': () => ({ borderTopColor: 'var(--color-lime-100)' }),
  'border-t-lime-200': () => ({ borderTopColor: 'var(--color-lime-200)' }),
  'border-t-lime-300': () => ({ borderTopColor: 'var(--color-lime-300)' }),
  'border-t-lime-400': () => ({ borderTopColor: 'var(--color-lime-400)' }),
  'border-t-lime-500': () => ({ borderTopColor: 'var(--color-lime-500)' }),
  'border-t-lime-600': () => ({ borderTopColor: 'var(--color-lime-600)' }),
  'border-t-lime-700': () => ({ borderTopColor: 'var(--color-lime-700)' }),
  'border-t-lime-800': () => ({ borderTopColor: 'var(--color-lime-800)' }),
  'border-t-lime-900': () => ({ borderTopColor: 'var(--color-lime-900)' }),
  'border-t-lime-950': () => ({ borderTopColor: 'var(--color-lime-950)' }),
  'border-t-green-50': () => ({ borderTopColor: 'var(--color-green-50)' }),
  'border-t-green-100': () => ({ borderTopColor: 'var(--color-green-100)' }),
  'border-t-green-200': () => ({ borderTopColor: 'var(--color-green-200)' }),
  'border-t-green-300': () => ({ borderTopColor: 'var(--color-green-300)' }),
  'border-t-green-400': () => ({ borderTopColor: 'var(--color-green-400)' }),
  'border-t-green-500': () => ({ borderTopColor: 'var(--color-green-500)' }),
  'border-t-green-600': () => ({ borderTopColor: 'var(--color-green-600)' }),
  'border-t-green-700': () => ({ borderTopColor: 'var(--color-green-700)' }),
  'border-t-green-800': () => ({ borderTopColor: 'var(--color-green-800)' }),
  'border-t-green-900': () => ({ borderTopColor: 'var(--color-green-900)' }),
  'border-t-green-950': () => ({ borderTopColor: 'var(--color-green-950)' }),
  'border-t-emerald-50': () => ({ borderTopColor: 'var(--color-emerald-50)' }),
  'border-t-emerald-100': () => ({ borderTopColor: 'var(--color-emerald-100)' }),
  'border-t-emerald-200': () => ({ borderTopColor: 'var(--color-emerald-200)' }),
  'border-t-emerald-300': () => ({ borderTopColor: 'var(--color-emerald-300)' }),
  'border-t-emerald-400': () => ({ borderTopColor: 'var(--color-emerald-400)' }),
  'border-t-emerald-500': () => ({ borderTopColor: 'var(--color-emerald-500)' }),
  'border-t-emerald-600': () => ({ borderTopColor: 'var(--color-emerald-600)' }),
  'border-t-emerald-700': () => ({ borderTopColor: 'var(--color-emerald-700)' }),
  'border-t-emerald-800': () => ({ borderTopColor: 'var(--color-emerald-800)' }),
  'border-t-emerald-900': () => ({ borderTopColor: 'var(--color-emerald-900)' }),
  'border-t-emerald-950': () => ({ borderTopColor: 'var(--color-emerald-950)' }),
  'border-t-teal-50': () => ({ borderTopColor: 'var(--color-teal-50)' }),
  'border-t-teal-100': () => ({ borderTopColor: 'var(--color-teal-100)' }),
  'border-t-teal-200': () => ({ borderTopColor: 'var(--color-teal-200)' }),
  'border-t-teal-300': () => ({ borderTopColor: 'var(--color-teal-300)' }),
  'border-t-teal-400': () => ({ borderTopColor: 'var(--color-teal-400)' }),
  'border-t-teal-500': () => ({ borderTopColor: 'var(--color-teal-500)' }),
  'border-t-teal-600': () => ({ borderTopColor: 'var(--color-teal-600)' }),
  'border-t-teal-700': () => ({ borderTopColor: 'var(--color-teal-700)' }),
  'border-t-teal-800': () => ({ borderTopColor: 'var(--color-teal-800)' }),
  'border-t-teal-900': () => ({ borderTopColor: 'var(--color-teal-900)' }),
  'border-t-teal-950': () => ({ borderTopColor: 'var(--color-teal-950)' }),
  'border-t-cyan-50': () => ({ borderTopColor: 'var(--color-cyan-50)' }),
  'border-t-cyan-100': () => ({ borderTopColor: 'var(--color-cyan-100)' }),
  'border-t-cyan-200': () => ({ borderTopColor: 'var(--color-cyan-200)' }),
  'border-t-cyan-300': () => ({ borderTopColor: 'var(--color-cyan-300)' }),
  'border-t-cyan-400': () => ({ borderTopColor: 'var(--color-cyan-400)' }),
  'border-t-cyan-500': () => ({ borderTopColor: 'var(--color-cyan-500)' }),
  'border-t-cyan-600': () => ({ borderTopColor: 'var(--color-cyan-600)' }),
  'border-t-cyan-700': () => ({ borderTopColor: 'var(--color-cyan-700)' }),
  'border-t-cyan-800': () => ({ borderTopColor: 'var(--color-cyan-800)' }),
  'border-t-cyan-900': () => ({ borderTopColor: 'var(--color-cyan-900)' }),
  'border-t-cyan-950': () => ({ borderTopColor: 'var(--color-cyan-950)' }),
  'border-t-sky-50': () => ({ borderTopColor: 'var(--color-sky-50)' }),
  'border-t-sky-100': () => ({ borderTopColor: 'var(--color-sky-100)' }),
  'border-t-sky-200': () => ({ borderTopColor: 'var(--color-sky-200)' }),
  'border-t-sky-300': () => ({ borderTopColor: 'var(--color-sky-300)' }),
  'border-t-sky-400': () => ({ borderTopColor: 'var(--color-sky-400)' }),
  'border-t-sky-500': () => ({ borderTopColor: 'var(--color-sky-500)' }),
  'border-t-sky-600': () => ({ borderTopColor: 'var(--color-sky-600)' }),
  'border-t-sky-700': () => ({ borderTopColor: 'var(--color-sky-700)' }),
  'border-t-sky-800': () => ({ borderTopColor: 'var(--color-sky-800)' }),
  'border-t-sky-900': () => ({ borderTopColor: 'var(--color-sky-900)' }),
  'border-t-sky-950': () => ({ borderTopColor: 'var(--color-sky-950)' }),
  'border-t-blue-50': () => ({ borderTopColor: 'var(--color-blue-50)' }),
  'border-t-blue-100': () => ({ borderTopColor: 'var(--color-blue-100)' }),
  'border-t-blue-200': () => ({ borderTopColor: 'var(--color-blue-200)' }),
  'border-t-blue-300': () => ({ borderTopColor: 'var(--color-blue-300)' }),
  'border-t-blue-400': () => ({ borderTopColor: 'var(--color-blue-400)' }),
  'border-t-blue-500': () => ({ borderTopColor: 'var(--color-blue-500)' }),
  'border-t-blue-600': () => ({ borderTopColor: 'var(--color-blue-600)' }),
  'border-t-blue-700': () => ({ borderTopColor: 'var(--color-blue-700)' }),
  'border-t-blue-800': () => ({ borderTopColor: 'var(--color-blue-800)' }),
  'border-t-blue-900': () => ({ borderTopColor: 'var(--color-blue-900)' }),
  'border-t-blue-950': () => ({ borderTopColor: 'var(--color-blue-950)' }),
  'border-t-indigo-50': () => ({ borderTopColor: 'var(--color-indigo-50)' }),
  'border-t-indigo-100': () => ({ borderTopColor: 'var(--color-indigo-100)' }),
  'border-t-indigo-200': () => ({ borderTopColor: 'var(--color-indigo-200)' }),
  'border-t-indigo-300': () => ({ borderTopColor: 'var(--color-indigo-300)' }),
  'border-t-indigo-400': () => ({ borderTopColor: 'var(--color-indigo-400)' }),
  'border-t-indigo-500': () => ({ borderTopColor: 'var(--color-indigo-500)' }),
  'border-t-indigo-600': () => ({ borderTopColor: 'var(--color-indigo-600)' }),
  'border-t-indigo-700': () => ({ borderTopColor: 'var(--color-indigo-700)' }),
  'border-t-indigo-800': () => ({ borderTopColor: 'var(--color-indigo-800)' }),
  'border-t-indigo-900': () => ({ borderTopColor: 'var(--color-indigo-900)' }),
  'border-t-indigo-950': () => ({ borderTopColor: 'var(--color-indigo-950)' }),
  'border-t-violet-50': () => ({ borderTopColor: 'var(--color-violet-50)' }),
  'border-t-violet-100': () => ({ borderTopColor: 'var(--color-violet-100)' }),
  'border-t-violet-200': () => ({ borderTopColor: 'var(--color-violet-200)' }),
  'border-t-violet-300': () => ({ borderTopColor: 'var(--color-violet-300)' }),
  'border-t-violet-400': () => ({ borderTopColor: 'var(--color-violet-400)' }),
  'border-t-violet-500': () => ({ borderTopColor: 'var(--color-violet-500)' }),
  'border-t-violet-600': () => ({ borderTopColor: 'var(--color-violet-600)' }),
  'border-t-violet-700': () => ({ borderTopColor: 'var(--color-violet-700)' }),
  'border-t-violet-800': () => ({ borderTopColor: 'var(--color-violet-800)' }),
  'border-t-violet-900': () => ({ borderTopColor: 'var(--color-violet-900)' }),
  'border-t-violet-950': () => ({ borderTopColor: 'var(--color-violet-950)' }),
  'border-t-purple-50': () => ({ borderTopColor: 'var(--color-purple-50)' }),
  'border-t-purple-100': () => ({ borderTopColor: 'var(--color-purple-100)' }),
  'border-t-purple-200': () => ({ borderTopColor: 'var(--color-purple-200)' }),
  'border-t-purple-300': () => ({ borderTopColor: 'var(--color-purple-300)' }),
  'border-t-purple-400': () => ({ borderTopColor: 'var(--color-purple-400)' }),
  'border-t-purple-500': () => ({ borderTopColor: 'var(--color-purple-500)' }),
  'border-t-purple-600': () => ({ borderTopColor: 'var(--color-purple-600)' }),
  'border-t-purple-700': () => ({ borderTopColor: 'var(--color-purple-700)' }),
  'border-t-purple-800': () => ({ borderTopColor: 'var(--color-purple-800)' }),
  'border-t-purple-900': () => ({ borderTopColor: 'var(--color-purple-900)' }),
  'border-t-purple-950': () => ({ borderTopColor: 'var(--color-purple-950)' }),
  'border-t-fuchsia-50': () => ({ borderTopColor: 'var(--color-fuchsia-50)' }),
  'border-t-fuchsia-100': () => ({ borderTopColor: 'var(--color-fuchsia-100)' }),
  'border-t-fuchsia-200': () => ({ borderTopColor: 'var(--color-fuchsia-200)' }),
  'border-t-fuchsia-300': () => ({ borderTopColor: 'var(--color-fuchsia-300)' }),
  'border-t-fuchsia-400': () => ({ borderTopColor: 'var(--color-fuchsia-400)' }),
  'border-t-fuchsia-500': () => ({ borderTopColor: 'var(--color-fuchsia-500)' }),
  'border-t-fuchsia-600': () => ({ borderTopColor: 'var(--color-fuchsia-600)' }),
  'border-t-fuchsia-700': () => ({ borderTopColor: 'var(--color-fuchsia-700)' }),
  'border-t-fuchsia-800': () => ({ borderTopColor: 'var(--color-fuchsia-800)' }),
  'border-t-fuchsia-900': () => ({ borderTopColor: 'var(--color-fuchsia-900)' }),
  'border-t-fuchsia-950': () => ({ borderTopColor: 'var(--color-fuchsia-950)' }),
  'border-t-pink-50': () => ({ borderTopColor: 'var(--color-pink-50)' }),
  'border-t-pink-100': () => ({ borderTopColor: 'var(--color-pink-100)' }),
  'border-t-pink-200': () => ({ borderTopColor: 'var(--color-pink-200)' }),
  'border-t-pink-300': () => ({ borderTopColor: 'var(--color-pink-300)' }),
  'border-t-pink-400': () => ({ borderTopColor: 'var(--color-pink-400)' }),
  'border-t-pink-500': () => ({ borderTopColor: 'var(--color-pink-500)' }),
  'border-t-pink-600': () => ({ borderTopColor: 'var(--color-pink-600)' }),
  'border-t-pink-700': () => ({ borderTopColor: 'var(--color-pink-700)' }),
  'border-t-pink-800': () => ({ borderTopColor: 'var(--color-pink-800)' }),
  'border-t-pink-900': () => ({ borderTopColor: 'var(--color-pink-900)' }),
  'border-t-pink-950': () => ({ borderTopColor: 'var(--color-pink-950)' }),
  'border-t-rose-50': () => ({ borderTopColor: 'var(--color-rose-50)' }),
  'border-t-rose-100': () => ({ borderTopColor: 'var(--color-rose-100)' }),
  'border-t-rose-200': () => ({ borderTopColor: 'var(--color-rose-200)' }),
  'border-t-rose-300': () => ({ borderTopColor: 'var(--color-rose-300)' }),
  'border-t-rose-400': () => ({ borderTopColor: 'var(--color-rose-400)' }),
  'border-t-rose-500': () => ({ borderTopColor: 'var(--color-rose-500)' }),
  'border-t-rose-600': () => ({ borderTopColor: 'var(--color-rose-600)' }),
  'border-t-rose-700': () => ({ borderTopColor: 'var(--color-rose-700)' }),
  'border-t-rose-800': () => ({ borderTopColor: 'var(--color-rose-800)' }),
  'border-t-rose-900': () => ({ borderTopColor: 'var(--color-rose-900)' }),
  'border-t-rose-950': () => ({ borderTopColor: 'var(--color-rose-950)' }),
  'border-t-slate-50': () => ({ borderTopColor: 'var(--color-slate-50)' }),
  'border-t-slate-100': () => ({ borderTopColor: 'var(--color-slate-100)' }),
  'border-t-slate-200': () => ({ borderTopColor: 'var(--color-slate-200)' }),
  'border-t-slate-300': () => ({ borderTopColor: 'var(--color-slate-300)' }),
  'border-t-slate-400': () => ({ borderTopColor: 'var(--color-slate-400)' }),
  'border-t-slate-500': () => ({ borderTopColor: 'var(--color-slate-500)' }),
  'border-t-slate-600': () => ({ borderTopColor: 'var(--color-slate-600)' }),
  'border-t-slate-700': () => ({ borderTopColor: 'var(--color-slate-700)' }),
  'border-t-slate-800': () => ({ borderTopColor: 'var(--color-slate-800)' }),
  'border-t-slate-900': () => ({ borderTopColor: 'var(--color-slate-900)' }),
  'border-t-slate-950': () => ({ borderTopColor: 'var(--color-slate-950)' }),
  'border-t-gray-50': () => ({ borderTopColor: 'var(--color-gray-50)' }),
  'border-t-gray-100': () => ({ borderTopColor: 'var(--color-gray-100)' }),
  'border-t-gray-200': () => ({ borderTopColor: 'var(--color-gray-200)' }),
  'border-t-gray-300': () => ({ borderTopColor: 'var(--color-gray-300)' }),
  'border-t-gray-400': () => ({ borderTopColor: 'var(--color-gray-400)' }),
  'border-t-gray-500': () => ({ borderTopColor: 'var(--color-gray-500)' }),
  'border-t-gray-600': () => ({ borderTopColor: 'var(--color-gray-600)' }),
  'border-t-gray-700': () => ({ borderTopColor: 'var(--color-gray-700)' }),
  'border-t-gray-800': () => ({ borderTopColor: 'var(--color-gray-800)' }),
  'border-t-gray-900': () => ({ borderTopColor: 'var(--color-gray-900)' }),
  'border-t-gray-950': () => ({ borderTopColor: 'var(--color-gray-950)' }),
  'border-t-zinc-50': () => ({ borderTopColor: 'var(--color-zinc-50)' }),
  'border-t-zinc-100': () => ({ borderTopColor: 'var(--color-zinc-100)' }),
  'border-t-zinc-200': () => ({ borderTopColor: 'var(--color-zinc-200)' }),
  'border-t-zinc-300': () => ({ borderTopColor: 'var(--color-zinc-300)' }),
  'border-t-zinc-400': () => ({ borderTopColor: 'var(--color-zinc-400)' }),
  'border-t-zinc-500': () => ({ borderTopColor: 'var(--color-zinc-500)' }),
  'border-t-zinc-600': () => ({ borderTopColor: 'var(--color-zinc-600)' }),
  'border-t-zinc-700': () => ({ borderTopColor: 'var(--color-zinc-700)' }),
  'border-t-zinc-800': () => ({ borderTopColor: 'var(--color-zinc-800)' }),
  'border-t-zinc-900': () => ({ borderTopColor: 'var(--color-zinc-900)' }),
  'border-t-zinc-950': () => ({ borderTopColor: 'var(--color-zinc-950)' }),
  'border-t-neutral-50': () => ({ borderTopColor: 'var(--color-neutral-50)' }),
  'border-t-neutral-100': () => ({ borderTopColor: 'var(--color-neutral-100)' }),
  'border-t-neutral-200': () => ({ borderTopColor: 'var(--color-neutral-200)' }),
  'border-t-neutral-300': () => ({ borderTopColor: 'var(--color-neutral-300)' }),
  'border-t-neutral-400': () => ({ borderTopColor: 'var(--color-neutral-400)' }),
  'border-t-neutral-500': () => ({ borderTopColor: 'var(--color-neutral-500)' }),
  'border-t-neutral-600': () => ({ borderTopColor: 'var(--color-neutral-600)' }),
  'border-t-neutral-700': () => ({ borderTopColor: 'var(--color-neutral-700)' }),
  'border-t-neutral-800': () => ({ borderTopColor: 'var(--color-neutral-800)' }),
  'border-t-neutral-900': () => ({ borderTopColor: 'var(--color-neutral-900)' }),
  'border-t-neutral-950': () => ({ borderTopColor: 'var(--color-neutral-950)' }),
  'border-t-stone-50': () => ({ borderTopColor: 'var(--color-stone-50)' }),
  'border-t-stone-100': () => ({ borderTopColor: 'var(--color-stone-100)' }),
  'border-t-stone-200': () => ({ borderTopColor: 'var(--color-stone-200)' }),
  'border-t-stone-300': () => ({ borderTopColor: 'var(--color-stone-300)' }),
  'border-t-stone-400': () => ({ borderTopColor: 'var(--color-stone-400)' }),
  'border-t-stone-500': () => ({ borderTopColor: 'var(--color-stone-500)' }),
  'border-t-stone-600': () => ({ borderTopColor: 'var(--color-stone-600)' }),
  'border-t-stone-700': () => ({ borderTopColor: 'var(--color-stone-700)' }),
  'border-t-stone-800': () => ({ borderTopColor: 'var(--color-stone-800)' }),
  'border-t-stone-900': () => ({ borderTopColor: 'var(--color-stone-900)' }),
  'border-t-stone-950': () => ({ borderTopColor: 'var(--color-stone-950)' }),
  'border-t-(<custom-property>)': ([value]) => ({ borderTopColor: `var(${value})` }),
  'border-t-[<value>]': ([value]) => ({ borderTopColor: `"${value}"` }),
  'border-r-inherit': () => ({ borderRightColor: 'inherit' }),
  'border-r-current': () => ({ borderRightColor: 'currentColor' }),
  'border-r-transparent': () => ({ borderRightColor: 'transparent' }),
  'border-r-black': () => ({ borderRightColor: 'var(--color-black)' }),
  'border-r-white': () => ({ borderRightColor: 'var(--color-white)' }),
  'border-r-red-50': () => ({ borderRightColor: 'var(--color-red-50)' }),
  'border-r-red-100': () => ({ borderRightColor: 'var(--color-red-100)' }),
  'border-r-red-200': () => ({ borderRightColor: 'var(--color-red-200)' }),
  'border-r-red-300': () => ({ borderRightColor: 'var(--color-red-300)' }),
  'border-r-red-400': () => ({ borderRightColor: 'var(--color-red-400)' }),
  'border-r-red-500': () => ({ borderRightColor: 'var(--color-red-500)' }),
  'border-r-red-600': () => ({ borderRightColor: 'var(--color-red-600)' }),
  'border-r-red-700': () => ({ borderRightColor: 'var(--color-red-700)' }),
  'border-r-red-800': () => ({ borderRightColor: 'var(--color-red-800)' }),
  'border-r-red-900': () => ({ borderRightColor: 'var(--color-red-900)' }),
  'border-r-red-950': () => ({ borderRightColor: 'var(--color-red-950)' }),
  'border-r-orange-50': () => ({ borderRightColor: 'var(--color-orange-50)' }),
  'border-r-orange-100': () => ({ borderRightColor: 'var(--color-orange-100)' }),
  'border-r-orange-200': () => ({ borderRightColor: 'var(--color-orange-200)' }),
  'border-r-orange-300': () => ({ borderRightColor: 'var(--color-orange-300)' }),
  'border-r-orange-400': () => ({ borderRightColor: 'var(--color-orange-400)' }),
  'border-r-orange-500': () => ({ borderRightColor: 'var(--color-orange-500)' }),
  'border-r-orange-600': () => ({ borderRightColor: 'var(--color-orange-600)' }),
  'border-r-orange-700': () => ({ borderRightColor: 'var(--color-orange-700)' }),
  'border-r-orange-800': () => ({ borderRightColor: 'var(--color-orange-800)' }),
  'border-r-orange-900': () => ({ borderRightColor: 'var(--color-orange-900)' }),
  'border-r-orange-950': () => ({ borderRightColor: 'var(--color-orange-950)' }),
  'border-r-amber-50': () => ({ borderRightColor: 'var(--color-amber-50)' }),
  'border-r-amber-100': () => ({ borderRightColor: 'var(--color-amber-100)' }),
  'border-r-amber-200': () => ({ borderRightColor: 'var(--color-amber-200)' }),
  'border-r-amber-300': () => ({ borderRightColor: 'var(--color-amber-300)' }),
  'border-r-amber-400': () => ({ borderRightColor: 'var(--color-amber-400)' }),
  'border-r-amber-500': () => ({ borderRightColor: 'var(--color-amber-500)' }),
  'border-r-amber-600': () => ({ borderRightColor: 'var(--color-amber-600)' }),
  'border-r-amber-700': () => ({ borderRightColor: 'var(--color-amber-700)' }),
  'border-r-amber-800': () => ({ borderRightColor: 'var(--color-amber-800)' }),
  'border-r-amber-900': () => ({ borderRightColor: 'var(--color-amber-900)' }),
  'border-r-amber-950': () => ({ borderRightColor: 'var(--color-amber-950)' }),
  'border-r-yellow-50': () => ({ borderRightColor: 'var(--color-yellow-50)' }),
  'border-r-yellow-100': () => ({ borderRightColor: 'var(--color-yellow-100)' }),
  'border-r-yellow-200': () => ({ borderRightColor: 'var(--color-yellow-200)' }),
  'border-r-yellow-300': () => ({ borderRightColor: 'var(--color-yellow-300)' }),
  'border-r-yellow-400': () => ({ borderRightColor: 'var(--color-yellow-400)' }),
  'border-r-yellow-500': () => ({ borderRightColor: 'var(--color-yellow-500)' }),
  'border-r-yellow-600': () => ({ borderRightColor: 'var(--color-yellow-600)' }),
  'border-r-yellow-700': () => ({ borderRightColor: 'var(--color-yellow-700)' }),
  'border-r-yellow-800': () => ({ borderRightColor: 'var(--color-yellow-800)' }),
  'border-r-yellow-900': () => ({ borderRightColor: 'var(--color-yellow-900)' }),
  'border-r-yellow-950': () => ({ borderRightColor: 'var(--color-yellow-950)' }),
  'border-r-lime-50': () => ({ borderRightColor: 'var(--color-lime-50)' }),
  'border-r-lime-100': () => ({ borderRightColor: 'var(--color-lime-100)' }),
  'border-r-lime-200': () => ({ borderRightColor: 'var(--color-lime-200)' }),
  'border-r-lime-300': () => ({ borderRightColor: 'var(--color-lime-300)' }),
  'border-r-lime-400': () => ({ borderRightColor: 'var(--color-lime-400)' }),
  'border-r-lime-500': () => ({ borderRightColor: 'var(--color-lime-500)' }),
  'border-r-lime-600': () => ({ borderRightColor: 'var(--color-lime-600)' }),
  'border-r-lime-700': () => ({ borderRightColor: 'var(--color-lime-700)' }),
  'border-r-lime-800': () => ({ borderRightColor: 'var(--color-lime-800)' }),
  'border-r-lime-900': () => ({ borderRightColor: 'var(--color-lime-900)' }),
  'border-r-lime-950': () => ({ borderRightColor: 'var(--color-lime-950)' }),
  'border-r-green-50': () => ({ borderRightColor: 'var(--color-green-50)' }),
  'border-r-green-100': () => ({ borderRightColor: 'var(--color-green-100)' }),
  'border-r-green-200': () => ({ borderRightColor: 'var(--color-green-200)' }),
  'border-r-green-300': () => ({ borderRightColor: 'var(--color-green-300)' }),
  'border-r-green-400': () => ({ borderRightColor: 'var(--color-green-400)' }),
  'border-r-green-500': () => ({ borderRightColor: 'var(--color-green-500)' }),
  'border-r-green-600': () => ({ borderRightColor: 'var(--color-green-600)' }),
  'border-r-green-700': () => ({ borderRightColor: 'var(--color-green-700)' }),
  'border-r-green-800': () => ({ borderRightColor: 'var(--color-green-800)' }),
  'border-r-green-900': () => ({ borderRightColor: 'var(--color-green-900)' }),
  'border-r-green-950': () => ({ borderRightColor: 'var(--color-green-950)' }),
  'border-r-emerald-50': () => ({ borderRightColor: 'var(--color-emerald-50)' }),
  'border-r-emerald-100': () => ({ borderRightColor: 'var(--color-emerald-100)' }),
  'border-r-emerald-200': () => ({ borderRightColor: 'var(--color-emerald-200)' }),
  'border-r-emerald-300': () => ({ borderRightColor: 'var(--color-emerald-300)' }),
  'border-r-emerald-400': () => ({ borderRightColor: 'var(--color-emerald-400)' }),
  'border-r-emerald-500': () => ({ borderRightColor: 'var(--color-emerald-500)' }),
  'border-r-emerald-600': () => ({ borderRightColor: 'var(--color-emerald-600)' }),
  'border-r-emerald-700': () => ({ borderRightColor: 'var(--color-emerald-700)' }),
  'border-r-emerald-800': () => ({ borderRightColor: 'var(--color-emerald-800)' }),
  'border-r-emerald-900': () => ({ borderRightColor: 'var(--color-emerald-900)' }),
  'border-r-emerald-950': () => ({ borderRightColor: 'var(--color-emerald-950)' }),
  'border-r-teal-50': () => ({ borderRightColor: 'var(--color-teal-50)' }),
  'border-r-teal-100': () => ({ borderRightColor: 'var(--color-teal-100)' }),
  'border-r-teal-200': () => ({ borderRightColor: 'var(--color-teal-200)' }),
  'border-r-teal-300': () => ({ borderRightColor: 'var(--color-teal-300)' }),
  'border-r-teal-400': () => ({ borderRightColor: 'var(--color-teal-400)' }),
  'border-r-teal-500': () => ({ borderRightColor: 'var(--color-teal-500)' }),
  'border-r-teal-600': () => ({ borderRightColor: 'var(--color-teal-600)' }),
  'border-r-teal-700': () => ({ borderRightColor: 'var(--color-teal-700)' }),
  'border-r-teal-800': () => ({ borderRightColor: 'var(--color-teal-800)' }),
  'border-r-teal-900': () => ({ borderRightColor: 'var(--color-teal-900)' }),
  'border-r-teal-950': () => ({ borderRightColor: 'var(--color-teal-950)' }),
  'border-r-cyan-50': () => ({ borderRightColor: 'var(--color-cyan-50)' }),
  'border-r-cyan-100': () => ({ borderRightColor: 'var(--color-cyan-100)' }),
  'border-r-cyan-200': () => ({ borderRightColor: 'var(--color-cyan-200)' }),
  'border-r-cyan-300': () => ({ borderRightColor: 'var(--color-cyan-300)' }),
  'border-r-cyan-400': () => ({ borderRightColor: 'var(--color-cyan-400)' }),
  'border-r-cyan-500': () => ({ borderRightColor: 'var(--color-cyan-500)' }),
  'border-r-cyan-600': () => ({ borderRightColor: 'var(--color-cyan-600)' }),
  'border-r-cyan-700': () => ({ borderRightColor: 'var(--color-cyan-700)' }),
  'border-r-cyan-800': () => ({ borderRightColor: 'var(--color-cyan-800)' }),
  'border-r-cyan-900': () => ({ borderRightColor: 'var(--color-cyan-900)' }),
  'border-r-cyan-950': () => ({ borderRightColor: 'var(--color-cyan-950)' }),
  'border-r-sky-50': () => ({ borderRightColor: 'var(--color-sky-50)' }),
  'border-r-sky-100': () => ({ borderRightColor: 'var(--color-sky-100)' }),
  'border-r-sky-200': () => ({ borderRightColor: 'var(--color-sky-200)' }),
  'border-r-sky-300': () => ({ borderRightColor: 'var(--color-sky-300)' }),
  'border-r-sky-400': () => ({ borderRightColor: 'var(--color-sky-400)' }),
  'border-r-sky-500': () => ({ borderRightColor: 'var(--color-sky-500)' }),
  'border-r-sky-600': () => ({ borderRightColor: 'var(--color-sky-600)' }),
  'border-r-sky-700': () => ({ borderRightColor: 'var(--color-sky-700)' }),
  'border-r-sky-800': () => ({ borderRightColor: 'var(--color-sky-800)' }),
  'border-r-sky-900': () => ({ borderRightColor: 'var(--color-sky-900)' }),
  'border-r-sky-950': () => ({ borderRightColor: 'var(--color-sky-950)' }),
  'border-r-blue-50': () => ({ borderRightColor: 'var(--color-blue-50)' }),
  'border-r-blue-100': () => ({ borderRightColor: 'var(--color-blue-100)' }),
  'border-r-blue-200': () => ({ borderRightColor: 'var(--color-blue-200)' }),
  'border-r-blue-300': () => ({ borderRightColor: 'var(--color-blue-300)' }),
  'border-r-blue-400': () => ({ borderRightColor: 'var(--color-blue-400)' }),
  'border-r-blue-500': () => ({ borderRightColor: 'var(--color-blue-500)' }),
  'border-r-blue-600': () => ({ borderRightColor: 'var(--color-blue-600)' }),
  'border-r-blue-700': () => ({ borderRightColor: 'var(--color-blue-700)' }),
  'border-r-blue-800': () => ({ borderRightColor: 'var(--color-blue-800)' }),
  'border-r-blue-900': () => ({ borderRightColor: 'var(--color-blue-900)' }),
  'border-r-blue-950': () => ({ borderRightColor: 'var(--color-blue-950)' }),
  'border-r-indigo-50': () => ({ borderRightColor: 'var(--color-indigo-50)' }),
  'border-r-indigo-100': () => ({ borderRightColor: 'var(--color-indigo-100)' }),
  'border-r-indigo-200': () => ({ borderRightColor: 'var(--color-indigo-200)' }),
  'border-r-indigo-300': () => ({ borderRightColor: 'var(--color-indigo-300)' }),
  'border-r-indigo-400': () => ({ borderRightColor: 'var(--color-indigo-400)' }),
  'border-r-indigo-500': () => ({ borderRightColor: 'var(--color-indigo-500)' }),
  'border-r-indigo-600': () => ({ borderRightColor: 'var(--color-indigo-600)' }),
  'border-r-indigo-700': () => ({ borderRightColor: 'var(--color-indigo-700)' }),
  'border-r-indigo-800': () => ({ borderRightColor: 'var(--color-indigo-800)' }),
  'border-r-indigo-900': () => ({ borderRightColor: 'var(--color-indigo-900)' }),
  'border-r-indigo-950': () => ({ borderRightColor: 'var(--color-indigo-950)' }),
  'border-r-violet-50': () => ({ borderRightColor: 'var(--color-violet-50)' }),
  'border-r-violet-100': () => ({ borderRightColor: 'var(--color-violet-100)' }),
  'border-r-violet-200': () => ({ borderRightColor: 'var(--color-violet-200)' }),
  'border-r-violet-300': () => ({ borderRightColor: 'var(--color-violet-300)' }),
  'border-r-violet-400': () => ({ borderRightColor: 'var(--color-violet-400)' }),
  'border-r-violet-500': () => ({ borderRightColor: 'var(--color-violet-500)' }),
  'border-r-violet-600': () => ({ borderRightColor: 'var(--color-violet-600)' }),
  'border-r-violet-700': () => ({ borderRightColor: 'var(--color-violet-700)' }),
  'border-r-violet-800': () => ({ borderRightColor: 'var(--color-violet-800)' }),
  'border-r-violet-900': () => ({ borderRightColor: 'var(--color-violet-900)' }),
  'border-r-violet-950': () => ({ borderRightColor: 'var(--color-violet-950)' }),
  'border-r-purple-50': () => ({ borderRightColor: 'var(--color-purple-50)' }),
  'border-r-purple-100': () => ({ borderRightColor: 'var(--color-purple-100)' }),
  'border-r-purple-200': () => ({ borderRightColor: 'var(--color-purple-200)' }),
  'border-r-purple-300': () => ({ borderRightColor: 'var(--color-purple-300)' }),
  'border-r-purple-400': () => ({ borderRightColor: 'var(--color-purple-400)' }),
  'border-r-purple-500': () => ({ borderRightColor: 'var(--color-purple-500)' }),
  'border-r-purple-600': () => ({ borderRightColor: 'var(--color-purple-600)' }),
  'border-r-purple-700': () => ({ borderRightColor: 'var(--color-purple-700)' }),
  'border-r-purple-800': () => ({ borderRightColor: 'var(--color-purple-800)' }),
  'border-r-purple-900': () => ({ borderRightColor: 'var(--color-purple-900)' }),
  'border-r-purple-950': () => ({ borderRightColor: 'var(--color-purple-950)' }),
  'border-r-fuchsia-50': () => ({ borderRightColor: 'var(--color-fuchsia-50)' }),
  'border-r-fuchsia-100': () => ({ borderRightColor: 'var(--color-fuchsia-100)' }),
  'border-r-fuchsia-200': () => ({ borderRightColor: 'var(--color-fuchsia-200)' }),
  'border-r-fuchsia-300': () => ({ borderRightColor: 'var(--color-fuchsia-300)' }),
  'border-r-fuchsia-400': () => ({ borderRightColor: 'var(--color-fuchsia-400)' }),
  'border-r-fuchsia-500': () => ({ borderRightColor: 'var(--color-fuchsia-500)' }),
  'border-r-fuchsia-600': () => ({ borderRightColor: 'var(--color-fuchsia-600)' }),
  'border-r-fuchsia-700': () => ({ borderRightColor: 'var(--color-fuchsia-700)' }),
  'border-r-fuchsia-800': () => ({ borderRightColor: 'var(--color-fuchsia-800)' }),
  'border-r-fuchsia-900': () => ({ borderRightColor: 'var(--color-fuchsia-900)' }),
  'border-r-fuchsia-950': () => ({ borderRightColor: 'var(--color-fuchsia-950)' }),
  'border-r-pink-50': () => ({ borderRightColor: 'var(--color-pink-50)' }),
  'border-r-pink-100': () => ({ borderRightColor: 'var(--color-pink-100)' }),
  'border-r-pink-200': () => ({ borderRightColor: 'var(--color-pink-200)' }),
  'border-r-pink-300': () => ({ borderRightColor: 'var(--color-pink-300)' }),
  'border-r-pink-400': () => ({ borderRightColor: 'var(--color-pink-400)' }),
  'border-r-pink-500': () => ({ borderRightColor: 'var(--color-pink-500)' }),
  'border-r-pink-600': () => ({ borderRightColor: 'var(--color-pink-600)' }),
  'border-r-pink-700': () => ({ borderRightColor: 'var(--color-pink-700)' }),
  'border-r-pink-800': () => ({ borderRightColor: 'var(--color-pink-800)' }),
  'border-r-pink-900': () => ({ borderRightColor: 'var(--color-pink-900)' }),
  'border-r-pink-950': () => ({ borderRightColor: 'var(--color-pink-950)' }),
  'border-r-rose-50': () => ({ borderRightColor: 'var(--color-rose-50)' }),
  'border-r-rose-100': () => ({ borderRightColor: 'var(--color-rose-100)' }),
  'border-r-rose-200': () => ({ borderRightColor: 'var(--color-rose-200)' }),
  'border-r-rose-300': () => ({ borderRightColor: 'var(--color-rose-300)' }),
  'border-r-rose-400': () => ({ borderRightColor: 'var(--color-rose-400)' }),
  'border-r-rose-500': () => ({ borderRightColor: 'var(--color-rose-500)' }),
  'border-r-rose-600': () => ({ borderRightColor: 'var(--color-rose-600)' }),
  'border-r-rose-700': () => ({ borderRightColor: 'var(--color-rose-700)' }),
  'border-r-rose-800': () => ({ borderRightColor: 'var(--color-rose-800)' }),
  'border-r-rose-900': () => ({ borderRightColor: 'var(--color-rose-900)' }),
  'border-r-rose-950': () => ({ borderRightColor: 'var(--color-rose-950)' }),
  'border-r-slate-50': () => ({ borderRightColor: 'var(--color-slate-50)' }),
  'border-r-slate-100': () => ({ borderRightColor: 'var(--color-slate-100)' }),
  'border-r-slate-200': () => ({ borderRightColor: 'var(--color-slate-200)' }),
  'border-r-slate-300': () => ({ borderRightColor: 'var(--color-slate-300)' }),
  'border-r-slate-400': () => ({ borderRightColor: 'var(--color-slate-400)' }),
  'border-r-slate-500': () => ({ borderRightColor: 'var(--color-slate-500)' }),
  'border-r-slate-600': () => ({ borderRightColor: 'var(--color-slate-600)' }),
  'border-r-slate-700': () => ({ borderRightColor: 'var(--color-slate-700)' }),
  'border-r-slate-800': () => ({ borderRightColor: 'var(--color-slate-800)' }),
  'border-r-slate-900': () => ({ borderRightColor: 'var(--color-slate-900)' }),
  'border-r-slate-950': () => ({ borderRightColor: 'var(--color-slate-950)' }),
  'border-r-gray-50': () => ({ borderRightColor: 'var(--color-gray-50)' }),
  'border-r-gray-100': () => ({ borderRightColor: 'var(--color-gray-100)' }),
  'border-r-gray-200': () => ({ borderRightColor: 'var(--color-gray-200)' }),
  'border-r-gray-300': () => ({ borderRightColor: 'var(--color-gray-300)' }),
  'border-r-gray-400': () => ({ borderRightColor: 'var(--color-gray-400)' }),
  'border-r-gray-500': () => ({ borderRightColor: 'var(--color-gray-500)' }),
  'border-r-gray-600': () => ({ borderRightColor: 'var(--color-gray-600)' }),
  'border-r-gray-700': () => ({ borderRightColor: 'var(--color-gray-700)' }),
  'border-r-gray-800': () => ({ borderRightColor: 'var(--color-gray-800)' }),
  'border-r-gray-900': () => ({ borderRightColor: 'var(--color-gray-900)' }),
  'border-r-gray-950': () => ({ borderRightColor: 'var(--color-gray-950)' }),
  'border-r-zinc-50': () => ({ borderRightColor: 'var(--color-zinc-50)' }),
  'border-r-zinc-100': () => ({ borderRightColor: 'var(--color-zinc-100)' }),
  'border-r-zinc-200': () => ({ borderRightColor: 'var(--color-zinc-200)' }),
  'border-r-zinc-300': () => ({ borderRightColor: 'var(--color-zinc-300)' }),
  'border-r-zinc-400': () => ({ borderRightColor: 'var(--color-zinc-400)' }),
  'border-r-zinc-500': () => ({ borderRightColor: 'var(--color-zinc-500)' }),
  'border-r-zinc-600': () => ({ borderRightColor: 'var(--color-zinc-600)' }),
  'border-r-zinc-700': () => ({ borderRightColor: 'var(--color-zinc-700)' }),
  'border-r-zinc-800': () => ({ borderRightColor: 'var(--color-zinc-800)' }),
  'border-r-zinc-900': () => ({ borderRightColor: 'var(--color-zinc-900)' }),
  'border-r-zinc-950': () => ({ borderRightColor: 'var(--color-zinc-950)' }),
  'border-r-neutral-50': () => ({ borderRightColor: 'var(--color-neutral-50)' }),
  'border-r-neutral-100': () => ({ borderRightColor: 'var(--color-neutral-100)' }),
  'border-r-neutral-200': () => ({ borderRightColor: 'var(--color-neutral-200)' }),
  'border-r-neutral-300': () => ({ borderRightColor: 'var(--color-neutral-300)' }),
  'border-r-neutral-400': () => ({ borderRightColor: 'var(--color-neutral-400)' }),
  'border-r-neutral-500': () => ({ borderRightColor: 'var(--color-neutral-500)' }),
  'border-r-neutral-600': () => ({ borderRightColor: 'var(--color-neutral-600)' }),
  'border-r-neutral-700': () => ({ borderRightColor: 'var(--color-neutral-700)' }),
  'border-r-neutral-800': () => ({ borderRightColor: 'var(--color-neutral-800)' }),
  'border-r-neutral-900': () => ({ borderRightColor: 'var(--color-neutral-900)' }),
  'border-r-neutral-950': () => ({ borderRightColor: 'var(--color-neutral-950)' }),
  'border-r-stone-50': () => ({ borderRightColor: 'var(--color-stone-50)' }),
  'border-r-stone-100': () => ({ borderRightColor: 'var(--color-stone-100)' }),
  'border-r-stone-200': () => ({ borderRightColor: 'var(--color-stone-200)' }),
  'border-r-stone-300': () => ({ borderRightColor: 'var(--color-stone-300)' }),
  'border-r-stone-400': () => ({ borderRightColor: 'var(--color-stone-400)' }),
  'border-r-stone-500': () => ({ borderRightColor: 'var(--color-stone-500)' }),
  'border-r-stone-600': () => ({ borderRightColor: 'var(--color-stone-600)' }),
  'border-r-stone-700': () => ({ borderRightColor: 'var(--color-stone-700)' }),
  'border-r-stone-800': () => ({ borderRightColor: 'var(--color-stone-800)' }),
  'border-r-stone-900': () => ({ borderRightColor: 'var(--color-stone-900)' }),
  'border-r-stone-950': () => ({ borderRightColor: 'var(--color-stone-950)' }),
  'border-r-(<custom-property>)': ([value]) => ({ borderRightColor: `var(${value})` }),
  'border-r-[<value>]': ([value]) => ({ borderRightColor: `"${value}"` }),
  'border-b-inherit': () => ({ borderBottomColor: 'inherit' }),
  'border-b-current': () => ({ borderBottomColor: 'currentColor' }),
  'border-b-transparent': () => ({ borderBottomColor: 'transparent' }),
  'border-b-black': () => ({ borderBottomColor: 'var(--color-black)' }),
  'border-b-white': () => ({ borderBottomColor: 'var(--color-white)' }),
  'border-b-red-50': () => ({ borderBottomColor: 'var(--color-red-50)' }),
  'border-b-red-100': () => ({ borderBottomColor: 'var(--color-red-100)' }),
  'border-b-red-200': () => ({ borderBottomColor: 'var(--color-red-200)' }),
  'border-b-red-300': () => ({ borderBottomColor: 'var(--color-red-300)' }),
  'border-b-red-400': () => ({ borderBottomColor: 'var(--color-red-400)' }),
  'border-b-red-500': () => ({ borderBottomColor: 'var(--color-red-500)' }),
  'border-b-red-600': () => ({ borderBottomColor: 'var(--color-red-600)' }),
  'border-b-red-700': () => ({ borderBottomColor: 'var(--color-red-700)' }),
  'border-b-red-800': () => ({ borderBottomColor: 'var(--color-red-800)' }),
  'border-b-red-900': () => ({ borderBottomColor: 'var(--color-red-900)' }),
  'border-b-red-950': () => ({ borderBottomColor: 'var(--color-red-950)' }),
  'border-b-orange-50': () => ({ borderBottomColor: 'var(--color-orange-50)' }),
  'border-b-orange-100': () => ({ borderBottomColor: 'var(--color-orange-100)' }),
  'border-b-orange-200': () => ({ borderBottomColor: 'var(--color-orange-200)' }),
  'border-b-orange-300': () => ({ borderBottomColor: 'var(--color-orange-300)' }),
  'border-b-orange-400': () => ({ borderBottomColor: 'var(--color-orange-400)' }),
  'border-b-orange-500': () => ({ borderBottomColor: 'var(--color-orange-500)' }),
  'border-b-orange-600': () => ({ borderBottomColor: 'var(--color-orange-600)' }),
  'border-b-orange-700': () => ({ borderBottomColor: 'var(--color-orange-700)' }),
  'border-b-orange-800': () => ({ borderBottomColor: 'var(--color-orange-800)' }),
  'border-b-orange-900': () => ({ borderBottomColor: 'var(--color-orange-900)' }),
  'border-b-orange-950': () => ({ borderBottomColor: 'var(--color-orange-950)' }),
  'border-b-amber-50': () => ({ borderBottomColor: 'var(--color-amber-50)' }),
  'border-b-amber-100': () => ({ borderBottomColor: 'var(--color-amber-100)' }),
  'border-b-amber-200': () => ({ borderBottomColor: 'var(--color-amber-200)' }),
  'border-b-amber-300': () => ({ borderBottomColor: 'var(--color-amber-300)' }),
  'border-b-amber-400': () => ({ borderBottomColor: 'var(--color-amber-400)' }),
  'border-b-amber-500': () => ({ borderBottomColor: 'var(--color-amber-500)' }),
  'border-b-amber-600': () => ({ borderBottomColor: 'var(--color-amber-600)' }),
  'border-b-amber-700': () => ({ borderBottomColor: 'var(--color-amber-700)' }),
  'border-b-amber-800': () => ({ borderBottomColor: 'var(--color-amber-800)' }),
  'border-b-amber-900': () => ({ borderBottomColor: 'var(--color-amber-900)' }),
  'border-b-amber-950': () => ({ borderBottomColor: 'var(--color-amber-950)' }),
  'border-b-yellow-50': () => ({ borderBottomColor: 'var(--color-yellow-50)' }),
  'border-b-yellow-100': () => ({ borderBottomColor: 'var(--color-yellow-100)' }),
  'border-b-yellow-200': () => ({ borderBottomColor: 'var(--color-yellow-200)' }),
  'border-b-yellow-300': () => ({ borderBottomColor: 'var(--color-yellow-300)' }),
  'border-b-yellow-400': () => ({ borderBottomColor: 'var(--color-yellow-400)' }),
  'border-b-yellow-500': () => ({ borderBottomColor: 'var(--color-yellow-500)' }),
  'border-b-yellow-600': () => ({ borderBottomColor: 'var(--color-yellow-600)' }),
  'border-b-yellow-700': () => ({ borderBottomColor: 'var(--color-yellow-700)' }),
  'border-b-yellow-800': () => ({ borderBottomColor: 'var(--color-yellow-800)' }),
  'border-b-yellow-900': () => ({ borderBottomColor: 'var(--color-yellow-900)' }),
  'border-b-yellow-950': () => ({ borderBottomColor: 'var(--color-yellow-950)' }),
  'border-b-lime-50': () => ({ borderBottomColor: 'var(--color-lime-50)' }),
  'border-b-lime-100': () => ({ borderBottomColor: 'var(--color-lime-100)' }),
  'border-b-lime-200': () => ({ borderBottomColor: 'var(--color-lime-200)' }),
  'border-b-lime-300': () => ({ borderBottomColor: 'var(--color-lime-300)' }),
  'border-b-lime-400': () => ({ borderBottomColor: 'var(--color-lime-400)' }),
  'border-b-lime-500': () => ({ borderBottomColor: 'var(--color-lime-500)' }),
  'border-b-lime-600': () => ({ borderBottomColor: 'var(--color-lime-600)' }),
  'border-b-lime-700': () => ({ borderBottomColor: 'var(--color-lime-700)' }),
  'border-b-lime-800': () => ({ borderBottomColor: 'var(--color-lime-800)' }),
  'border-b-lime-900': () => ({ borderBottomColor: 'var(--color-lime-900)' }),
  'border-b-lime-950': () => ({ borderBottomColor: 'var(--color-lime-950)' }),
  'border-b-green-50': () => ({ borderBottomColor: 'var(--color-green-50)' }),
  'border-b-green-100': () => ({ borderBottomColor: 'var(--color-green-100)' }),
  'border-b-green-200': () => ({ borderBottomColor: 'var(--color-green-200)' }),
  'border-b-green-300': () => ({ borderBottomColor: 'var(--color-green-300)' }),
  'border-b-green-400': () => ({ borderBottomColor: 'var(--color-green-400)' }),
  'border-b-green-500': () => ({ borderBottomColor: 'var(--color-green-500)' }),
  'border-b-green-600': () => ({ borderBottomColor: 'var(--color-green-600)' }),
  'border-b-green-700': () => ({ borderBottomColor: 'var(--color-green-700)' }),
  'border-b-green-800': () => ({ borderBottomColor: 'var(--color-green-800)' }),
  'border-b-green-900': () => ({ borderBottomColor: 'var(--color-green-900)' }),
  'border-b-green-950': () => ({ borderBottomColor: 'var(--color-green-950)' }),
  'border-b-emerald-50': () => ({ borderBottomColor: 'var(--color-emerald-50)' }),
  'border-b-emerald-100': () => ({ borderBottomColor: 'var(--color-emerald-100)' }),
  'border-b-emerald-200': () => ({ borderBottomColor: 'var(--color-emerald-200)' }),
  'border-b-emerald-300': () => ({ borderBottomColor: 'var(--color-emerald-300)' }),
  'border-b-emerald-400': () => ({ borderBottomColor: 'var(--color-emerald-400)' }),
  'border-b-emerald-500': () => ({ borderBottomColor: 'var(--color-emerald-500)' }),
  'border-b-emerald-600': () => ({ borderBottomColor: 'var(--color-emerald-600)' }),
  'border-b-emerald-700': () => ({ borderBottomColor: 'var(--color-emerald-700)' }),
  'border-b-emerald-800': () => ({ borderBottomColor: 'var(--color-emerald-800)' }),
  'border-b-emerald-900': () => ({ borderBottomColor: 'var(--color-emerald-900)' }),
  'border-b-emerald-950': () => ({ borderBottomColor: 'var(--color-emerald-950)' }),
  'border-b-teal-50': () => ({ borderBottomColor: 'var(--color-teal-50)' }),
  'border-b-teal-100': () => ({ borderBottomColor: 'var(--color-teal-100)' }),
  'border-b-teal-200': () => ({ borderBottomColor: 'var(--color-teal-200)' }),
  'border-b-teal-300': () => ({ borderBottomColor: 'var(--color-teal-300)' }),
  'border-b-teal-400': () => ({ borderBottomColor: 'var(--color-teal-400)' }),
  'border-b-teal-500': () => ({ borderBottomColor: 'var(--color-teal-500)' }),
  'border-b-teal-600': () => ({ borderBottomColor: 'var(--color-teal-600)' }),
  'border-b-teal-700': () => ({ borderBottomColor: 'var(--color-teal-700)' }),
  'border-b-teal-800': () => ({ borderBottomColor: 'var(--color-teal-800)' }),
  'border-b-teal-900': () => ({ borderBottomColor: 'var(--color-teal-900)' }),
  'border-b-teal-950': () => ({ borderBottomColor: 'var(--color-teal-950)' }),
  'border-b-cyan-50': () => ({ borderBottomColor: 'var(--color-cyan-50)' }),
  'border-b-cyan-100': () => ({ borderBottomColor: 'var(--color-cyan-100)' }),
  'border-b-cyan-200': () => ({ borderBottomColor: 'var(--color-cyan-200)' }),
  'border-b-cyan-300': () => ({ borderBottomColor: 'var(--color-cyan-300)' }),
  'border-b-cyan-400': () => ({ borderBottomColor: 'var(--color-cyan-400)' }),
  'border-b-cyan-500': () => ({ borderBottomColor: 'var(--color-cyan-500)' }),
  'border-b-cyan-600': () => ({ borderBottomColor: 'var(--color-cyan-600)' }),
  'border-b-cyan-700': () => ({ borderBottomColor: 'var(--color-cyan-700)' }),
  'border-b-cyan-800': () => ({ borderBottomColor: 'var(--color-cyan-800)' }),
  'border-b-cyan-900': () => ({ borderBottomColor: 'var(--color-cyan-900)' }),
  'border-b-cyan-950': () => ({ borderBottomColor: 'var(--color-cyan-950)' }),
  'border-b-sky-50': () => ({ borderBottomColor: 'var(--color-sky-50)' }),
  'border-b-sky-100': () => ({ borderBottomColor: 'var(--color-sky-100)' }),
  'border-b-sky-200': () => ({ borderBottomColor: 'var(--color-sky-200)' }),
  'border-b-sky-300': () => ({ borderBottomColor: 'var(--color-sky-300)' }),
  'border-b-sky-400': () => ({ borderBottomColor: 'var(--color-sky-400)' }),
  'border-b-sky-500': () => ({ borderBottomColor: 'var(--color-sky-500)' }),
  'border-b-sky-600': () => ({ borderBottomColor: 'var(--color-sky-600)' }),
  'border-b-sky-700': () => ({ borderBottomColor: 'var(--color-sky-700)' }),
  'border-b-sky-800': () => ({ borderBottomColor: 'var(--color-sky-800)' }),
  'border-b-sky-900': () => ({ borderBottomColor: 'var(--color-sky-900)' }),
  'border-b-sky-950': () => ({ borderBottomColor: 'var(--color-sky-950)' }),
  'border-b-blue-50': () => ({ borderBottomColor: 'var(--color-blue-50)' }),
  'border-b-blue-100': () => ({ borderBottomColor: 'var(--color-blue-100)' }),
  'border-b-blue-200': () => ({ borderBottomColor: 'var(--color-blue-200)' }),
  'border-b-blue-300': () => ({ borderBottomColor: 'var(--color-blue-300)' }),
  'border-b-blue-400': () => ({ borderBottomColor: 'var(--color-blue-400)' }),
  'border-b-blue-500': () => ({ borderBottomColor: 'var(--color-blue-500)' }),
  'border-b-blue-600': () => ({ borderBottomColor: 'var(--color-blue-600)' }),
  'border-b-blue-700': () => ({ borderBottomColor: 'var(--color-blue-700)' }),
  'border-b-blue-800': () => ({ borderBottomColor: 'var(--color-blue-800)' }),
  'border-b-blue-900': () => ({ borderBottomColor: 'var(--color-blue-900)' }),
  'border-b-blue-950': () => ({ borderBottomColor: 'var(--color-blue-950)' }),
  'border-b-indigo-50': () => ({ borderBottomColor: 'var(--color-indigo-50)' }),
  'border-b-indigo-100': () => ({ borderBottomColor: 'var(--color-indigo-100)' }),
  'border-b-indigo-200': () => ({ borderBottomColor: 'var(--color-indigo-200)' }),
  'border-b-indigo-300': () => ({ borderBottomColor: 'var(--color-indigo-300)' }),
  'border-b-indigo-400': () => ({ borderBottomColor: 'var(--color-indigo-400)' }),
  'border-b-indigo-500': () => ({ borderBottomColor: 'var(--color-indigo-500)' }),
  'border-b-indigo-600': () => ({ borderBottomColor: 'var(--color-indigo-600)' }),
  'border-b-indigo-700': () => ({ borderBottomColor: 'var(--color-indigo-700)' }),
  'border-b-indigo-800': () => ({ borderBottomColor: 'var(--color-indigo-800)' }),
  'border-b-indigo-900': () => ({ borderBottomColor: 'var(--color-indigo-900)' }),
  'border-b-indigo-950': () => ({ borderBottomColor: 'var(--color-indigo-950)' }),
  'border-b-violet-50': () => ({ borderBottomColor: 'var(--color-violet-50)' }),
  'border-b-violet-100': () => ({ borderBottomColor: 'var(--color-violet-100)' }),
  'border-b-violet-200': () => ({ borderBottomColor: 'var(--color-violet-200)' }),
  'border-b-violet-300': () => ({ borderBottomColor: 'var(--color-violet-300)' }),
  'border-b-violet-400': () => ({ borderBottomColor: 'var(--color-violet-400)' }),
  'border-b-violet-500': () => ({ borderBottomColor: 'var(--color-violet-500)' }),
  'border-b-violet-600': () => ({ borderBottomColor: 'var(--color-violet-600)' }),
  'border-b-violet-700': () => ({ borderBottomColor: 'var(--color-violet-700)' }),
  'border-b-violet-800': () => ({ borderBottomColor: 'var(--color-violet-800)' }),
  'border-b-violet-900': () => ({ borderBottomColor: 'var(--color-violet-900)' }),
  'border-b-violet-950': () => ({ borderBottomColor: 'var(--color-violet-950)' }),
  'border-b-purple-50': () => ({ borderBottomColor: 'var(--color-purple-50)' }),
  'border-b-purple-100': () => ({ borderBottomColor: 'var(--color-purple-100)' }),
  'border-b-purple-200': () => ({ borderBottomColor: 'var(--color-purple-200)' }),
  'border-b-purple-300': () => ({ borderBottomColor: 'var(--color-purple-300)' }),
  'border-b-purple-400': () => ({ borderBottomColor: 'var(--color-purple-400)' }),
  'border-b-purple-500': () => ({ borderBottomColor: 'var(--color-purple-500)' }),
  'border-b-purple-600': () => ({ borderBottomColor: 'var(--color-purple-600)' }),
  'border-b-purple-700': () => ({ borderBottomColor: 'var(--color-purple-700)' }),
  'border-b-purple-800': () => ({ borderBottomColor: 'var(--color-purple-800)' }),
  'border-b-purple-900': () => ({ borderBottomColor: 'var(--color-purple-900)' }),
  'border-b-purple-950': () => ({ borderBottomColor: 'var(--color-purple-950)' }),
  'border-b-fuchsia-50': () => ({ borderBottomColor: 'var(--color-fuchsia-50)' }),
  'border-b-fuchsia-100': () => ({ borderBottomColor: 'var(--color-fuchsia-100)' }),
  'border-b-fuchsia-200': () => ({ borderBottomColor: 'var(--color-fuchsia-200)' }),
  'border-b-fuchsia-300': () => ({ borderBottomColor: 'var(--color-fuchsia-300)' }),
  'border-b-fuchsia-400': () => ({ borderBottomColor: 'var(--color-fuchsia-400)' }),
  'border-b-fuchsia-500': () => ({ borderBottomColor: 'var(--color-fuchsia-500)' }),
  'border-b-fuchsia-600': () => ({ borderBottomColor: 'var(--color-fuchsia-600)' }),
  'border-b-fuchsia-700': () => ({ borderBottomColor: 'var(--color-fuchsia-700)' }),
  'border-b-fuchsia-800': () => ({ borderBottomColor: 'var(--color-fuchsia-800)' }),
  'border-b-fuchsia-900': () => ({ borderBottomColor: 'var(--color-fuchsia-900)' }),
  'border-b-fuchsia-950': () => ({ borderBottomColor: 'var(--color-fuchsia-950)' }),
  'border-b-pink-50': () => ({ borderBottomColor: 'var(--color-pink-50)' }),
  'border-b-pink-100': () => ({ borderBottomColor: 'var(--color-pink-100)' }),
  'border-b-pink-200': () => ({ borderBottomColor: 'var(--color-pink-200)' }),
  'border-b-pink-300': () => ({ borderBottomColor: 'var(--color-pink-300)' }),
  'border-b-pink-400': () => ({ borderBottomColor: 'var(--color-pink-400)' }),
  'border-b-pink-500': () => ({ borderBottomColor: 'var(--color-pink-500)' }),
  'border-b-pink-600': () => ({ borderBottomColor: 'var(--color-pink-600)' }),
  'border-b-pink-700': () => ({ borderBottomColor: 'var(--color-pink-700)' }),
  'border-b-pink-800': () => ({ borderBottomColor: 'var(--color-pink-800)' }),
  'border-b-pink-900': () => ({ borderBottomColor: 'var(--color-pink-900)' }),
  'border-b-pink-950': () => ({ borderBottomColor: 'var(--color-pink-950)' }),
  'border-b-rose-50': () => ({ borderBottomColor: 'var(--color-rose-50)' }),
  'border-b-rose-100': () => ({ borderBottomColor: 'var(--color-rose-100)' }),
  'border-b-rose-200': () => ({ borderBottomColor: 'var(--color-rose-200)' }),
  'border-b-rose-300': () => ({ borderBottomColor: 'var(--color-rose-300)' }),
  'border-b-rose-400': () => ({ borderBottomColor: 'var(--color-rose-400)' }),
  'border-b-rose-500': () => ({ borderBottomColor: 'var(--color-rose-500)' }),
  'border-b-rose-600': () => ({ borderBottomColor: 'var(--color-rose-600)' }),
  'border-b-rose-700': () => ({ borderBottomColor: 'var(--color-rose-700)' }),
  'border-b-rose-800': () => ({ borderBottomColor: 'var(--color-rose-800)' }),
  'border-b-rose-900': () => ({ borderBottomColor: 'var(--color-rose-900)' }),
  'border-b-rose-950': () => ({ borderBottomColor: 'var(--color-rose-950)' }),
  'border-b-slate-50': () => ({ borderBottomColor: 'var(--color-slate-50)' }),
  'border-b-slate-100': () => ({ borderBottomColor: 'var(--color-slate-100)' }),
  'border-b-slate-200': () => ({ borderBottomColor: 'var(--color-slate-200)' }),
  'border-b-slate-300': () => ({ borderBottomColor: 'var(--color-slate-300)' }),
  'border-b-slate-400': () => ({ borderBottomColor: 'var(--color-slate-400)' }),
  'border-b-slate-500': () => ({ borderBottomColor: 'var(--color-slate-500)' }),
  'border-b-slate-600': () => ({ borderBottomColor: 'var(--color-slate-600)' }),
  'border-b-slate-700': () => ({ borderBottomColor: 'var(--color-slate-700)' }),
  'border-b-slate-800': () => ({ borderBottomColor: 'var(--color-slate-800)' }),
  'border-b-slate-900': () => ({ borderBottomColor: 'var(--color-slate-900)' }),
  'border-b-slate-950': () => ({ borderBottomColor: 'var(--color-slate-950)' }),
  'border-b-gray-50': () => ({ borderBottomColor: 'var(--color-gray-50)' }),
  'border-b-gray-100': () => ({ borderBottomColor: 'var(--color-gray-100)' }),
  'border-b-gray-200': () => ({ borderBottomColor: 'var(--color-gray-200)' }),
  'border-b-gray-300': () => ({ borderBottomColor: 'var(--color-gray-300)' }),
  'border-b-gray-400': () => ({ borderBottomColor: 'var(--color-gray-400)' }),
  'border-b-gray-500': () => ({ borderBottomColor: 'var(--color-gray-500)' }),
  'border-b-gray-600': () => ({ borderBottomColor: 'var(--color-gray-600)' }),
  'border-b-gray-700': () => ({ borderBottomColor: 'var(--color-gray-700)' }),
  'border-b-gray-800': () => ({ borderBottomColor: 'var(--color-gray-800)' }),
  'border-b-gray-900': () => ({ borderBottomColor: 'var(--color-gray-900)' }),
  'border-b-gray-950': () => ({ borderBottomColor: 'var(--color-gray-950)' }),
  'border-b-zinc-50': () => ({ borderBottomColor: 'var(--color-zinc-50)' }),
  'border-b-zinc-100': () => ({ borderBottomColor: 'var(--color-zinc-100)' }),
  'border-b-zinc-200': () => ({ borderBottomColor: 'var(--color-zinc-200)' }),
  'border-b-zinc-300': () => ({ borderBottomColor: 'var(--color-zinc-300)' }),
  'border-b-zinc-400': () => ({ borderBottomColor: 'var(--color-zinc-400)' }),
  'border-b-zinc-500': () => ({ borderBottomColor: 'var(--color-zinc-500)' }),
  'border-b-zinc-600': () => ({ borderBottomColor: 'var(--color-zinc-600)' }),
  'border-b-zinc-700': () => ({ borderBottomColor: 'var(--color-zinc-700)' }),
  'border-b-zinc-800': () => ({ borderBottomColor: 'var(--color-zinc-800)' }),
  'border-b-zinc-900': () => ({ borderBottomColor: 'var(--color-zinc-900)' }),
  'border-b-zinc-950': () => ({ borderBottomColor: 'var(--color-zinc-950)' }),
  'border-b-neutral-50': () => ({ borderBottomColor: 'var(--color-neutral-50)' }),
  'border-b-neutral-100': () => ({ borderBottomColor: 'var(--color-neutral-100)' }),
  'border-b-neutral-200': () => ({ borderBottomColor: 'var(--color-neutral-200)' }),
  'border-b-neutral-300': () => ({ borderBottomColor: 'var(--color-neutral-300)' }),
  'border-b-neutral-400': () => ({ borderBottomColor: 'var(--color-neutral-400)' }),
  'border-b-neutral-500': () => ({ borderBottomColor: 'var(--color-neutral-500)' }),
  'border-b-neutral-600': () => ({ borderBottomColor: 'var(--color-neutral-600)' }),
  'border-b-neutral-700': () => ({ borderBottomColor: 'var(--color-neutral-700)' }),
  'border-b-neutral-800': () => ({ borderBottomColor: 'var(--color-neutral-800)' }),
  'border-b-neutral-900': () => ({ borderBottomColor: 'var(--color-neutral-900)' }),
  'border-b-neutral-950': () => ({ borderBottomColor: 'var(--color-neutral-950)' }),
  'border-b-stone-50': () => ({ borderBottomColor: 'var(--color-stone-50)' }),
  'border-b-stone-100': () => ({ borderBottomColor: 'var(--color-stone-100)' }),
  'border-b-stone-200': () => ({ borderBottomColor: 'var(--color-stone-200)' }),
  'border-b-stone-300': () => ({ borderBottomColor: 'var(--color-stone-300)' }),
  'border-b-stone-400': () => ({ borderBottomColor: 'var(--color-stone-400)' }),
  'border-b-stone-500': () => ({ borderBottomColor: 'var(--color-stone-500)' }),
  'border-b-stone-600': () => ({ borderBottomColor: 'var(--color-stone-600)' }),
  'border-b-stone-700': () => ({ borderBottomColor: 'var(--color-stone-700)' }),
  'border-b-stone-800': () => ({ borderBottomColor: 'var(--color-stone-800)' }),
  'border-b-stone-900': () => ({ borderBottomColor: 'var(--color-stone-900)' }),
  'border-b-stone-950': () => ({ borderBottomColor: 'var(--color-stone-950)' }),
  'border-b-(<custom-property>)': ([value]) => ({ borderBottomColor: `var(${value})` }),
  'border-b-[<value>]': ([value]) => ({ borderBottomColor: `"${value}"` }),
  'border-l-inherit': () => ({ borderLeftColor: 'inherit' }),
  'border-l-current': () => ({ borderLeftColor: 'currentColor' }),
  'border-l-transparent': () => ({ borderLeftColor: 'transparent' }),
  'border-l-black': () => ({ borderLeftColor: 'var(--color-black)' }),
  'border-l-white': () => ({ borderLeftColor: 'var(--color-white)' }),
  'border-l-red-50': () => ({ borderLeftColor: 'var(--color-red-50)' }),
  'border-l-red-100': () => ({ borderLeftColor: 'var(--color-red-100)' }),
  'border-l-red-200': () => ({ borderLeftColor: 'var(--color-red-200)' }),
  'border-l-red-300': () => ({ borderLeftColor: 'var(--color-red-300)' }),
  'border-l-red-400': () => ({ borderLeftColor: 'var(--color-red-400)' }),
  'border-l-red-500': () => ({ borderLeftColor: 'var(--color-red-500)' }),
  'border-l-red-600': () => ({ borderLeftColor: 'var(--color-red-600)' }),
  'border-l-red-700': () => ({ borderLeftColor: 'var(--color-red-700)' }),
  'border-l-red-800': () => ({ borderLeftColor: 'var(--color-red-800)' }),
  'border-l-red-900': () => ({ borderLeftColor: 'var(--color-red-900)' }),
  'border-l-red-950': () => ({ borderLeftColor: 'var(--color-red-950)' }),
  'border-l-orange-50': () => ({ borderLeftColor: 'var(--color-orange-50)' }),
  'border-l-orange-100': () => ({ borderLeftColor: 'var(--color-orange-100)' }),
  'border-l-orange-200': () => ({ borderLeftColor: 'var(--color-orange-200)' }),
  'border-l-orange-300': () => ({ borderLeftColor: 'var(--color-orange-300)' }),
  'border-l-orange-400': () => ({ borderLeftColor: 'var(--color-orange-400)' }),
  'border-l-orange-500': () => ({ borderLeftColor: 'var(--color-orange-500)' }),
  'border-l-orange-600': () => ({ borderLeftColor: 'var(--color-orange-600)' }),
  'border-l-orange-700': () => ({ borderLeftColor: 'var(--color-orange-700)' }),
  'border-l-orange-800': () => ({ borderLeftColor: 'var(--color-orange-800)' }),
  'border-l-orange-900': () => ({ borderLeftColor: 'var(--color-orange-900)' }),
  'border-l-orange-950': () => ({ borderLeftColor: 'var(--color-orange-950)' }),
  'border-l-amber-50': () => ({ borderLeftColor: 'var(--color-amber-50)' }),
  'border-l-amber-100': () => ({ borderLeftColor: 'var(--color-amber-100)' }),
  'border-l-amber-200': () => ({ borderLeftColor: 'var(--color-amber-200)' }),
  'border-l-amber-300': () => ({ borderLeftColor: 'var(--color-amber-300)' }),
  'border-l-amber-400': () => ({ borderLeftColor: 'var(--color-amber-400)' }),
  'border-l-amber-500': () => ({ borderLeftColor: 'var(--color-amber-500)' }),
  'border-l-amber-600': () => ({ borderLeftColor: 'var(--color-amber-600)' }),
  'border-l-amber-700': () => ({ borderLeftColor: 'var(--color-amber-700)' }),
  'border-l-amber-800': () => ({ borderLeftColor: 'var(--color-amber-800)' }),
  'border-l-amber-900': () => ({ borderLeftColor: 'var(--color-amber-900)' }),
  'border-l-amber-950': () => ({ borderLeftColor: 'var(--color-amber-950)' }),
  'border-l-yellow-50': () => ({ borderLeftColor: 'var(--color-yellow-50)' }),
  'border-l-yellow-100': () => ({ borderLeftColor: 'var(--color-yellow-100)' }),
  'border-l-yellow-200': () => ({ borderLeftColor: 'var(--color-yellow-200)' }),
  'border-l-yellow-300': () => ({ borderLeftColor: 'var(--color-yellow-300)' }),
  'border-l-yellow-400': () => ({ borderLeftColor: 'var(--color-yellow-400)' }),
  'border-l-yellow-500': () => ({ borderLeftColor: 'var(--color-yellow-500)' }),
  'border-l-yellow-600': () => ({ borderLeftColor: 'var(--color-yellow-600)' }),
  'border-l-yellow-700': () => ({ borderLeftColor: 'var(--color-yellow-700)' }),
  'border-l-yellow-800': () => ({ borderLeftColor: 'var(--color-yellow-800)' }),
  'border-l-yellow-900': () => ({ borderLeftColor: 'var(--color-yellow-900)' }),
  'border-l-yellow-950': () => ({ borderLeftColor: 'var(--color-yellow-950)' }),
  'border-l-lime-50': () => ({ borderLeftColor: 'var(--color-lime-50)' }),
  'border-l-lime-100': () => ({ borderLeftColor: 'var(--color-lime-100)' }),
  'border-l-lime-200': () => ({ borderLeftColor: 'var(--color-lime-200)' }),
  'border-l-lime-300': () => ({ borderLeftColor: 'var(--color-lime-300)' }),
  'border-l-lime-400': () => ({ borderLeftColor: 'var(--color-lime-400)' }),
  'border-l-lime-500': () => ({ borderLeftColor: 'var(--color-lime-500)' }),
  'border-l-lime-600': () => ({ borderLeftColor: 'var(--color-lime-600)' }),
  'border-l-lime-700': () => ({ borderLeftColor: 'var(--color-lime-700)' }),
  'border-l-lime-800': () => ({ borderLeftColor: 'var(--color-lime-800)' }),
  'border-l-lime-900': () => ({ borderLeftColor: 'var(--color-lime-900)' }),
  'border-l-lime-950': () => ({ borderLeftColor: 'var(--color-lime-950)' }),
  'border-l-green-50': () => ({ borderLeftColor: 'var(--color-green-50)' }),
  'border-l-green-100': () => ({ borderLeftColor: 'var(--color-green-100)' }),
  'border-l-green-200': () => ({ borderLeftColor: 'var(--color-green-200)' }),
  'border-l-green-300': () => ({ borderLeftColor: 'var(--color-green-300)' }),
  'border-l-green-400': () => ({ borderLeftColor: 'var(--color-green-400)' }),
  'border-l-green-500': () => ({ borderLeftColor: 'var(--color-green-500)' }),
  'border-l-green-600': () => ({ borderLeftColor: 'var(--color-green-600)' }),
  'border-l-green-700': () => ({ borderLeftColor: 'var(--color-green-700)' }),
  'border-l-green-800': () => ({ borderLeftColor: 'var(--color-green-800)' }),
  'border-l-green-900': () => ({ borderLeftColor: 'var(--color-green-900)' }),
  'border-l-green-950': () => ({ borderLeftColor: 'var(--color-green-950)' }),
  'border-l-emerald-50': () => ({ borderLeftColor: 'var(--color-emerald-50)' }),
  'border-l-emerald-100': () => ({ borderLeftColor: 'var(--color-emerald-100)' }),
  'border-l-emerald-200': () => ({ borderLeftColor: 'var(--color-emerald-200)' }),
  'border-l-emerald-300': () => ({ borderLeftColor: 'var(--color-emerald-300)' }),
  'border-l-emerald-400': () => ({ borderLeftColor: 'var(--color-emerald-400)' }),
  'border-l-emerald-500': () => ({ borderLeftColor: 'var(--color-emerald-500)' }),
  'border-l-emerald-600': () => ({ borderLeftColor: 'var(--color-emerald-600)' }),
  'border-l-emerald-700': () => ({ borderLeftColor: 'var(--color-emerald-700)' }),
  'border-l-emerald-800': () => ({ borderLeftColor: 'var(--color-emerald-800)' }),
  'border-l-emerald-900': () => ({ borderLeftColor: 'var(--color-emerald-900)' }),
  'border-l-emerald-950': () => ({ borderLeftColor: 'var(--color-emerald-950)' }),
  'border-l-teal-50': () => ({ borderLeftColor: 'var(--color-teal-50)' }),
  'border-l-teal-100': () => ({ borderLeftColor: 'var(--color-teal-100)' }),
  'border-l-teal-200': () => ({ borderLeftColor: 'var(--color-teal-200)' }),
  'border-l-teal-300': () => ({ borderLeftColor: 'var(--color-teal-300)' }),
  'border-l-teal-400': () => ({ borderLeftColor: 'var(--color-teal-400)' }),
  'border-l-teal-500': () => ({ borderLeftColor: 'var(--color-teal-500)' }),
  'border-l-teal-600': () => ({ borderLeftColor: 'var(--color-teal-600)' }),
  'border-l-teal-700': () => ({ borderLeftColor: 'var(--color-teal-700)' }),
  'border-l-teal-800': () => ({ borderLeftColor: 'var(--color-teal-800)' }),
  'border-l-teal-900': () => ({ borderLeftColor: 'var(--color-teal-900)' }),
  'border-l-teal-950': () => ({ borderLeftColor: 'var(--color-teal-950)' }),
  'border-l-cyan-50': () => ({ borderLeftColor: 'var(--color-cyan-50)' }),
  'border-l-cyan-100': () => ({ borderLeftColor: 'var(--color-cyan-100)' }),
  'border-l-cyan-200': () => ({ borderLeftColor: 'var(--color-cyan-200)' }),
  'border-l-cyan-300': () => ({ borderLeftColor: 'var(--color-cyan-300)' }),
  'border-l-cyan-400': () => ({ borderLeftColor: 'var(--color-cyan-400)' }),
  'border-l-cyan-500': () => ({ borderLeftColor: 'var(--color-cyan-500)' }),
  'border-l-cyan-600': () => ({ borderLeftColor: 'var(--color-cyan-600)' }),
  'border-l-cyan-700': () => ({ borderLeftColor: 'var(--color-cyan-700)' }),
  'border-l-cyan-800': () => ({ borderLeftColor: 'var(--color-cyan-800)' }),
  'border-l-cyan-900': () => ({ borderLeftColor: 'var(--color-cyan-900)' }),
  'border-l-cyan-950': () => ({ borderLeftColor: 'var(--color-cyan-950)' }),
  'border-l-sky-50': () => ({ borderLeftColor: 'var(--color-sky-50)' }),
  'border-l-sky-100': () => ({ borderLeftColor: 'var(--color-sky-100)' }),
  'border-l-sky-200': () => ({ borderLeftColor: 'var(--color-sky-200)' }),
  'border-l-sky-300': () => ({ borderLeftColor: 'var(--color-sky-300)' }),
  'border-l-sky-400': () => ({ borderLeftColor: 'var(--color-sky-400)' }),
  'border-l-sky-500': () => ({ borderLeftColor: 'var(--color-sky-500)' }),
  'border-l-sky-600': () => ({ borderLeftColor: 'var(--color-sky-600)' }),
  'border-l-sky-700': () => ({ borderLeftColor: 'var(--color-sky-700)' }),
  'border-l-sky-800': () => ({ borderLeftColor: 'var(--color-sky-800)' }),
  'border-l-sky-900': () => ({ borderLeftColor: 'var(--color-sky-900)' }),
  'border-l-sky-950': () => ({ borderLeftColor: 'var(--color-sky-950)' }),
  'border-l-blue-50': () => ({ borderLeftColor: 'var(--color-blue-50)' }),
  'border-l-blue-100': () => ({ borderLeftColor: 'var(--color-blue-100)' }),
  'border-l-blue-200': () => ({ borderLeftColor: 'var(--color-blue-200)' }),
  'border-l-blue-300': () => ({ borderLeftColor: 'var(--color-blue-300)' }),
  'border-l-blue-400': () => ({ borderLeftColor: 'var(--color-blue-400)' }),
  'border-l-blue-500': () => ({ borderLeftColor: 'var(--color-blue-500)' }),
  'border-l-blue-600': () => ({ borderLeftColor: 'var(--color-blue-600)' }),
  'border-l-blue-700': () => ({ borderLeftColor: 'var(--color-blue-700)' }),
  'border-l-blue-800': () => ({ borderLeftColor: 'var(--color-blue-800)' }),
  'border-l-blue-900': () => ({ borderLeftColor: 'var(--color-blue-900)' }),
  'border-l-blue-950': () => ({ borderLeftColor: 'var(--color-blue-950)' }),
  'border-l-indigo-50': () => ({ borderLeftColor: 'var(--color-indigo-50)' }),
  'border-l-indigo-100': () => ({ borderLeftColor: 'var(--color-indigo-100)' }),
  'border-l-indigo-200': () => ({ borderLeftColor: 'var(--color-indigo-200)' }),
  'border-l-indigo-300': () => ({ borderLeftColor: 'var(--color-indigo-300)' }),
  'border-l-indigo-400': () => ({ borderLeftColor: 'var(--color-indigo-400)' }),
  'border-l-indigo-500': () => ({ borderLeftColor: 'var(--color-indigo-500)' }),
  'border-l-indigo-600': () => ({ borderLeftColor: 'var(--color-indigo-600)' }),
  'border-l-indigo-700': () => ({ borderLeftColor: 'var(--color-indigo-700)' }),
  'border-l-indigo-800': () => ({ borderLeftColor: 'var(--color-indigo-800)' }),
  'border-l-indigo-900': () => ({ borderLeftColor: 'var(--color-indigo-900)' }),
  'border-l-indigo-950': () => ({ borderLeftColor: 'var(--color-indigo-950)' }),
  'border-l-violet-50': () => ({ borderLeftColor: 'var(--color-violet-50)' }),
  'border-l-violet-100': () => ({ borderLeftColor: 'var(--color-violet-100)' }),
  'border-l-violet-200': () => ({ borderLeftColor: 'var(--color-violet-200)' }),
  'border-l-violet-300': () => ({ borderLeftColor: 'var(--color-violet-300)' }),
  'border-l-violet-400': () => ({ borderLeftColor: 'var(--color-violet-400)' }),
  'border-l-violet-500': () => ({ borderLeftColor: 'var(--color-violet-500)' }),
  'border-l-violet-600': () => ({ borderLeftColor: 'var(--color-violet-600)' }),
  'border-l-violet-700': () => ({ borderLeftColor: 'var(--color-violet-700)' }),
  'border-l-violet-800': () => ({ borderLeftColor: 'var(--color-violet-800)' }),
  'border-l-violet-900': () => ({ borderLeftColor: 'var(--color-violet-900)' }),
  'border-l-violet-950': () => ({ borderLeftColor: 'var(--color-violet-950)' }),
  'border-l-purple-50': () => ({ borderLeftColor: 'var(--color-purple-50)' }),
  'border-l-purple-100': () => ({ borderLeftColor: 'var(--color-purple-100)' }),
  'border-l-purple-200': () => ({ borderLeftColor: 'var(--color-purple-200)' }),
  'border-l-purple-300': () => ({ borderLeftColor: 'var(--color-purple-300)' }),
  'border-l-purple-400': () => ({ borderLeftColor: 'var(--color-purple-400)' }),
  'border-l-purple-500': () => ({ borderLeftColor: 'var(--color-purple-500)' }),
  'border-l-purple-600': () => ({ borderLeftColor: 'var(--color-purple-600)' }),
  'border-l-purple-700': () => ({ borderLeftColor: 'var(--color-purple-700)' }),
  'border-l-purple-800': () => ({ borderLeftColor: 'var(--color-purple-800)' }),
  'border-l-purple-900': () => ({ borderLeftColor: 'var(--color-purple-900)' }),
  'border-l-purple-950': () => ({ borderLeftColor: 'var(--color-purple-950)' }),
  'border-l-fuchsia-50': () => ({ borderLeftColor: 'var(--color-fuchsia-50)' }),
  'border-l-fuchsia-100': () => ({ borderLeftColor: 'var(--color-fuchsia-100)' }),
  'border-l-fuchsia-200': () => ({ borderLeftColor: 'var(--color-fuchsia-200)' }),
  'border-l-fuchsia-300': () => ({ borderLeftColor: 'var(--color-fuchsia-300)' }),
  'border-l-fuchsia-400': () => ({ borderLeftColor: 'var(--color-fuchsia-400)' }),
  'border-l-fuchsia-500': () => ({ borderLeftColor: 'var(--color-fuchsia-500)' }),
  'border-l-fuchsia-600': () => ({ borderLeftColor: 'var(--color-fuchsia-600)' }),
  'border-l-fuchsia-700': () => ({ borderLeftColor: 'var(--color-fuchsia-700)' }),
  'border-l-fuchsia-800': () => ({ borderLeftColor: 'var(--color-fuchsia-800)' }),
  'border-l-fuchsia-900': () => ({ borderLeftColor: 'var(--color-fuchsia-900)' }),
  'border-l-fuchsia-950': () => ({ borderLeftColor: 'var(--color-fuchsia-950)' }),
  'border-l-pink-50': () => ({ borderLeftColor: 'var(--color-pink-50)' }),
  'border-l-pink-100': () => ({ borderLeftColor: 'var(--color-pink-100)' }),
  'border-l-pink-200': () => ({ borderLeftColor: 'var(--color-pink-200)' }),
  'border-l-pink-300': () => ({ borderLeftColor: 'var(--color-pink-300)' }),
  'border-l-pink-400': () => ({ borderLeftColor: 'var(--color-pink-400)' }),
  'border-l-pink-500': () => ({ borderLeftColor: 'var(--color-pink-500)' }),
  'border-l-pink-600': () => ({ borderLeftColor: 'var(--color-pink-600)' }),
  'border-l-pink-700': () => ({ borderLeftColor: 'var(--color-pink-700)' }),
  'border-l-pink-800': () => ({ borderLeftColor: 'var(--color-pink-800)' }),
  'border-l-pink-900': () => ({ borderLeftColor: 'var(--color-pink-900)' }),
  'border-l-pink-950': () => ({ borderLeftColor: 'var(--color-pink-950)' }),
  'border-l-rose-50': () => ({ borderLeftColor: 'var(--color-rose-50)' }),
  'border-l-rose-100': () => ({ borderLeftColor: 'var(--color-rose-100)' }),
  'border-l-rose-200': () => ({ borderLeftColor: 'var(--color-rose-200)' }),
  'border-l-rose-300': () => ({ borderLeftColor: 'var(--color-rose-300)' }),
  'border-l-rose-400': () => ({ borderLeftColor: 'var(--color-rose-400)' }),
  'border-l-rose-500': () => ({ borderLeftColor: 'var(--color-rose-500)' }),
  'border-l-rose-600': () => ({ borderLeftColor: 'var(--color-rose-600)' }),
  'border-l-rose-700': () => ({ borderLeftColor: 'var(--color-rose-700)' }),
  'border-l-rose-800': () => ({ borderLeftColor: 'var(--color-rose-800)' }),
  'border-l-rose-900': () => ({ borderLeftColor: 'var(--color-rose-900)' }),
  'border-l-rose-950': () => ({ borderLeftColor: 'var(--color-rose-950)' }),
  'border-l-slate-50': () => ({ borderLeftColor: 'var(--color-slate-50)' }),
  'border-l-slate-100': () => ({ borderLeftColor: 'var(--color-slate-100)' }),
  'border-l-slate-200': () => ({ borderLeftColor: 'var(--color-slate-200)' }),
  'border-l-slate-300': () => ({ borderLeftColor: 'var(--color-slate-300)' }),
  'border-l-slate-400': () => ({ borderLeftColor: 'var(--color-slate-400)' }),
  'border-l-slate-500': () => ({ borderLeftColor: 'var(--color-slate-500)' }),
  'border-l-slate-600': () => ({ borderLeftColor: 'var(--color-slate-600)' }),
  'border-l-slate-700': () => ({ borderLeftColor: 'var(--color-slate-700)' }),
  'border-l-slate-800': () => ({ borderLeftColor: 'var(--color-slate-800)' }),
  'border-l-slate-900': () => ({ borderLeftColor: 'var(--color-slate-900)' }),
  'border-l-slate-950': () => ({ borderLeftColor: 'var(--color-slate-950)' }),
  'border-l-gray-50': () => ({ borderLeftColor: 'var(--color-gray-50)' }),
  'border-l-gray-100': () => ({ borderLeftColor: 'var(--color-gray-100)' }),
  'border-l-gray-200': () => ({ borderLeftColor: 'var(--color-gray-200)' }),
  'border-l-gray-300': () => ({ borderLeftColor: 'var(--color-gray-300)' }),
  'border-l-gray-400': () => ({ borderLeftColor: 'var(--color-gray-400)' }),
  'border-l-gray-500': () => ({ borderLeftColor: 'var(--color-gray-500)' }),
  'border-l-gray-600': () => ({ borderLeftColor: 'var(--color-gray-600)' }),
  'border-l-gray-700': () => ({ borderLeftColor: 'var(--color-gray-700)' }),
  'border-l-gray-800': () => ({ borderLeftColor: 'var(--color-gray-800)' }),
  'border-l-gray-900': () => ({ borderLeftColor: 'var(--color-gray-900)' }),
  'border-l-gray-950': () => ({ borderLeftColor: 'var(--color-gray-950)' }),
  'border-l-zinc-50': () => ({ borderLeftColor: 'var(--color-zinc-50)' }),
  'border-l-zinc-100': () => ({ borderLeftColor: 'var(--color-zinc-100)' }),
  'border-l-zinc-200': () => ({ borderLeftColor: 'var(--color-zinc-200)' }),
  'border-l-zinc-300': () => ({ borderLeftColor: 'var(--color-zinc-300)' }),
  'border-l-zinc-400': () => ({ borderLeftColor: 'var(--color-zinc-400)' }),
  'border-l-zinc-500': () => ({ borderLeftColor: 'var(--color-zinc-500)' }),
  'border-l-zinc-600': () => ({ borderLeftColor: 'var(--color-zinc-600)' }),
  'border-l-zinc-700': () => ({ borderLeftColor: 'var(--color-zinc-700)' }),
  'border-l-zinc-800': () => ({ borderLeftColor: 'var(--color-zinc-800)' }),
  'border-l-zinc-900': () => ({ borderLeftColor: 'var(--color-zinc-900)' }),
  'border-l-zinc-950': () => ({ borderLeftColor: 'var(--color-zinc-950)' }),
  'border-l-neutral-50': () => ({ borderLeftColor: 'var(--color-neutral-50)' }),
  'border-l-neutral-100': () => ({ borderLeftColor: 'var(--color-neutral-100)' }),
  'border-l-neutral-200': () => ({ borderLeftColor: 'var(--color-neutral-200)' }),
  'border-l-neutral-300': () => ({ borderLeftColor: 'var(--color-neutral-300)' }),
  'border-l-neutral-400': () => ({ borderLeftColor: 'var(--color-neutral-400)' }),
  'border-l-neutral-500': () => ({ borderLeftColor: 'var(--color-neutral-500)' }),
  'border-l-neutral-600': () => ({ borderLeftColor: 'var(--color-neutral-600)' }),
  'border-l-neutral-700': () => ({ borderLeftColor: 'var(--color-neutral-700)' }),
  'border-l-neutral-800': () => ({ borderLeftColor: 'var(--color-neutral-800)' }),
  'border-l-neutral-900': () => ({ borderLeftColor: 'var(--color-neutral-900)' }),
  'border-l-neutral-950': () => ({ borderLeftColor: 'var(--color-neutral-950)' }),
  'border-l-stone-50': () => ({ borderLeftColor: 'var(--color-stone-50)' }),
  'border-l-stone-100': () => ({ borderLeftColor: 'var(--color-stone-100)' }),
  'border-l-stone-200': () => ({ borderLeftColor: 'var(--color-stone-200)' }),
  'border-l-stone-300': () => ({ borderLeftColor: 'var(--color-stone-300)' }),
  'border-l-stone-400': () => ({ borderLeftColor: 'var(--color-stone-400)' }),
  'border-l-stone-500': () => ({ borderLeftColor: 'var(--color-stone-500)' }),
  'border-l-stone-600': () => ({ borderLeftColor: 'var(--color-stone-600)' }),
  'border-l-stone-700': () => ({ borderLeftColor: 'var(--color-stone-700)' }),
  'border-l-stone-800': () => ({ borderLeftColor: 'var(--color-stone-800)' }),
  'border-l-stone-900': () => ({ borderLeftColor: 'var(--color-stone-900)' }),
  'border-l-stone-950': () => ({ borderLeftColor: 'var(--color-stone-950)' }),
  'border-l-(<custom-property>)': ([value]) => ({ borderLeftColor: `var(${value})` }),
  'border-l-[<value>]': ([value]) => ({ borderLeftColor: `"${value}"` }),
  'divide-inherit': () => {
    throw new Error('divide-inherit is not supported')
  },
  'divide-current': () => {
    throw new Error('divide-current is not supported')
  },
  'divide-transparent': () => {
    throw new Error('divide-transparent is not supported')
  },
  'divide-black': () => {
    throw new Error('divide-black is not supported')
  },
  'divide-white': () => {
    throw new Error('divide-white is not supported')
  },
  'divide-red-50': () => {
    throw new Error('divide-red-50 is not supported')
  },
  'divide-red-100': () => {
    throw new Error('divide-red-100 is not supported')
  },
  'divide-red-200': () => {
    throw new Error('divide-red-200 is not supported')
  },
  'divide-red-300': () => {
    throw new Error('divide-red-300 is not supported')
  },
  'divide-red-400': () => {
    throw new Error('divide-red-400 is not supported')
  },
  'divide-red-500': () => {
    throw new Error('divide-red-500 is not supported')
  },
  'divide-red-600': () => {
    throw new Error('divide-red-600 is not supported')
  },
  'divide-red-700': () => {
    throw new Error('divide-red-700 is not supported')
  },
  'divide-red-800': () => {
    throw new Error('divide-red-800 is not supported')
  },
  'divide-red-900': () => {
    throw new Error('divide-red-900 is not supported')
  },
  'divide-red-950': () => {
    throw new Error('divide-red-950 is not supported')
  },
  'divide-orange-50': () => {
    throw new Error('divide-orange-50 is not supported')
  },
  'divide-orange-100': () => {
    throw new Error('divide-orange-100 is not supported')
  },
  'divide-orange-200': () => {
    throw new Error('divide-orange-200 is not supported')
  },
  'divide-orange-300': () => {
    throw new Error('divide-orange-300 is not supported')
  },
  'divide-orange-400': () => {
    throw new Error('divide-orange-400 is not supported')
  },
  'divide-orange-500': () => {
    throw new Error('divide-orange-500 is not supported')
  },
  'divide-orange-600': () => {
    throw new Error('divide-orange-600 is not supported')
  },
  'divide-orange-700': () => {
    throw new Error('divide-orange-700 is not supported')
  },
  'divide-orange-800': () => {
    throw new Error('divide-orange-800 is not supported')
  },
  'divide-orange-900': () => {
    throw new Error('divide-orange-900 is not supported')
  },
  'divide-orange-950': () => {
    throw new Error('divide-orange-950 is not supported')
  },
  'divide-amber-50': () => {
    throw new Error('divide-amber-50 is not supported')
  },
  'divide-amber-100': () => {
    throw new Error('divide-amber-100 is not supported')
  },
  'divide-amber-200': () => {
    throw new Error('divide-amber-200 is not supported')
  },
  'divide-amber-300': () => {
    throw new Error('divide-amber-300 is not supported')
  },
  'divide-amber-400': () => {
    throw new Error('divide-amber-400 is not supported')
  },
  'divide-amber-500': () => {
    throw new Error('divide-amber-500 is not supported')
  },
  'divide-amber-600': () => {
    throw new Error('divide-amber-600 is not supported')
  },
  'divide-amber-700': () => {
    throw new Error('divide-amber-700 is not supported')
  },
  'divide-amber-800': () => {
    throw new Error('divide-amber-800 is not supported')
  },
  'divide-amber-900': () => {
    throw new Error('divide-amber-900 is not supported')
  },
  'divide-amber-950': () => {
    throw new Error('divide-amber-950 is not supported')
  },
  'divide-yellow-50': () => {
    throw new Error('divide-yellow-50 is not supported')
  },
  'divide-yellow-100': () => {
    throw new Error('divide-yellow-100 is not supported')
  },
  'divide-yellow-200': () => {
    throw new Error('divide-yellow-200 is not supported')
  },
  'divide-yellow-300': () => {
    throw new Error('divide-yellow-300 is not supported')
  },
  'divide-yellow-400': () => {
    throw new Error('divide-yellow-400 is not supported')
  },
  'divide-yellow-500': () => {
    throw new Error('divide-yellow-500 is not supported')
  },
  'divide-yellow-600': () => {
    throw new Error('divide-yellow-600 is not supported')
  },
  'divide-yellow-700': () => {
    throw new Error('divide-yellow-700 is not supported')
  },
  'divide-yellow-800': () => {
    throw new Error('divide-yellow-800 is not supported')
  },
  'divide-yellow-900': () => {
    throw new Error('divide-yellow-900 is not supported')
  },
  'divide-yellow-950': () => {
    throw new Error('divide-yellow-950 is not supported')
  },
  'divide-lime-50': () => {
    throw new Error('divide-lime-50 is not supported')
  },
  'divide-lime-100': () => {
    throw new Error('divide-lime-100 is not supported')
  },
  'divide-lime-200': () => {
    throw new Error('divide-lime-200 is not supported')
  },
  'divide-lime-300': () => {
    throw new Error('divide-lime-300 is not supported')
  },
  'divide-lime-400': () => {
    throw new Error('divide-lime-400 is not supported')
  },
  'divide-lime-500': () => {
    throw new Error('divide-lime-500 is not supported')
  },
  'divide-lime-600': () => {
    throw new Error('divide-lime-600 is not supported')
  },
  'divide-lime-700': () => {
    throw new Error('divide-lime-700 is not supported')
  },
  'divide-lime-800': () => {
    throw new Error('divide-lime-800 is not supported')
  },
  'divide-lime-900': () => {
    throw new Error('divide-lime-900 is not supported')
  },
  'divide-lime-950': () => {
    throw new Error('divide-lime-950 is not supported')
  },
  'divide-green-50': () => {
    throw new Error('divide-green-50 is not supported')
  },
  'divide-green-100': () => {
    throw new Error('divide-green-100 is not supported')
  },
  'divide-green-200': () => {
    throw new Error('divide-green-200 is not supported')
  },
  'divide-green-300': () => {
    throw new Error('divide-green-300 is not supported')
  },
  'divide-green-400': () => {
    throw new Error('divide-green-400 is not supported')
  },
  'divide-green-500': () => {
    throw new Error('divide-green-500 is not supported')
  },
  'divide-green-600': () => {
    throw new Error('divide-green-600 is not supported')
  },
  'divide-green-700': () => {
    throw new Error('divide-green-700 is not supported')
  },
  'divide-green-800': () => {
    throw new Error('divide-green-800 is not supported')
  },
  'divide-green-900': () => {
    throw new Error('divide-green-900 is not supported')
  },
  'divide-green-950': () => {
    throw new Error('divide-green-950 is not supported')
  },
  'divide-emerald-50': () => {
    throw new Error('divide-emerald-50 is not supported')
  },
  'divide-emerald-100': () => {
    throw new Error('divide-emerald-100 is not supported')
  },
  'divide-emerald-200': () => {
    throw new Error('divide-emerald-200 is not supported')
  },
  'divide-emerald-300': () => {
    throw new Error('divide-emerald-300 is not supported')
  },
  'divide-emerald-400': () => {
    throw new Error('divide-emerald-400 is not supported')
  },
  'divide-emerald-500': () => {
    throw new Error('divide-emerald-500 is not supported')
  },
  'divide-emerald-600': () => {
    throw new Error('divide-emerald-600 is not supported')
  },
  'divide-emerald-700': () => {
    throw new Error('divide-emerald-700 is not supported')
  },
  'divide-emerald-800': () => {
    throw new Error('divide-emerald-800 is not supported')
  },
  'divide-emerald-900': () => {
    throw new Error('divide-emerald-900 is not supported')
  },
  'divide-emerald-950': () => {
    throw new Error('divide-emerald-950 is not supported')
  },
  'divide-teal-50': () => {
    throw new Error('divide-teal-50 is not supported')
  },
  'divide-teal-100': () => {
    throw new Error('divide-teal-100 is not supported')
  },
  'divide-teal-200': () => {
    throw new Error('divide-teal-200 is not supported')
  },
  'divide-teal-300': () => {
    throw new Error('divide-teal-300 is not supported')
  },
  'divide-teal-400': () => {
    throw new Error('divide-teal-400 is not supported')
  },
  'divide-teal-500': () => {
    throw new Error('divide-teal-500 is not supported')
  },
  'divide-teal-600': () => {
    throw new Error('divide-teal-600 is not supported')
  },
  'divide-teal-700': () => {
    throw new Error('divide-teal-700 is not supported')
  },
  'divide-teal-800': () => {
    throw new Error('divide-teal-800 is not supported')
  },
  'divide-teal-900': () => {
    throw new Error('divide-teal-900 is not supported')
  },
  'divide-teal-950': () => {
    throw new Error('divide-teal-950 is not supported')
  },
  'divide-cyan-50': () => {
    throw new Error('divide-cyan-50 is not supported')
  },
  'divide-cyan-100': () => {
    throw new Error('divide-cyan-100 is not supported')
  },
  'divide-cyan-200': () => {
    throw new Error('divide-cyan-200 is not supported')
  },
  'divide-cyan-300': () => {
    throw new Error('divide-cyan-300 is not supported')
  },
  'divide-cyan-400': () => {
    throw new Error('divide-cyan-400 is not supported')
  },
  'divide-cyan-500': () => {
    throw new Error('divide-cyan-500 is not supported')
  },
  'divide-cyan-600': () => {
    throw new Error('divide-cyan-600 is not supported')
  },
  'divide-cyan-700': () => {
    throw new Error('divide-cyan-700 is not supported')
  },
  'divide-cyan-800': () => {
    throw new Error('divide-cyan-800 is not supported')
  },
  'divide-cyan-900': () => {
    throw new Error('divide-cyan-900 is not supported')
  },
  'divide-cyan-950': () => {
    throw new Error('divide-cyan-950 is not supported')
  },
  'divide-sky-50': () => {
    throw new Error('divide-sky-50 is not supported')
  },
  'divide-sky-100': () => {
    throw new Error('divide-sky-100 is not supported')
  },
  'divide-sky-200': () => {
    throw new Error('divide-sky-200 is not supported')
  },
  'divide-sky-300': () => {
    throw new Error('divide-sky-300 is not supported')
  },
  'divide-sky-400': () => {
    throw new Error('divide-sky-400 is not supported')
  },
  'divide-sky-500': () => {
    throw new Error('divide-sky-500 is not supported')
  },
  'divide-sky-600': () => {
    throw new Error('divide-sky-600 is not supported')
  },
  'divide-sky-700': () => {
    throw new Error('divide-sky-700 is not supported')
  },
  'divide-sky-800': () => {
    throw new Error('divide-sky-800 is not supported')
  },
  'divide-sky-900': () => {
    throw new Error('divide-sky-900 is not supported')
  },
  'divide-sky-950': () => {
    throw new Error('divide-sky-950 is not supported')
  },
  'divide-blue-50': () => {
    throw new Error('divide-blue-50 is not supported')
  },
  'divide-blue-100': () => {
    throw new Error('divide-blue-100 is not supported')
  },
  'divide-blue-200': () => {
    throw new Error('divide-blue-200 is not supported')
  },
  'divide-blue-300': () => {
    throw new Error('divide-blue-300 is not supported')
  },
  'divide-blue-400': () => {
    throw new Error('divide-blue-400 is not supported')
  },
  'divide-blue-500': () => {
    throw new Error('divide-blue-500 is not supported')
  },
  'divide-blue-600': () => {
    throw new Error('divide-blue-600 is not supported')
  },
  'divide-blue-700': () => {
    throw new Error('divide-blue-700 is not supported')
  },
  'divide-blue-800': () => {
    throw new Error('divide-blue-800 is not supported')
  },
  'divide-blue-900': () => {
    throw new Error('divide-blue-900 is not supported')
  },
  'divide-blue-950': () => {
    throw new Error('divide-blue-950 is not supported')
  },
  'divide-indigo-50': () => {
    throw new Error('divide-indigo-50 is not supported')
  },
  'divide-indigo-100': () => {
    throw new Error('divide-indigo-100 is not supported')
  },
  'divide-indigo-200': () => {
    throw new Error('divide-indigo-200 is not supported')
  },
  'divide-indigo-300': () => {
    throw new Error('divide-indigo-300 is not supported')
  },
  'divide-indigo-400': () => {
    throw new Error('divide-indigo-400 is not supported')
  },
  'divide-indigo-500': () => {
    throw new Error('divide-indigo-500 is not supported')
  },
  'divide-indigo-600': () => {
    throw new Error('divide-indigo-600 is not supported')
  },
  'divide-indigo-700': () => {
    throw new Error('divide-indigo-700 is not supported')
  },
  'divide-indigo-800': () => {
    throw new Error('divide-indigo-800 is not supported')
  },
  'divide-indigo-900': () => {
    throw new Error('divide-indigo-900 is not supported')
  },
  'divide-indigo-950': () => {
    throw new Error('divide-indigo-950 is not supported')
  },
  'divide-violet-50': () => {
    throw new Error('divide-violet-50 is not supported')
  },
  'divide-violet-100': () => {
    throw new Error('divide-violet-100 is not supported')
  },
  'divide-violet-200': () => {
    throw new Error('divide-violet-200 is not supported')
  },
  'divide-violet-300': () => {
    throw new Error('divide-violet-300 is not supported')
  },
  'divide-violet-400': () => {
    throw new Error('divide-violet-400 is not supported')
  },
  'divide-violet-500': () => {
    throw new Error('divide-violet-500 is not supported')
  },
  'divide-violet-600': () => {
    throw new Error('divide-violet-600 is not supported')
  },
  'divide-violet-700': () => {
    throw new Error('divide-violet-700 is not supported')
  },
  'divide-violet-800': () => {
    throw new Error('divide-violet-800 is not supported')
  },
  'divide-violet-900': () => {
    throw new Error('divide-violet-900 is not supported')
  },
  'divide-violet-950': () => {
    throw new Error('divide-violet-950 is not supported')
  },
  'divide-purple-50': () => {
    throw new Error('divide-purple-50 is not supported')
  },
  'divide-purple-100': () => {
    throw new Error('divide-purple-100 is not supported')
  },
  'divide-purple-200': () => {
    throw new Error('divide-purple-200 is not supported')
  },
  'divide-purple-300': () => {
    throw new Error('divide-purple-300 is not supported')
  },
  'divide-purple-400': () => {
    throw new Error('divide-purple-400 is not supported')
  },
  'divide-purple-500': () => {
    throw new Error('divide-purple-500 is not supported')
  },
  'divide-purple-600': () => {
    throw new Error('divide-purple-600 is not supported')
  },
  'divide-purple-700': () => {
    throw new Error('divide-purple-700 is not supported')
  },
  'divide-purple-800': () => {
    throw new Error('divide-purple-800 is not supported')
  },
  'divide-purple-900': () => {
    throw new Error('divide-purple-900 is not supported')
  },
  'divide-purple-950': () => {
    throw new Error('divide-purple-950 is not supported')
  },
  'divide-fuchsia-50': () => {
    throw new Error('divide-fuchsia-50 is not supported')
  },
  'divide-fuchsia-100': () => {
    throw new Error('divide-fuchsia-100 is not supported')
  },
  'divide-fuchsia-200': () => {
    throw new Error('divide-fuchsia-200 is not supported')
  },
  'divide-fuchsia-300': () => {
    throw new Error('divide-fuchsia-300 is not supported')
  },
  'divide-fuchsia-400': () => {
    throw new Error('divide-fuchsia-400 is not supported')
  },
  'divide-fuchsia-500': () => {
    throw new Error('divide-fuchsia-500 is not supported')
  },
  'divide-fuchsia-600': () => {
    throw new Error('divide-fuchsia-600 is not supported')
  },
  'divide-fuchsia-700': () => {
    throw new Error('divide-fuchsia-700 is not supported')
  },
  'divide-fuchsia-800': () => {
    throw new Error('divide-fuchsia-800 is not supported')
  },
  'divide-fuchsia-900': () => {
    throw new Error('divide-fuchsia-900 is not supported')
  },
  'divide-fuchsia-950': () => {
    throw new Error('divide-fuchsia-950 is not supported')
  },
  'divide-pink-50': () => {
    throw new Error('divide-pink-50 is not supported')
  },
  'divide-pink-100': () => {
    throw new Error('divide-pink-100 is not supported')
  },
  'divide-pink-200': () => {
    throw new Error('divide-pink-200 is not supported')
  },
  'divide-pink-300': () => {
    throw new Error('divide-pink-300 is not supported')
  },
  'divide-pink-400': () => {
    throw new Error('divide-pink-400 is not supported')
  },
  'divide-pink-500': () => {
    throw new Error('divide-pink-500 is not supported')
  },
  'divide-pink-600': () => {
    throw new Error('divide-pink-600 is not supported')
  },
  'divide-pink-700': () => {
    throw new Error('divide-pink-700 is not supported')
  },
  'divide-pink-800': () => {
    throw new Error('divide-pink-800 is not supported')
  },
  'divide-pink-900': () => {
    throw new Error('divide-pink-900 is not supported')
  },
  'divide-pink-950': () => {
    throw new Error('divide-pink-950 is not supported')
  },
  'divide-rose-50': () => {
    throw new Error('divide-rose-50 is not supported')
  },
  'divide-rose-100': () => {
    throw new Error('divide-rose-100 is not supported')
  },
  'divide-rose-200': () => {
    throw new Error('divide-rose-200 is not supported')
  },
  'divide-rose-300': () => {
    throw new Error('divide-rose-300 is not supported')
  },
  'divide-rose-400': () => {
    throw new Error('divide-rose-400 is not supported')
  },
  'divide-rose-500': () => {
    throw new Error('divide-rose-500 is not supported')
  },
  'divide-rose-600': () => {
    throw new Error('divide-rose-600 is not supported')
  },
  'divide-rose-700': () => {
    throw new Error('divide-rose-700 is not supported')
  },
  'divide-rose-800': () => {
    throw new Error('divide-rose-800 is not supported')
  },
  'divide-rose-900': () => {
    throw new Error('divide-rose-900 is not supported')
  },
  'divide-rose-950': () => {
    throw new Error('divide-rose-950 is not supported')
  },
  'divide-slate-50': () => {
    throw new Error('divide-slate-50 is not supported')
  },
  'divide-slate-100': () => {
    throw new Error('divide-slate-100 is not supported')
  },
  'divide-slate-200': () => {
    throw new Error('divide-slate-200 is not supported')
  },
  'divide-slate-300': () => {
    throw new Error('divide-slate-300 is not supported')
  },
  'divide-slate-400': () => {
    throw new Error('divide-slate-400 is not supported')
  },
  'divide-slate-500': () => {
    throw new Error('divide-slate-500 is not supported')
  },
  'divide-slate-600': () => {
    throw new Error('divide-slate-600 is not supported')
  },
  'divide-slate-700': () => {
    throw new Error('divide-slate-700 is not supported')
  },
  'divide-slate-800': () => {
    throw new Error('divide-slate-800 is not supported')
  },
  'divide-slate-900': () => {
    throw new Error('divide-slate-900 is not supported')
  },
  'divide-slate-950': () => {
    throw new Error('divide-slate-950 is not supported')
  },
  'divide-gray-50': () => {
    throw new Error('divide-gray-50 is not supported')
  },
  'divide-gray-100': () => {
    throw new Error('divide-gray-100 is not supported')
  },
  'divide-gray-200': () => {
    throw new Error('divide-gray-200 is not supported')
  },
  'divide-gray-300': () => {
    throw new Error('divide-gray-300 is not supported')
  },
  'divide-gray-400': () => {
    throw new Error('divide-gray-400 is not supported')
  },
  'divide-gray-500': () => {
    throw new Error('divide-gray-500 is not supported')
  },
  'divide-gray-600': () => {
    throw new Error('divide-gray-600 is not supported')
  },
  'divide-gray-700': () => {
    throw new Error('divide-gray-700 is not supported')
  },
  'divide-gray-800': () => {
    throw new Error('divide-gray-800 is not supported')
  },
  'divide-gray-900': () => {
    throw new Error('divide-gray-900 is not supported')
  },
  'divide-gray-950': () => {
    throw new Error('divide-gray-950 is not supported')
  },
  'divide-zinc-50': () => {
    throw new Error('divide-zinc-50 is not supported')
  },
  'divide-zinc-100': () => {
    throw new Error('divide-zinc-100 is not supported')
  },
  'divide-zinc-200': () => {
    throw new Error('divide-zinc-200 is not supported')
  },
  'divide-zinc-300': () => {
    throw new Error('divide-zinc-300 is not supported')
  },
  'divide-zinc-400': () => {
    throw new Error('divide-zinc-400 is not supported')
  },
  'divide-zinc-500': () => {
    throw new Error('divide-zinc-500 is not supported')
  },
  'divide-zinc-600': () => {
    throw new Error('divide-zinc-600 is not supported')
  },
  'divide-zinc-700': () => {
    throw new Error('divide-zinc-700 is not supported')
  },
  'divide-zinc-800': () => {
    throw new Error('divide-zinc-800 is not supported')
  },
  'divide-zinc-900': () => {
    throw new Error('divide-zinc-900 is not supported')
  },
  'divide-zinc-950': () => {
    throw new Error('divide-zinc-950 is not supported')
  },
  'divide-neutral-50': () => {
    throw new Error('divide-neutral-50 is not supported')
  },
  'divide-neutral-100': () => {
    throw new Error('divide-neutral-100 is not supported')
  },
  'divide-neutral-200': () => {
    throw new Error('divide-neutral-200 is not supported')
  },
  'divide-neutral-300': () => {
    throw new Error('divide-neutral-300 is not supported')
  },
  'divide-neutral-400': () => {
    throw new Error('divide-neutral-400 is not supported')
  },
  'divide-neutral-500': () => {
    throw new Error('divide-neutral-500 is not supported')
  },
  'divide-neutral-600': () => {
    throw new Error('divide-neutral-600 is not supported')
  },
  'divide-neutral-700': () => {
    throw new Error('divide-neutral-700 is not supported')
  },
  'divide-neutral-800': () => {
    throw new Error('divide-neutral-800 is not supported')
  },
  'divide-neutral-900': () => {
    throw new Error('divide-neutral-900 is not supported')
  },
  'divide-neutral-950': () => {
    throw new Error('divide-neutral-950 is not supported')
  },
  'divide-stone-50': () => {
    throw new Error('divide-stone-50 is not supported')
  },
  'divide-stone-100': () => {
    throw new Error('divide-stone-100 is not supported')
  },
  'divide-stone-200': () => {
    throw new Error('divide-stone-200 is not supported')
  },
  'divide-stone-300': () => {
    throw new Error('divide-stone-300 is not supported')
  },
  'divide-stone-400': () => {
    throw new Error('divide-stone-400 is not supported')
  },
  'divide-stone-500': () => {
    throw new Error('divide-stone-500 is not supported')
  },
  'divide-stone-600': () => {
    throw new Error('divide-stone-600 is not supported')
  },
  'divide-stone-700': () => {
    throw new Error('divide-stone-700 is not supported')
  },
  'divide-stone-800': () => {
    throw new Error('divide-stone-800 is not supported')
  },
  'divide-stone-900': () => {
    throw new Error('divide-stone-900 is not supported')
  },
  'divide-stone-950': () => {
    throw new Error('divide-stone-950 is not supported')
  },
  'divide-(<custom-property>)': () => {
    throw new Error('divide-(<custom-property>) is not supported')
  },
  'divide-[<value>]': () => {
    throw new Error('divide-[<value>] is not supported')
  },

  // border-style
  'border-solid': () => ({ borderStyle: 'solid' }),
  'border-dashed': () => ({ borderStyle: 'dashed' }),
  'border-dotted': () => ({ borderStyle: 'dotted' }),
  'border-double': () => ({ borderStyle: 'double' }),
  'border-hidden': () => ({ borderStyle: 'hidden' }),
  'border-none': () => ({ borderStyle: 'none' }),
  'divide-solid': () => {
    throw new Error('divide-solid is not supported')
  },
  'divide-dashed': () => {
    throw new Error('divide-dashed is not supported')
  },
  'divide-dotted': () => {
    throw new Error('divide-dotted is not supported')
  },
  'divide-double': () => {
    throw new Error('divide-double is not supported')
  },
  'divide-hidden': () => {
    throw new Error('divide-hidden is not supported')
  },
  'divide-none': () => {
    throw new Error('divide-none is not supported')
  },

  // outline-width
  outline: () => ({ outlineWidth: '1px' }),
  'outline-<number>': ([value]) => ({ outlineWidth: `${value}px` }),
  'outline-(length:<custom-property>)': ([value]) => ({ outlineWidth: `var(${value})` }),
  'outline-[<size>]': ([value]) => ({ outlineWidth: `"${value}"` }),

  // outline-color
  'outline-inherit': () => ({ outlineColor: 'inherit' }),
  'outline-current': () => ({ outlineColor: 'currentColor' }),
  'outline-transparent': () => ({ outlineColor: 'transparent' }),
  'outline-black': () => ({ outlineColor: 'var(--color-black)' }),
  'outline-white': () => ({ outlineColor: 'var(--color-white)' }),
  'outline-red-50': () => ({ outlineColor: 'var(--color-red-50)' }),
  'outline-red-100': () => ({ outlineColor: 'var(--color-red-100)' }),
  'outline-red-200': () => ({ outlineColor: 'var(--color-red-200)' }),
  'outline-red-300': () => ({ outlineColor: 'var(--color-red-300)' }),
  'outline-red-400': () => ({ outlineColor: 'var(--color-red-400)' }),
  'outline-red-500': () => ({ outlineColor: 'var(--color-red-500)' }),
  'outline-red-600': () => ({ outlineColor: 'var(--color-red-600)' }),
  'outline-red-700': () => ({ outlineColor: 'var(--color-red-700)' }),
  'outline-red-800': () => ({ outlineColor: 'var(--color-red-800)' }),
  'outline-red-900': () => ({ outlineColor: 'var(--color-red-900)' }),
  'outline-red-950': () => ({ outlineColor: 'var(--color-red-950)' }),
  'outline-orange-50': () => ({ outlineColor: 'var(--color-orange-50)' }),
  'outline-orange-100': () => ({ outlineColor: 'var(--color-orange-100)' }),
  'outline-orange-200': () => ({ outlineColor: 'var(--color-orange-200)' }),
  'outline-orange-300': () => ({ outlineColor: 'var(--color-orange-300)' }),
  'outline-orange-400': () => ({ outlineColor: 'var(--color-orange-400)' }),
  'outline-orange-500': () => ({ outlineColor: 'var(--color-orange-500)' }),
  'outline-orange-600': () => ({ outlineColor: 'var(--color-orange-600)' }),
  'outline-orange-700': () => ({ outlineColor: 'var(--color-orange-700)' }),
  'outline-orange-800': () => ({ outlineColor: 'var(--color-orange-800)' }),
  'outline-orange-900': () => ({ outlineColor: 'var(--color-orange-900)' }),
  'outline-orange-950': () => ({ outlineColor: 'var(--color-orange-950)' }),
  'outline-amber-50': () => ({ outlineColor: 'var(--color-amber-50)' }),
  'outline-amber-100': () => ({ outlineColor: 'var(--color-amber-100)' }),
  'outline-amber-200': () => ({ outlineColor: 'var(--color-amber-200)' }),
  'outline-amber-300': () => ({ outlineColor: 'var(--color-amber-300)' }),
  'outline-amber-400': () => ({ outlineColor: 'var(--color-amber-400)' }),
  'outline-amber-500': () => ({ outlineColor: 'var(--color-amber-500)' }),
  'outline-amber-600': () => ({ outlineColor: 'var(--color-amber-600)' }),
  'outline-amber-700': () => ({ outlineColor: 'var(--color-amber-700)' }),
  'outline-amber-800': () => ({ outlineColor: 'var(--color-amber-800)' }),
  'outline-amber-900': () => ({ outlineColor: 'var(--color-amber-900)' }),
  'outline-amber-950': () => ({ outlineColor: 'var(--color-amber-950)' }),
  'outline-yellow-50': () => ({ outlineColor: 'var(--color-yellow-50)' }),
  'outline-yellow-100': () => ({ outlineColor: 'var(--color-yellow-100)' }),
  'outline-yellow-200': () => ({ outlineColor: 'var(--color-yellow-200)' }),
  'outline-yellow-300': () => ({ outlineColor: 'var(--color-yellow-300)' }),
  'outline-yellow-400': () => ({ outlineColor: 'var(--color-yellow-400)' }),
  'outline-yellow-500': () => ({ outlineColor: 'var(--color-yellow-500)' }),
  'outline-yellow-600': () => ({ outlineColor: 'var(--color-yellow-600)' }),
  'outline-yellow-700': () => ({ outlineColor: 'var(--color-yellow-700)' }),
  'outline-yellow-800': () => ({ outlineColor: 'var(--color-yellow-800)' }),
  'outline-yellow-900': () => ({ outlineColor: 'var(--color-yellow-900)' }),
  'outline-yellow-950': () => ({ outlineColor: 'var(--color-yellow-950)' }),
  'outline-lime-50': () => ({ outlineColor: 'var(--color-lime-50)' }),
  'outline-lime-100': () => ({ outlineColor: 'var(--color-lime-100)' }),
  'outline-lime-200': () => ({ outlineColor: 'var(--color-lime-200)' }),
  'outline-lime-300': () => ({ outlineColor: 'var(--color-lime-300)' }),
  'outline-lime-400': () => ({ outlineColor: 'var(--color-lime-400)' }),
  'outline-lime-500': () => ({ outlineColor: 'var(--color-lime-500)' }),
  'outline-lime-600': () => ({ outlineColor: 'var(--color-lime-600)' }),
  'outline-lime-700': () => ({ outlineColor: 'var(--color-lime-700)' }),
  'outline-lime-800': () => ({ outlineColor: 'var(--color-lime-800)' }),
  'outline-lime-900': () => ({ outlineColor: 'var(--color-lime-900)' }),
  'outline-lime-950': () => ({ outlineColor: 'var(--color-lime-950)' }),
  'outline-green-50': () => ({ outlineColor: 'var(--color-green-50)' }),
  'outline-green-100': () => ({ outlineColor: 'var(--color-green-100)' }),
  'outline-green-200': () => ({ outlineColor: 'var(--color-green-200)' }),
  'outline-green-300': () => ({ outlineColor: 'var(--color-green-300)' }),
  'outline-green-400': () => ({ outlineColor: 'var(--color-green-400)' }),
  'outline-green-500': () => ({ outlineColor: 'var(--color-green-500)' }),
  'outline-green-600': () => ({ outlineColor: 'var(--color-green-600)' }),
  'outline-green-700': () => ({ outlineColor: 'var(--color-green-700)' }),
  'outline-green-800': () => ({ outlineColor: 'var(--color-green-800)' }),
  'outline-green-900': () => ({ outlineColor: 'var(--color-green-900)' }),
  'outline-green-950': () => ({ outlineColor: 'var(--color-green-950)' }),
  'outline-emerald-50': () => ({ outlineColor: 'var(--color-emerald-50)' }),
  'outline-emerald-100': () => ({ outlineColor: 'var(--color-emerald-100)' }),
  'outline-emerald-200': () => ({ outlineColor: 'var(--color-emerald-200)' }),
  'outline-emerald-300': () => ({ outlineColor: 'var(--color-emerald-300)' }),
  'outline-emerald-400': () => ({ outlineColor: 'var(--color-emerald-400)' }),
  'outline-emerald-500': () => ({ outlineColor: 'var(--color-emerald-500)' }),
  'outline-emerald-600': () => ({ outlineColor: 'var(--color-emerald-600)' }),
  'outline-emerald-700': () => ({ outlineColor: 'var(--color-emerald-700)' }),
  'outline-emerald-800': () => ({ outlineColor: 'var(--color-emerald-800)' }),
  'outline-emerald-900': () => ({ outlineColor: 'var(--color-emerald-900)' }),
  'outline-emerald-950': () => ({ outlineColor: 'var(--color-emerald-950)' }),
  'outline-teal-50': () => ({ outlineColor: 'var(--color-teal-50)' }),
  'outline-teal-100': () => ({ outlineColor: 'var(--color-teal-100)' }),
  'outline-teal-200': () => ({ outlineColor: 'var(--color-teal-200)' }),
  'outline-teal-300': () => ({ outlineColor: 'var(--color-teal-300)' }),
  'outline-teal-400': () => ({ outlineColor: 'var(--color-teal-400)' }),
  'outline-teal-500': () => ({ outlineColor: 'var(--color-teal-500)' }),
  'outline-teal-600': () => ({ outlineColor: 'var(--color-teal-600)' }),
  'outline-teal-700': () => ({ outlineColor: 'var(--color-teal-700)' }),
  'outline-teal-800': () => ({ outlineColor: 'var(--color-teal-800)' }),
  'outline-teal-900': () => ({ outlineColor: 'var(--color-teal-900)' }),
  'outline-teal-950': () => ({ outlineColor: 'var(--color-teal-950)' }),
  'outline-cyan-50': () => ({ outlineColor: 'var(--color-cyan-50)' }),
  'outline-cyan-100': () => ({ outlineColor: 'var(--color-cyan-100)' }),
  'outline-cyan-200': () => ({ outlineColor: 'var(--color-cyan-200)' }),
  'outline-cyan-300': () => ({ outlineColor: 'var(--color-cyan-300)' }),
  'outline-cyan-400': () => ({ outlineColor: 'var(--color-cyan-400)' }),
  'outline-cyan-500': () => ({ outlineColor: 'var(--color-cyan-500)' }),
  'outline-cyan-600': () => ({ outlineColor: 'var(--color-cyan-600)' }),
  'outline-cyan-700': () => ({ outlineColor: 'var(--color-cyan-700)' }),
  'outline-cyan-800': () => ({ outlineColor: 'var(--color-cyan-800)' }),
  'outline-cyan-900': () => ({ outlineColor: 'var(--color-cyan-900)' }),
  'outline-cyan-950': () => ({ outlineColor: 'var(--color-cyan-950)' }),
  'outline-sky-50': () => ({ outlineColor: 'var(--color-sky-50)' }),
  'outline-sky-100': () => ({ outlineColor: 'var(--color-sky-100)' }),
  'outline-sky-200': () => ({ outlineColor: 'var(--color-sky-200)' }),
  'outline-sky-300': () => ({ outlineColor: 'var(--color-sky-300)' }),
  'outline-sky-400': () => ({ outlineColor: 'var(--color-sky-400)' }),
  'outline-sky-500': () => ({ outlineColor: 'var(--color-sky-500)' }),
  'outline-sky-600': () => ({ outlineColor: 'var(--color-sky-600)' }),
  'outline-sky-700': () => ({ outlineColor: 'var(--color-sky-700)' }),
  'outline-sky-800': () => ({ outlineColor: 'var(--color-sky-800)' }),
  'outline-sky-900': () => ({ outlineColor: 'var(--color-sky-900)' }),
  'outline-sky-950': () => ({ outlineColor: 'var(--color-sky-950)' }),
  'outline-blue-50': () => ({ outlineColor: 'var(--color-blue-50)' }),
  'outline-blue-100': () => ({ outlineColor: 'var(--color-blue-100)' }),
  'outline-blue-200': () => ({ outlineColor: 'var(--color-blue-200)' }),
  'outline-blue-300': () => ({ outlineColor: 'var(--color-blue-300)' }),
  'outline-blue-400': () => ({ outlineColor: 'var(--color-blue-400)' }),
  'outline-blue-500': () => ({ outlineColor: 'var(--color-blue-500)' }),
  'outline-blue-600': () => ({ outlineColor: 'var(--color-blue-600)' }),
  'outline-blue-700': () => ({ outlineColor: 'var(--color-blue-700)' }),
  'outline-blue-800': () => ({ outlineColor: 'var(--color-blue-800)' }),
  'outline-blue-900': () => ({ outlineColor: 'var(--color-blue-900)' }),
  'outline-blue-950': () => ({ outlineColor: 'var(--color-blue-950)' }),
  'outline-indigo-50': () => ({ outlineColor: 'var(--color-indigo-50)' }),
  'outline-indigo-100': () => ({ outlineColor: 'var(--color-indigo-100)' }),
  'outline-indigo-200': () => ({ outlineColor: 'var(--color-indigo-200)' }),
  'outline-indigo-300': () => ({ outlineColor: 'var(--color-indigo-300)' }),
  'outline-indigo-400': () => ({ outlineColor: 'var(--color-indigo-400)' }),
  'outline-indigo-500': () => ({ outlineColor: 'var(--color-indigo-500)' }),
  'outline-indigo-600': () => ({ outlineColor: 'var(--color-indigo-600)' }),
  'outline-indigo-700': () => ({ outlineColor: 'var(--color-indigo-700)' }),
  'outline-indigo-800': () => ({ outlineColor: 'var(--color-indigo-800)' }),
  'outline-indigo-900': () => ({ outlineColor: 'var(--color-indigo-900)' }),
  'outline-indigo-950': () => ({ outlineColor: 'var(--color-indigo-950)' }),
  'outline-violet-50': () => ({ outlineColor: 'var(--color-violet-50)' }),
  'outline-violet-100': () => ({ outlineColor: 'var(--color-violet-100)' }),
  'outline-violet-200': () => ({ outlineColor: 'var(--color-violet-200)' }),
  'outline-violet-300': () => ({ outlineColor: 'var(--color-violet-300)' }),
  'outline-violet-400': () => ({ outlineColor: 'var(--color-violet-400)' }),
  'outline-violet-500': () => ({ outlineColor: 'var(--color-violet-500)' }),
  'outline-violet-600': () => ({ outlineColor: 'var(--color-violet-600)' }),
  'outline-violet-700': () => ({ outlineColor: 'var(--color-violet-700)' }),
  'outline-violet-800': () => ({ outlineColor: 'var(--color-violet-800)' }),
  'outline-violet-900': () => ({ outlineColor: 'var(--color-violet-900)' }),
  'outline-violet-950': () => ({ outlineColor: 'var(--color-violet-950)' }),
  'outline-purple-50': () => ({ outlineColor: 'var(--color-purple-50)' }),
  'outline-purple-100': () => ({ outlineColor: 'var(--color-purple-100)' }),
  'outline-purple-200': () => ({ outlineColor: 'var(--color-purple-200)' }),
  'outline-purple-300': () => ({ outlineColor: 'var(--color-purple-300)' }),
  'outline-purple-400': () => ({ outlineColor: 'var(--color-purple-400)' }),
  'outline-purple-500': () => ({ outlineColor: 'var(--color-purple-500)' }),
  'outline-purple-600': () => ({ outlineColor: 'var(--color-purple-600)' }),
  'outline-purple-700': () => ({ outlineColor: 'var(--color-purple-700)' }),
  'outline-purple-800': () => ({ outlineColor: 'var(--color-purple-800)' }),
  'outline-purple-900': () => ({ outlineColor: 'var(--color-purple-900)' }),
  'outline-purple-950': () => ({ outlineColor: 'var(--color-purple-950)' }),
  'outline-fuchsia-50': () => ({ outlineColor: 'var(--color-fuchsia-50)' }),
  'outline-fuchsia-100': () => ({ outlineColor: 'var(--color-fuchsia-100)' }),
  'outline-fuchsia-200': () => ({ outlineColor: 'var(--color-fuchsia-200)' }),
  'outline-fuchsia-300': () => ({ outlineColor: 'var(--color-fuchsia-300)' }),
  'outline-fuchsia-400': () => ({ outlineColor: 'var(--color-fuchsia-400)' }),
  'outline-fuchsia-500': () => ({ outlineColor: 'var(--color-fuchsia-500)' }),
  'outline-fuchsia-600': () => ({ outlineColor: 'var(--color-fuchsia-600)' }),
  'outline-fuchsia-700': () => ({ outlineColor: 'var(--color-fuchsia-700)' }),
  'outline-fuchsia-800': () => ({ outlineColor: 'var(--color-fuchsia-800)' }),
  'outline-fuchsia-900': () => ({ outlineColor: 'var(--color-fuchsia-900)' }),
  'outline-fuchsia-950': () => ({ outlineColor: 'var(--color-fuchsia-950)' }),
  'outline-pink-50': () => ({ outlineColor: 'var(--color-pink-50)' }),
  'outline-pink-100': () => ({ outlineColor: 'var(--color-pink-100)' }),
  'outline-pink-200': () => ({ outlineColor: 'var(--color-pink-200)' }),
  'outline-pink-300': () => ({ outlineColor: 'var(--color-pink-300)' }),
  'outline-pink-400': () => ({ outlineColor: 'var(--color-pink-400)' }),
  'outline-pink-500': () => ({ outlineColor: 'var(--color-pink-500)' }),
  'outline-pink-600': () => ({ outlineColor: 'var(--color-pink-600)' }),
  'outline-pink-700': () => ({ outlineColor: 'var(--color-pink-700)' }),
  'outline-pink-800': () => ({ outlineColor: 'var(--color-pink-800)' }),
  'outline-pink-900': () => ({ outlineColor: 'var(--color-pink-900)' }),
  'outline-pink-950': () => ({ outlineColor: 'var(--color-pink-950)' }),
  'outline-rose-50': () => ({ outlineColor: 'var(--color-rose-50)' }),
  'outline-rose-100': () => ({ outlineColor: 'var(--color-rose-100)' }),
  'outline-rose-200': () => ({ outlineColor: 'var(--color-rose-200)' }),
  'outline-rose-300': () => ({ outlineColor: 'var(--color-rose-300)' }),
  'outline-rose-400': () => ({ outlineColor: 'var(--color-rose-400)' }),
  'outline-rose-500': () => ({ outlineColor: 'var(--color-rose-500)' }),
  'outline-rose-600': () => ({ outlineColor: 'var(--color-rose-600)' }),
  'outline-rose-700': () => ({ outlineColor: 'var(--color-rose-700)' }),
  'outline-rose-800': () => ({ outlineColor: 'var(--color-rose-800)' }),
  'outline-rose-900': () => ({ outlineColor: 'var(--color-rose-900)' }),
  'outline-rose-950': () => ({ outlineColor: 'var(--color-rose-950)' }),
  'outline-slate-50': () => ({ outlineColor: 'var(--color-slate-50)' }),
  'outline-slate-100': () => ({ outlineColor: 'var(--color-slate-100)' }),
  'outline-slate-200': () => ({ outlineColor: 'var(--color-slate-200)' }),
  'outline-slate-300': () => ({ outlineColor: 'var(--color-slate-300)' }),
  'outline-slate-400': () => ({ outlineColor: 'var(--color-slate-400)' }),
  'outline-slate-500': () => ({ outlineColor: 'var(--color-slate-500)' }),
  'outline-slate-600': () => ({ outlineColor: 'var(--color-slate-600)' }),
  'outline-slate-700': () => ({ outlineColor: 'var(--color-slate-700)' }),
  'outline-slate-800': () => ({ outlineColor: 'var(--color-slate-800)' }),
  'outline-slate-900': () => ({ outlineColor: 'var(--color-slate-900)' }),
  'outline-slate-950': () => ({ outlineColor: 'var(--color-slate-950)' }),
  'outline-gray-50': () => ({ outlineColor: 'var(--color-gray-50)' }),
  'outline-gray-100': () => ({ outlineColor: 'var(--color-gray-100)' }),
  'outline-gray-200': () => ({ outlineColor: 'var(--color-gray-200)' }),
  'outline-gray-300': () => ({ outlineColor: 'var(--color-gray-300)' }),
  'outline-gray-400': () => ({ outlineColor: 'var(--color-gray-400)' }),
  'outline-gray-500': () => ({ outlineColor: 'var(--color-gray-500)' }),
  'outline-gray-600': () => ({ outlineColor: 'var(--color-gray-600)' }),
  'outline-gray-700': () => ({ outlineColor: 'var(--color-gray-700)' }),
  'outline-gray-800': () => ({ outlineColor: 'var(--color-gray-800)' }),
  'outline-gray-900': () => ({ outlineColor: 'var(--color-gray-900)' }),
  'outline-gray-950': () => ({ outlineColor: 'var(--color-gray-950)' }),
  'outline-zinc-50': () => ({ outlineColor: 'var(--color-zinc-50)' }),
  'outline-zinc-100': () => ({ outlineColor: 'var(--color-zinc-100)' }),
  'outline-zinc-200': () => ({ outlineColor: 'var(--color-zinc-200)' }),
  'outline-zinc-300': () => ({ outlineColor: 'var(--color-zinc-300)' }),
  'outline-zinc-400': () => ({ outlineColor: 'var(--color-zinc-400)' }),
  'outline-zinc-500': () => ({ outlineColor: 'var(--color-zinc-500)' }),
  'outline-zinc-600': () => ({ outlineColor: 'var(--color-zinc-600)' }),
  'outline-zinc-700': () => ({ outlineColor: 'var(--color-zinc-700)' }),
  'outline-zinc-800': () => ({ outlineColor: 'var(--color-zinc-800)' }),
  'outline-zinc-900': () => ({ outlineColor: 'var(--color-zinc-900)' }),
  'outline-zinc-950': () => ({ outlineColor: 'var(--color-zinc-950)' }),
  'outline-neutral-50': () => ({ outlineColor: 'var(--color-neutral-50)' }),
  'outline-neutral-100': () => ({ outlineColor: 'var(--color-neutral-100)' }),
  'outline-neutral-200': () => ({ outlineColor: 'var(--color-neutral-200)' }),
  'outline-neutral-300': () => ({ outlineColor: 'var(--color-neutral-300)' }),
  'outline-neutral-400': () => ({ outlineColor: 'var(--color-neutral-400)' }),
  'outline-neutral-500': () => ({ outlineColor: 'var(--color-neutral-500)' }),
  'outline-neutral-600': () => ({ outlineColor: 'var(--color-neutral-600)' }),
  'outline-neutral-700': () => ({ outlineColor: 'var(--color-neutral-700)' }),
  'outline-neutral-800': () => ({ outlineColor: 'var(--color-neutral-800)' }),
  'outline-neutral-900': () => ({ outlineColor: 'var(--color-neutral-900)' }),
  'outline-neutral-950': () => ({ outlineColor: 'var(--color-neutral-950)' }),
  'outline-stone-50': () => ({ outlineColor: 'var(--color-stone-50)' }),
  'outline-stone-100': () => ({ outlineColor: 'var(--color-stone-100)' }),
  'outline-stone-200': () => ({ outlineColor: 'var(--color-stone-200)' }),
  'outline-stone-300': () => ({ outlineColor: 'var(--color-stone-300)' }),
  'outline-stone-400': () => ({ outlineColor: 'var(--color-stone-400)' }),
  'outline-stone-500': () => ({ outlineColor: 'var(--color-stone-500)' }),
  'outline-stone-600': () => ({ outlineColor: 'var(--color-stone-600)' }),
  'outline-stone-700': () => ({ outlineColor: 'var(--color-stone-700)' }),
  'outline-stone-800': () => ({ outlineColor: 'var(--color-stone-800)' }),
  'outline-stone-900': () => ({ outlineColor: 'var(--color-stone-900)' }),
  'outline-stone-950': () => ({ outlineColor: 'var(--color-stone-950)' }),
  'outline-(<custom-property>)': ([value]) => ({ outlineColor: `var(${value})` }),
  'outline-[<value>]': ([value]) => ({ outlineColor: `"${value}"` }),

  // outline-style
  'outline-solid': () => ({ outlineStyle: 'solid' }),
  'outline-dashed': () => ({ outlineStyle: 'dashed' }),
  'outline-dotted': () => ({ outlineStyle: 'dotted' }),
  'outline-double': () => ({ outlineStyle: 'double' }),
  'outline-none': () => ({ outlineStyle: 'none' }),

  // outline-offset
  'outline-hidden': () => ({ outline: '2px solid transparent', outlineOffset: '2px' }),
  'outline-offset-<number>': ([value]) => ({ outlineOffset: `${value}px` }),
  '-outline-offset-<number>': ([value]) => ({ outlineOffset: `calc(${value}px * -1)` }),
  'outline-offset-(<custom-property>)': ([value]) => ({ outlineOffset: `var(${value})` }),
  'outline-offset-[<value>]': ([value]) => ({ outlineOffset: `"${value}"` }),

  // EFFECTS

  // box-shadow
  'shadow-2xs': () => ({ boxShadow: 'var(--shadow-2xs)' }),
  'shadow-xs': () => ({ boxShadow: 'var(--shadow-xs)' }),
  'shadow-sm': () => ({ boxShadow: 'var(--shadow-sm)' }),
  'shadow-md': () => ({ boxShadow: 'var(--shadow-md)' }),
  'shadow-lg': () => ({ boxShadow: 'var(--shadow-lg)' }),
  'shadow-xl': () => ({ boxShadow: 'var(--shadow-xl)' }),
  'shadow-2xl': () => ({ boxShadow: 'var(--shadow-2xl)' }),
  'shadow-none': () => ({ boxShadow: '0 0 #0000' }),
  'shadow-(<custom-property>)': ([value]) => ({ boxShadow: `var(${value})` }),
  'shadow-(color:<custom-property>)': () => {
    throw new Error('shadow-(color:<custom-property>) is not supported')
  },
  'shadow-[<value>]': ([value]) => ({ boxShadow: `"${value}"` }),
  'shadow-inherit': () => {
    throw new Error('shadow-inherit is not supported')
  },
  'shadow-current': () => {
    throw new Error('shadow-current is not supported')
  },
  'shadow-transparent': () => {
    throw new Error('shadow-transparent is not supported')
  },
  'shadow-black': () => {
    throw new Error('shadow-black is not supported')
  },
  'shadow-white': () => {
    throw new Error('shadow-white is not supported')
  },
  'shadow-red-50': () => {
    throw new Error('shadow-red-50 is not supported')
  },
  'shadow-red-100': () => {
    throw new Error('shadow-red-100 is not supported')
  },
  'shadow-red-200': () => {
    throw new Error('shadow-red-200 is not supported')
  },
  'shadow-red-300': () => {
    throw new Error('shadow-red-300 is not supported')
  },
  'shadow-red-400': () => {
    throw new Error('shadow-red-400 is not supported')
  },
  'shadow-red-500': () => {
    throw new Error('shadow-red-500 is not supported')
  },
  'shadow-red-600': () => {
    throw new Error('shadow-red-600 is not supported')
  },
  'shadow-red-700': () => {
    throw new Error('shadow-red-700 is not supported')
  },
  'shadow-red-800': () => {
    throw new Error('shadow-red-800 is not supported')
  },
  'shadow-red-900': () => {
    throw new Error('shadow-red-900 is not supported')
  },
  'shadow-red-950': () => {
    throw new Error('shadow-red-950 is not supported')
  },
  'shadow-orange-50': () => {
    throw new Error('shadow-orange-50 is not supported')
  },
  'shadow-orange-100': () => {
    throw new Error('shadow-orange-100 is not supported')
  },
  'shadow-orange-200': () => {
    throw new Error('shadow-orange-200 is not supported')
  },
  'shadow-orange-300': () => {
    throw new Error('shadow-orange-300 is not supported')
  },
  'shadow-orange-400': () => {
    throw new Error('shadow-orange-400 is not supported')
  },
  'shadow-orange-500': () => {
    throw new Error('shadow-orange-500 is not supported')
  },
  'shadow-orange-600': () => {
    throw new Error('shadow-orange-600 is not supported')
  },
  'shadow-orange-700': () => {
    throw new Error('shadow-orange-700 is not supported')
  },
  'shadow-orange-800': () => {
    throw new Error('shadow-orange-800 is not supported')
  },
  'shadow-orange-900': () => {
    throw new Error('shadow-orange-900 is not supported')
  },
  'shadow-orange-950': () => {
    throw new Error('shadow-orange-950 is not supported')
  },
  'shadow-amber-50': () => {
    throw new Error('shadow-amber-50 is not supported')
  },
  'shadow-amber-100': () => {
    throw new Error('shadow-amber-100 is not supported')
  },
  'shadow-amber-200': () => {
    throw new Error('shadow-amber-200 is not supported')
  },
  'shadow-amber-300': () => {
    throw new Error('shadow-amber-300 is not supported')
  },
  'shadow-amber-400': () => {
    throw new Error('shadow-amber-400 is not supported')
  },
  'shadow-amber-500': () => {
    throw new Error('shadow-amber-500 is not supported')
  },
  'shadow-amber-600': () => {
    throw new Error('shadow-amber-600 is not supported')
  },
  'shadow-amber-700': () => {
    throw new Error('shadow-amber-700 is not supported')
  },
  'shadow-amber-800': () => {
    throw new Error('shadow-amber-800 is not supported')
  },
  'shadow-amber-900': () => {
    throw new Error('shadow-amber-900 is not supported')
  },
  'shadow-amber-950': () => {
    throw new Error('shadow-amber-950 is not supported')
  },
  'shadow-yellow-50': () => {
    throw new Error('shadow-yellow-50 is not supported')
  },
  'shadow-yellow-100': () => {
    throw new Error('shadow-yellow-100 is not supported')
  },
  'shadow-yellow-200': () => {
    throw new Error('shadow-yellow-200 is not supported')
  },
  'shadow-yellow-300': () => {
    throw new Error('shadow-yellow-300 is not supported')
  },
  'shadow-yellow-400': () => {
    throw new Error('shadow-yellow-400 is not supported')
  },
  'shadow-yellow-500': () => {
    throw new Error('shadow-yellow-500 is not supported')
  },
  'shadow-yellow-600': () => {
    throw new Error('shadow-yellow-600 is not supported')
  },
  'shadow-yellow-700': () => {
    throw new Error('shadow-yellow-700 is not supported')
  },
  'shadow-yellow-800': () => {
    throw new Error('shadow-yellow-800 is not supported')
  },
  'shadow-yellow-900': () => {
    throw new Error('shadow-yellow-900 is not supported')
  },
  'shadow-yellow-950': () => {
    throw new Error('shadow-yellow-950 is not supported')
  },
  'shadow-lime-50': () => {
    throw new Error('shadow-lime-50 is not supported')
  },
  'shadow-lime-100': () => {
    throw new Error('shadow-lime-100 is not supported')
  },
  'shadow-lime-200': () => {
    throw new Error('shadow-lime-200 is not supported')
  },
  'shadow-lime-300': () => {
    throw new Error('shadow-lime-300 is not supported')
  },
  'shadow-lime-400': () => {
    throw new Error('shadow-lime-400 is not supported')
  },
  'shadow-lime-500': () => {
    throw new Error('shadow-lime-500 is not supported')
  },
  'shadow-lime-600': () => {
    throw new Error('shadow-lime-600 is not supported')
  },
  'shadow-lime-700': () => {
    throw new Error('shadow-lime-700 is not supported')
  },
  'shadow-lime-800': () => {
    throw new Error('shadow-lime-800 is not supported')
  },
  'shadow-lime-900': () => {
    throw new Error('shadow-lime-900 is not supported')
  },
  'shadow-lime-950': () => {
    throw new Error('shadow-lime-950 is not supported')
  },
  'shadow-green-50': () => {
    throw new Error('shadow-green-50 is not supported')
  },
  'shadow-green-100': () => {
    throw new Error('shadow-green-100 is not supported')
  },
  'shadow-green-200': () => {
    throw new Error('shadow-green-200 is not supported')
  },
  'shadow-green-300': () => {
    throw new Error('shadow-green-300 is not supported')
  },
  'shadow-green-400': () => {
    throw new Error('shadow-green-400 is not supported')
  },
  'shadow-green-500': () => {
    throw new Error('shadow-green-500 is not supported')
  },
  'shadow-green-600': () => {
    throw new Error('shadow-green-600 is not supported')
  },
  'shadow-green-700': () => {
    throw new Error('shadow-green-700 is not supported')
  },
  'shadow-green-800': () => {
    throw new Error('shadow-green-800 is not supported')
  },
  'shadow-green-900': () => {
    throw new Error('shadow-green-900 is not supported')
  },
  'shadow-green-950': () => {
    throw new Error('shadow-green-950 is not supported')
  },
  'shadow-emerald-50': () => {
    throw new Error('shadow-emerald-50 is not supported')
  },
  'shadow-emerald-100': () => {
    throw new Error('shadow-emerald-100 is not supported')
  },
  'shadow-emerald-200': () => {
    throw new Error('shadow-emerald-200 is not supported')
  },
  'shadow-emerald-300': () => {
    throw new Error('shadow-emerald-300 is not supported')
  },
  'shadow-emerald-400': () => {
    throw new Error('shadow-emerald-400 is not supported')
  },
  'shadow-emerald-500': () => {
    throw new Error('shadow-emerald-500 is not supported')
  },
  'shadow-emerald-600': () => {
    throw new Error('shadow-emerald-600 is not supported')
  },
  'shadow-emerald-700': () => {
    throw new Error('shadow-emerald-700 is not supported')
  },
  'shadow-emerald-800': () => {
    throw new Error('shadow-emerald-800 is not supported')
  },
  'shadow-emerald-900': () => {
    throw new Error('shadow-emerald-900 is not supported')
  },
  'shadow-emerald-950': () => {
    throw new Error('shadow-emerald-950 is not supported')
  },
  'shadow-teal-50': () => {
    throw new Error('shadow-teal-50 is not supported')
  },
  'shadow-teal-100': () => {
    throw new Error('shadow-teal-100 is not supported')
  },
  'shadow-teal-200': () => {
    throw new Error('shadow-teal-200 is not supported')
  },
  'shadow-teal-300': () => {
    throw new Error('shadow-teal-300 is not supported')
  },
  'shadow-teal-400': () => {
    throw new Error('shadow-teal-400 is not supported')
  },
  'shadow-teal-500': () => {
    throw new Error('shadow-teal-500 is not supported')
  },
  'shadow-teal-600': () => {
    throw new Error('shadow-teal-600 is not supported')
  },
  'shadow-teal-700': () => {
    throw new Error('shadow-teal-700 is not supported')
  },
  'shadow-teal-800': () => {
    throw new Error('shadow-teal-800 is not supported')
  },
  'shadow-teal-900': () => {
    throw new Error('shadow-teal-900 is not supported')
  },
  'shadow-teal-950': () => {
    throw new Error('shadow-teal-950 is not supported')
  },
  'shadow-cyan-50': () => {
    throw new Error('shadow-cyan-50 is not supported')
  },
  'shadow-cyan-100': () => {
    throw new Error('shadow-cyan-100 is not supported')
  },
  'shadow-cyan-200': () => {
    throw new Error('shadow-cyan-200 is not supported')
  },
  'shadow-cyan-300': () => {
    throw new Error('shadow-cyan-300 is not supported')
  },
  'shadow-cyan-400': () => {
    throw new Error('shadow-cyan-400 is not supported')
  },
  'shadow-cyan-500': () => {
    throw new Error('shadow-cyan-500 is not supported')
  },
  'shadow-cyan-600': () => {
    throw new Error('shadow-cyan-600 is not supported')
  },
  'shadow-cyan-700': () => {
    throw new Error('shadow-cyan-700 is not supported')
  },
  'shadow-cyan-800': () => {
    throw new Error('shadow-cyan-800 is not supported')
  },
  'shadow-cyan-900': () => {
    throw new Error('shadow-cyan-900 is not supported')
  },
  'shadow-cyan-950': () => {
    throw new Error('shadow-cyan-950 is not supported')
  },
  'shadow-sky-50': () => {
    throw new Error('shadow-sky-50 is not supported')
  },
  'shadow-sky-100': () => {
    throw new Error('shadow-sky-100 is not supported')
  },
  'shadow-sky-200': () => {
    throw new Error('shadow-sky-200 is not supported')
  },
  'shadow-sky-300': () => {
    throw new Error('shadow-sky-300 is not supported')
  },
  'shadow-sky-400': () => {
    throw new Error('shadow-sky-400 is not supported')
  },
  'shadow-sky-500': () => {
    throw new Error('shadow-sky-500 is not supported')
  },
  'shadow-sky-600': () => {
    throw new Error('shadow-sky-600 is not supported')
  },
  'shadow-sky-700': () => {
    throw new Error('shadow-sky-700 is not supported')
  },
  'shadow-sky-800': () => {
    throw new Error('shadow-sky-800 is not supported')
  },
  'shadow-sky-900': () => {
    throw new Error('shadow-sky-900 is not supported')
  },
  'shadow-sky-950': () => {
    throw new Error('shadow-sky-950 is not supported')
  },
  'shadow-blue-50': () => {
    throw new Error('shadow-blue-50 is not supported')
  },
  'shadow-blue-100': () => {
    throw new Error('shadow-blue-100 is not supported')
  },
  'shadow-blue-200': () => {
    throw new Error('shadow-blue-200 is not supported')
  },
  'shadow-blue-300': () => {
    throw new Error('shadow-blue-300 is not supported')
  },
  'shadow-blue-400': () => {
    throw new Error('shadow-blue-400 is not supported')
  },
  'shadow-blue-500': () => {
    throw new Error('shadow-blue-500 is not supported')
  },
  'shadow-blue-600': () => {
    throw new Error('shadow-blue-600 is not supported')
  },
  'shadow-blue-700': () => {
    throw new Error('shadow-blue-700 is not supported')
  },
  'shadow-blue-800': () => {
    throw new Error('shadow-blue-800 is not supported')
  },
  'shadow-blue-900': () => {
    throw new Error('shadow-blue-900 is not supported')
  },
  'shadow-blue-950': () => {
    throw new Error('shadow-blue-950 is not supported')
  },
  'shadow-indigo-50': () => {
    throw new Error('shadow-indigo-50 is not supported')
  },
  'shadow-indigo-100': () => {
    throw new Error('shadow-indigo-100 is not supported')
  },
  'shadow-indigo-200': () => {
    throw new Error('shadow-indigo-200 is not supported')
  },
  'shadow-indigo-300': () => {
    throw new Error('shadow-indigo-300 is not supported')
  },
  'shadow-indigo-400': () => {
    throw new Error('shadow-indigo-400 is not supported')
  },
  'shadow-indigo-500': () => {
    throw new Error('shadow-indigo-500 is not supported')
  },
  'shadow-indigo-600': () => {
    throw new Error('shadow-indigo-600 is not supported')
  },
  'shadow-indigo-700': () => {
    throw new Error('shadow-indigo-700 is not supported')
  },
  'shadow-indigo-800': () => {
    throw new Error('shadow-indigo-800 is not supported')
  },
  'shadow-indigo-900': () => {
    throw new Error('shadow-indigo-900 is not supported')
  },
  'shadow-indigo-950': () => {
    throw new Error('shadow-indigo-950 is not supported')
  },
  'shadow-violet-50': () => {
    throw new Error('shadow-violet-50 is not supported')
  },
  'shadow-violet-100': () => {
    throw new Error('shadow-violet-100 is not supported')
  },
  'shadow-violet-200': () => {
    throw new Error('shadow-violet-200 is not supported')
  },
  'shadow-violet-300': () => {
    throw new Error('shadow-violet-300 is not supported')
  },
  'shadow-violet-400': () => {
    throw new Error('shadow-violet-400 is not supported')
  },
  'shadow-violet-500': () => {
    throw new Error('shadow-violet-500 is not supported')
  },
  'shadow-violet-600': () => {
    throw new Error('shadow-violet-600 is not supported')
  },
  'shadow-violet-700': () => {
    throw new Error('shadow-violet-700 is not supported')
  },
  'shadow-violet-800': () => {
    throw new Error('shadow-violet-800 is not supported')
  },
  'shadow-violet-900': () => {
    throw new Error('shadow-violet-900 is not supported')
  },
  'shadow-violet-950': () => {
    throw new Error('shadow-violet-950 is not supported')
  },
  'shadow-purple-50': () => {
    throw new Error('shadow-purple-50 is not supported')
  },
  'shadow-purple-100': () => {
    throw new Error('shadow-purple-100 is not supported')
  },
  'shadow-purple-200': () => {
    throw new Error('shadow-purple-200 is not supported')
  },
  'shadow-purple-300': () => {
    throw new Error('shadow-purple-300 is not supported')
  },
  'shadow-purple-400': () => {
    throw new Error('shadow-purple-400 is not supported')
  },
  'shadow-purple-500': () => {
    throw new Error('shadow-purple-500 is not supported')
  },
  'shadow-purple-600': () => {
    throw new Error('shadow-purple-600 is not supported')
  },
  'shadow-purple-700': () => {
    throw new Error('shadow-purple-700 is not supported')
  },
  'shadow-purple-800': () => {
    throw new Error('shadow-purple-800 is not supported')
  },
  'shadow-purple-900': () => {
    throw new Error('shadow-purple-900 is not supported')
  },
  'shadow-purple-950': () => {
    throw new Error('shadow-purple-950 is not supported')
  },
  'shadow-fuchsia-50': () => {
    throw new Error('shadow-fuchsia-50 is not supported')
  },
  'shadow-fuchsia-100': () => {
    throw new Error('shadow-fuchsia-100 is not supported')
  },
  'shadow-fuchsia-200': () => {
    throw new Error('shadow-fuchsia-200 is not supported')
  },
  'shadow-fuchsia-300': () => {
    throw new Error('shadow-fuchsia-300 is not supported')
  },
  'shadow-fuchsia-400': () => {
    throw new Error('shadow-fuchsia-400 is not supported')
  },
  'shadow-fuchsia-500': () => {
    throw new Error('shadow-fuchsia-500 is not supported')
  },
  'shadow-fuchsia-600': () => {
    throw new Error('shadow-fuchsia-600 is not supported')
  },
  'shadow-fuchsia-700': () => {
    throw new Error('shadow-fuchsia-700 is not supported')
  },
  'shadow-fuchsia-800': () => {
    throw new Error('shadow-fuchsia-800 is not supported')
  },
  'shadow-fuchsia-900': () => {
    throw new Error('shadow-fuchsia-900 is not supported')
  },
  'shadow-fuchsia-950': () => {
    throw new Error('shadow-fuchsia-950 is not supported')
  },
  'shadow-pink-50': () => {
    throw new Error('shadow-pink-50 is not supported')
  },
  'shadow-pink-100': () => {
    throw new Error('shadow-pink-100 is not supported')
  },
  'shadow-pink-200': () => {
    throw new Error('shadow-pink-200 is not supported')
  },
  'shadow-pink-300': () => {
    throw new Error('shadow-pink-300 is not supported')
  },
  'shadow-pink-400': () => {
    throw new Error('shadow-pink-400 is not supported')
  },
  'shadow-pink-500': () => {
    throw new Error('shadow-pink-500 is not supported')
  },
  'shadow-pink-600': () => {
    throw new Error('shadow-pink-600 is not supported')
  },
  'shadow-pink-700': () => {
    throw new Error('shadow-pink-700 is not supported')
  },
  'shadow-pink-800': () => {
    throw new Error('shadow-pink-800 is not supported')
  },
  'shadow-pink-900': () => {
    throw new Error('shadow-pink-900 is not supported')
  },
  'shadow-pink-950': () => {
    throw new Error('shadow-pink-950 is not supported')
  },
  'shadow-rose-50': () => {
    throw new Error('shadow-rose-50 is not supported')
  },
  'shadow-rose-100': () => {
    throw new Error('shadow-rose-100 is not supported')
  },
  'shadow-rose-200': () => {
    throw new Error('shadow-rose-200 is not supported')
  },
  'shadow-rose-300': () => {
    throw new Error('shadow-rose-300 is not supported')
  },
  'shadow-rose-400': () => {
    throw new Error('shadow-rose-400 is not supported')
  },
  'shadow-rose-500': () => {
    throw new Error('shadow-rose-500 is not supported')
  },
  'shadow-rose-600': () => {
    throw new Error('shadow-rose-600 is not supported')
  },
  'shadow-rose-700': () => {
    throw new Error('shadow-rose-700 is not supported')
  },
  'shadow-rose-800': () => {
    throw new Error('shadow-rose-800 is not supported')
  },
  'shadow-rose-900': () => {
    throw new Error('shadow-rose-900 is not supported')
  },
  'shadow-rose-950': () => {
    throw new Error('shadow-rose-950 is not supported')
  },
  'shadow-slate-50': () => {
    throw new Error('shadow-slate-50 is not supported')
  },
  'shadow-slate-100': () => {
    throw new Error('shadow-slate-100 is not supported')
  },
  'shadow-slate-200': () => {
    throw new Error('shadow-slate-200 is not supported')
  },
  'shadow-slate-300': () => {
    throw new Error('shadow-slate-300 is not supported')
  },
  'shadow-slate-400': () => {
    throw new Error('shadow-slate-400 is not supported')
  },
  'shadow-slate-500': () => {
    throw new Error('shadow-slate-500 is not supported')
  },
  'shadow-slate-600': () => {
    throw new Error('shadow-slate-600 is not supported')
  },
  'shadow-slate-700': () => {
    throw new Error('shadow-slate-700 is not supported')
  },
  'shadow-slate-800': () => {
    throw new Error('shadow-slate-800 is not supported')
  },
  'shadow-slate-900': () => {
    throw new Error('shadow-slate-900 is not supported')
  },
  'shadow-slate-950': () => {
    throw new Error('shadow-slate-950 is not supported')
  },
  'shadow-gray-50': () => {
    throw new Error('shadow-gray-50 is not supported')
  },
  'shadow-gray-100': () => {
    throw new Error('shadow-gray-100 is not supported')
  },
  'shadow-gray-200': () => {
    throw new Error('shadow-gray-200 is not supported')
  },
  'shadow-gray-300': () => {
    throw new Error('shadow-gray-300 is not supported')
  },
  'shadow-gray-400': () => {
    throw new Error('shadow-gray-400 is not supported')
  },
  'shadow-gray-500': () => {
    throw new Error('shadow-gray-500 is not supported')
  },
  'shadow-gray-600': () => {
    throw new Error('shadow-gray-600 is not supported')
  },
  'shadow-gray-700': () => {
    throw new Error('shadow-gray-700 is not supported')
  },
  'shadow-gray-800': () => {
    throw new Error('shadow-gray-800 is not supported')
  },
  'shadow-gray-900': () => {
    throw new Error('shadow-gray-900 is not supported')
  },
  'shadow-gray-950': () => {
    throw new Error('shadow-gray-950 is not supported')
  },
  'shadow-zinc-50': () => {
    throw new Error('shadow-zinc-50 is not supported')
  },
  'shadow-zinc-100': () => {
    throw new Error('shadow-zinc-100 is not supported')
  },
  'shadow-zinc-200': () => {
    throw new Error('shadow-zinc-200 is not supported')
  },
  'shadow-zinc-300': () => {
    throw new Error('shadow-zinc-300 is not supported')
  },
  'shadow-zinc-400': () => {
    throw new Error('shadow-zinc-400 is not supported')
  },
  'shadow-zinc-500': () => {
    throw new Error('shadow-zinc-500 is not supported')
  },
  'shadow-zinc-600': () => {
    throw new Error('shadow-zinc-600 is not supported')
  },
  'shadow-zinc-700': () => {
    throw new Error('shadow-zinc-700 is not supported')
  },
  'shadow-zinc-800': () => {
    throw new Error('shadow-zinc-800 is not supported')
  },
  'shadow-zinc-900': () => {
    throw new Error('shadow-zinc-900 is not supported')
  },
  'shadow-zinc-950': () => {
    throw new Error('shadow-zinc-950 is not supported')
  },
  'shadow-neutral-50': () => {
    throw new Error('shadow-neutral-50 is not supported')
  },
  'shadow-neutral-100': () => {
    throw new Error('shadow-neutral-100 is not supported')
  },
  'shadow-neutral-200': () => {
    throw new Error('shadow-neutral-200 is not supported')
  },
  'shadow-neutral-300': () => {
    throw new Error('shadow-neutral-300 is not supported')
  },
  'shadow-neutral-400': () => {
    throw new Error('shadow-neutral-400 is not supported')
  },
  'shadow-neutral-500': () => {
    throw new Error('shadow-neutral-500 is not supported')
  },
  'shadow-neutral-600': () => {
    throw new Error('shadow-neutral-600 is not supported')
  },
  'shadow-neutral-700': () => {
    throw new Error('shadow-neutral-700 is not supported')
  },
  'shadow-neutral-800': () => {
    throw new Error('shadow-neutral-800 is not supported')
  },
  'shadow-neutral-900': () => {
    throw new Error('shadow-neutral-900 is not supported')
  },
  'shadow-neutral-950': () => {
    throw new Error('shadow-neutral-950 is not supported')
  },
  'shadow-stone-50': () => {
    throw new Error('shadow-stone-50 is not supported')
  },
  'shadow-stone-100': () => {
    throw new Error('shadow-stone-100 is not supported')
  },
  'shadow-stone-200': () => {
    throw new Error('shadow-stone-200 is not supported')
  },
  'shadow-stone-300': () => {
    throw new Error('shadow-stone-300 is not supported')
  },
  'shadow-stone-400': () => {
    throw new Error('shadow-stone-400 is not supported')
  },
  'shadow-stone-500': () => {
    throw new Error('shadow-stone-500 is not supported')
  },
  'shadow-stone-600': () => {
    throw new Error('shadow-stone-600 is not supported')
  },
  'shadow-stone-700': () => {
    throw new Error('shadow-stone-700 is not supported')
  },
  'shadow-stone-800': () => {
    throw new Error('shadow-stone-800 is not supported')
  },
  'shadow-stone-900': () => {
    throw new Error('shadow-stone-900 is not supported')
  },
  'shadow-stone-950': () => {
    throw new Error('shadow-stone-950 is not supported')
  },
  'inset-shadow-2xs': () => ({ boxShadow: 'var(--inset-shadow-2xs)' }),
  'inset-shadow-xs': () => ({ boxShadow: 'var(--inset-shadow-xs)' }),
  'inset-shadow-sm': () => ({ boxShadow: 'var(--inset-shadow-sm)' }),
  'inset-shadow-none': () => ({ boxShadow: 'inset 0 0 #0000' }),
  'inset-shadow-(<custom-property>)': ([value]) => ({ boxShadow: `var(${value})` }),
  'inset-shadow-[<value>]': ([value]) => ({ boxShadow: `"${value}"` }),
  'inset-shadow-inherit': () => {
    throw new Error('inset-shadow-inherit is not supported')
  },
  'inset-shadow-current': () => {
    throw new Error('inset-shadow-current is not supported')
  },
  'inset-shadow-transparent': () => {
    throw new Error('inset-shadow-transparent is not supported')
  },
  'inset-shadow-black': () => {
    throw new Error('inset-shadow-black is not supported')
  },
  'inset-shadow-white': () => {
    throw new Error('inset-shadow-white is not supported')
  },
  'inset-shadow-red-50': () => {
    throw new Error('inset-shadow-red-50 is not supported')
  },
  'inset-shadow-red-100': () => {
    throw new Error('inset-shadow-red-100 is not supported')
  },
  'inset-shadow-red-200': () => {
    throw new Error('inset-shadow-red-200 is not supported')
  },
  'inset-shadow-red-300': () => {
    throw new Error('inset-shadow-red-300 is not supported')
  },
  'inset-shadow-red-400': () => {
    throw new Error('inset-shadow-red-400 is not supported')
  },
  'inset-shadow-red-500': () => {
    throw new Error('inset-shadow-red-500 is not supported')
  },
  'inset-shadow-red-600': () => {
    throw new Error('inset-shadow-red-600 is not supported')
  },
  'inset-shadow-red-700': () => {
    throw new Error('inset-shadow-red-700 is not supported')
  },
  'inset-shadow-red-800': () => {
    throw new Error('inset-shadow-red-800 is not supported')
  },
  'inset-shadow-red-900': () => {
    throw new Error('inset-shadow-red-900 is not supported')
  },
  'inset-shadow-red-950': () => {
    throw new Error('inset-shadow-red-950 is not supported')
  },
  'inset-shadow-orange-50': () => {
    throw new Error('inset-shadow-orange-50 is not supported')
  },
  'inset-shadow-orange-100': () => {
    throw new Error('inset-shadow-orange-100 is not supported')
  },
  'inset-shadow-orange-200': () => {
    throw new Error('inset-shadow-orange-200 is not supported')
  },
  'inset-shadow-orange-300': () => {
    throw new Error('inset-shadow-orange-300 is not supported')
  },
  'inset-shadow-orange-400': () => {
    throw new Error('inset-shadow-orange-400 is not supported')
  },
  'inset-shadow-orange-500': () => {
    throw new Error('inset-shadow-orange-500 is not supported')
  },
  'inset-shadow-orange-600': () => {
    throw new Error('inset-shadow-orange-600 is not supported')
  },
  'inset-shadow-orange-700': () => {
    throw new Error('inset-shadow-orange-700 is not supported')
  },
  'inset-shadow-orange-800': () => {
    throw new Error('inset-shadow-orange-800 is not supported')
  },
  'inset-shadow-orange-900': () => {
    throw new Error('inset-shadow-orange-900 is not supported')
  },
  'inset-shadow-orange-950': () => {
    throw new Error('inset-shadow-orange-950 is not supported')
  },
  'inset-shadow-amber-50': () => {
    throw new Error('inset-shadow-amber-50 is not supported')
  },
  'inset-shadow-amber-100': () => {
    throw new Error('inset-shadow-amber-100 is not supported')
  },
  'inset-shadow-amber-200': () => {
    throw new Error('inset-shadow-amber-200 is not supported')
  },
  'inset-shadow-amber-300': () => {
    throw new Error('inset-shadow-amber-300 is not supported')
  },
  'inset-shadow-amber-400': () => {
    throw new Error('inset-shadow-amber-400 is not supported')
  },
  'inset-shadow-amber-500': () => {
    throw new Error('inset-shadow-amber-500 is not supported')
  },
  'inset-shadow-amber-600': () => {
    throw new Error('inset-shadow-amber-600 is not supported')
  },
  'inset-shadow-amber-700': () => {
    throw new Error('inset-shadow-amber-700 is not supported')
  },
  'inset-shadow-amber-800': () => {
    throw new Error('inset-shadow-amber-800 is not supported')
  },
  'inset-shadow-amber-900': () => {
    throw new Error('inset-shadow-amber-900 is not supported')
  },
  'inset-shadow-amber-950': () => {
    throw new Error('inset-shadow-amber-950 is not supported')
  },
  'inset-shadow-yellow-50': () => {
    throw new Error('inset-shadow-yellow-50 is not supported')
  },
  'inset-shadow-yellow-100': () => {
    throw new Error('inset-shadow-yellow-100 is not supported')
  },
  'inset-shadow-yellow-200': () => {
    throw new Error('inset-shadow-yellow-200 is not supported')
  },
  'inset-shadow-yellow-300': () => {
    throw new Error('inset-shadow-yellow-300 is not supported')
  },
  'inset-shadow-yellow-400': () => {
    throw new Error('inset-shadow-yellow-400 is not supported')
  },
  'inset-shadow-yellow-500': () => {
    throw new Error('inset-shadow-yellow-500 is not supported')
  },
  'inset-shadow-yellow-600': () => {
    throw new Error('inset-shadow-yellow-600 is not supported')
  },
  'inset-shadow-yellow-700': () => {
    throw new Error('inset-shadow-yellow-700 is not supported')
  },
  'inset-shadow-yellow-800': () => {
    throw new Error('inset-shadow-yellow-800 is not supported')
  },
  'inset-shadow-yellow-900': () => {
    throw new Error('inset-shadow-yellow-900 is not supported')
  },
  'inset-shadow-yellow-950': () => {
    throw new Error('inset-shadow-yellow-950 is not supported')
  },
  'inset-shadow-lime-50': () => {
    throw new Error('inset-shadow-lime-50 is not supported')
  },
  'inset-shadow-lime-100': () => {
    throw new Error('inset-shadow-lime-100 is not supported')
  },
  'inset-shadow-lime-200': () => {
    throw new Error('inset-shadow-lime-200 is not supported')
  },
  'inset-shadow-lime-300': () => {
    throw new Error('inset-shadow-lime-300 is not supported')
  },
  'inset-shadow-lime-400': () => {
    throw new Error('inset-shadow-lime-400 is not supported')
  },
  'inset-shadow-lime-500': () => {
    throw new Error('inset-shadow-lime-500 is not supported')
  },
  'inset-shadow-lime-600': () => {
    throw new Error('inset-shadow-lime-600 is not supported')
  },
  'inset-shadow-lime-700': () => {
    throw new Error('inset-shadow-lime-700 is not supported')
  },
  'inset-shadow-lime-800': () => {
    throw new Error('inset-shadow-lime-800 is not supported')
  },
  'inset-shadow-lime-900': () => {
    throw new Error('inset-shadow-lime-900 is not supported')
  },
  'inset-shadow-lime-950': () => {
    throw new Error('inset-shadow-lime-950 is not supported')
  },
  'inset-shadow-green-50': () => {
    throw new Error('inset-shadow-green-50 is not supported')
  },
  'inset-shadow-green-100': () => {
    throw new Error('inset-shadow-green-100 is not supported')
  },
  'inset-shadow-green-200': () => {
    throw new Error('inset-shadow-green-200 is not supported')
  },
  'inset-shadow-green-300': () => {
    throw new Error('inset-shadow-green-300 is not supported')
  },
  'inset-shadow-green-400': () => {
    throw new Error('inset-shadow-green-400 is not supported')
  },
  'inset-shadow-green-500': () => {
    throw new Error('inset-shadow-green-500 is not supported')
  },
  'inset-shadow-green-600': () => {
    throw new Error('inset-shadow-green-600 is not supported')
  },
  'inset-shadow-green-700': () => {
    throw new Error('inset-shadow-green-700 is not supported')
  },
  'inset-shadow-green-800': () => {
    throw new Error('inset-shadow-green-800 is not supported')
  },
  'inset-shadow-green-900': () => {
    throw new Error('inset-shadow-green-900 is not supported')
  },
  'inset-shadow-green-950': () => {
    throw new Error('inset-shadow-green-950 is not supported')
  },
  'inset-shadow-emerald-50': () => {
    throw new Error('inset-shadow-emerald-50 is not supported')
  },
  'inset-shadow-emerald-100': () => {
    throw new Error('inset-shadow-emerald-100 is not supported')
  },
  'inset-shadow-emerald-200': () => {
    throw new Error('inset-shadow-emerald-200 is not supported')
  },
  'inset-shadow-emerald-300': () => {
    throw new Error('inset-shadow-emerald-300 is not supported')
  },
  'inset-shadow-emerald-400': () => {
    throw new Error('inset-shadow-emerald-400 is not supported')
  },
  'inset-shadow-emerald-500': () => {
    throw new Error('inset-shadow-emerald-500 is not supported')
  },
  'inset-shadow-emerald-600': () => {
    throw new Error('inset-shadow-emerald-600 is not supported')
  },
  'inset-shadow-emerald-700': () => {
    throw new Error('inset-shadow-emerald-700 is not supported')
  },
  'inset-shadow-emerald-800': () => {
    throw new Error('inset-shadow-emerald-800 is not supported')
  },
  'inset-shadow-emerald-900': () => {
    throw new Error('inset-shadow-emerald-900 is not supported')
  },
  'inset-shadow-emerald-950': () => {
    throw new Error('inset-shadow-emerald-950 is not supported')
  },
  'inset-shadow-teal-50': () => {
    throw new Error('inset-shadow-teal-50 is not supported')
  },
  'inset-shadow-teal-100': () => {
    throw new Error('inset-shadow-teal-100 is not supported')
  },
  'inset-shadow-teal-200': () => {
    throw new Error('inset-shadow-teal-200 is not supported')
  },
  'inset-shadow-teal-300': () => {
    throw new Error('inset-shadow-teal-300 is not supported')
  },
  'inset-shadow-teal-400': () => {
    throw new Error('inset-shadow-teal-400 is not supported')
  },
  'inset-shadow-teal-500': () => {
    throw new Error('inset-shadow-teal-500 is not supported')
  },
  'inset-shadow-teal-600': () => {
    throw new Error('inset-shadow-teal-600 is not supported')
  },
  'inset-shadow-teal-700': () => {
    throw new Error('inset-shadow-teal-700 is not supported')
  },
  'inset-shadow-teal-800': () => {
    throw new Error('inset-shadow-teal-800 is not supported')
  },
  'inset-shadow-teal-900': () => {
    throw new Error('inset-shadow-teal-900 is not supported')
  },
  'inset-shadow-teal-950': () => {
    throw new Error('inset-shadow-teal-950 is not supported')
  },
  'inset-shadow-cyan-50': () => {
    throw new Error('inset-shadow-cyan-50 is not supported')
  },
  'inset-shadow-cyan-100': () => {
    throw new Error('inset-shadow-cyan-100 is not supported')
  },
  'inset-shadow-cyan-200': () => {
    throw new Error('inset-shadow-cyan-200 is not supported')
  },
  'inset-shadow-cyan-300': () => {
    throw new Error('inset-shadow-cyan-300 is not supported')
  },
  'inset-shadow-cyan-400': () => {
    throw new Error('inset-shadow-cyan-400 is not supported')
  },
  'inset-shadow-cyan-500': () => {
    throw new Error('inset-shadow-cyan-500 is not supported')
  },
  'inset-shadow-cyan-600': () => {
    throw new Error('inset-shadow-cyan-600 is not supported')
  },
  'inset-shadow-cyan-700': () => {
    throw new Error('inset-shadow-cyan-700 is not supported')
  },
  'inset-shadow-cyan-800': () => {
    throw new Error('inset-shadow-cyan-800 is not supported')
  },
  'inset-shadow-cyan-900': () => {
    throw new Error('inset-shadow-cyan-900 is not supported')
  },
  'inset-shadow-cyan-950': () => {
    throw new Error('inset-shadow-cyan-950 is not supported')
  },
  'inset-shadow-sky-50': () => {
    throw new Error('inset-shadow-sky-50 is not supported')
  },
  'inset-shadow-sky-100': () => {
    throw new Error('inset-shadow-sky-100 is not supported')
  },
  'inset-shadow-sky-200': () => {
    throw new Error('inset-shadow-sky-200 is not supported')
  },
  'inset-shadow-sky-300': () => {
    throw new Error('inset-shadow-sky-300 is not supported')
  },
  'inset-shadow-sky-400': () => {
    throw new Error('inset-shadow-sky-400 is not supported')
  },
  'inset-shadow-sky-500': () => {
    throw new Error('inset-shadow-sky-500 is not supported')
  },
  'inset-shadow-sky-600': () => {
    throw new Error('inset-shadow-sky-600 is not supported')
  },
  'inset-shadow-sky-700': () => {
    throw new Error('inset-shadow-sky-700 is not supported')
  },
  'inset-shadow-sky-800': () => {
    throw new Error('inset-shadow-sky-800 is not supported')
  },
  'inset-shadow-sky-900': () => {
    throw new Error('inset-shadow-sky-900 is not supported')
  },
  'inset-shadow-sky-950': () => {
    throw new Error('inset-shadow-sky-950 is not supported')
  },
  'inset-shadow-blue-50': () => {
    throw new Error('inset-shadow-blue-50 is not supported')
  },
  'inset-shadow-blue-100': () => {
    throw new Error('inset-shadow-blue-100 is not supported')
  },
  'inset-shadow-blue-200': () => {
    throw new Error('inset-shadow-blue-200 is not supported')
  },
  'inset-shadow-blue-300': () => {
    throw new Error('inset-shadow-blue-300 is not supported')
  },
  'inset-shadow-blue-400': () => {
    throw new Error('inset-shadow-blue-400 is not supported')
  },
  'inset-shadow-blue-500': () => {
    throw new Error('inset-shadow-blue-500 is not supported')
  },
  'inset-shadow-blue-600': () => {
    throw new Error('inset-shadow-blue-600 is not supported')
  },
  'inset-shadow-blue-700': () => {
    throw new Error('inset-shadow-blue-700 is not supported')
  },
  'inset-shadow-blue-800': () => {
    throw new Error('inset-shadow-blue-800 is not supported')
  },
  'inset-shadow-blue-900': () => {
    throw new Error('inset-shadow-blue-900 is not supported')
  },
  'inset-shadow-blue-950': () => {
    throw new Error('inset-shadow-blue-950 is not supported')
  },
  'inset-shadow-indigo-50': () => {
    throw new Error('inset-shadow-indigo-50 is not supported')
  },
  'inset-shadow-indigo-100': () => {
    throw new Error('inset-shadow-indigo-100 is not supported')
  },
  'inset-shadow-indigo-200': () => {
    throw new Error('inset-shadow-indigo-200 is not supported')
  },
  'inset-shadow-indigo-300': () => {
    throw new Error('inset-shadow-indigo-300 is not supported')
  },
  'inset-shadow-indigo-400': () => {
    throw new Error('inset-shadow-indigo-400 is not supported')
  },
  'inset-shadow-indigo-500': () => {
    throw new Error('inset-shadow-indigo-500 is not supported')
  },
  'inset-shadow-indigo-600': () => {
    throw new Error('inset-shadow-indigo-600 is not supported')
  },
  'inset-shadow-indigo-700': () => {
    throw new Error('inset-shadow-indigo-700 is not supported')
  },
  'inset-shadow-indigo-800': () => {
    throw new Error('inset-shadow-indigo-800 is not supported')
  },
  'inset-shadow-indigo-900': () => {
    throw new Error('inset-shadow-indigo-900 is not supported')
  },
  'inset-shadow-indigo-950': () => {
    throw new Error('inset-shadow-indigo-950 is not supported')
  },
  'inset-shadow-violet-50': () => {
    throw new Error('inset-shadow-violet-50 is not supported')
  },
  'inset-shadow-violet-100': () => {
    throw new Error('inset-shadow-violet-100 is not supported')
  },
  'inset-shadow-violet-200': () => {
    throw new Error('inset-shadow-violet-200 is not supported')
  },
  'inset-shadow-violet-300': () => {
    throw new Error('inset-shadow-violet-300 is not supported')
  },
  'inset-shadow-violet-400': () => {
    throw new Error('inset-shadow-violet-400 is not supported')
  },
  'inset-shadow-violet-500': () => {
    throw new Error('inset-shadow-violet-500 is not supported')
  },
  'inset-shadow-violet-600': () => {
    throw new Error('inset-shadow-violet-600 is not supported')
  },
  'inset-shadow-violet-700': () => {
    throw new Error('inset-shadow-violet-700 is not supported')
  },
  'inset-shadow-violet-800': () => {
    throw new Error('inset-shadow-violet-800 is not supported')
  },
  'inset-shadow-violet-900': () => {
    throw new Error('inset-shadow-violet-900 is not supported')
  },
  'inset-shadow-violet-950': () => {
    throw new Error('inset-shadow-violet-950 is not supported')
  },
  'inset-shadow-purple-50': () => {
    throw new Error('inset-shadow-purple-50 is not supported')
  },
  'inset-shadow-purple-100': () => {
    throw new Error('inset-shadow-purple-100 is not supported')
  },
  'inset-shadow-purple-200': () => {
    throw new Error('inset-shadow-purple-200 is not supported')
  },
  'inset-shadow-purple-300': () => {
    throw new Error('inset-shadow-purple-300 is not supported')
  },
  'inset-shadow-purple-400': () => {
    throw new Error('inset-shadow-purple-400 is not supported')
  },
  'inset-shadow-purple-500': () => {
    throw new Error('inset-shadow-purple-500 is not supported')
  },
  'inset-shadow-purple-600': () => {
    throw new Error('inset-shadow-purple-600 is not supported')
  },
  'inset-shadow-purple-700': () => {
    throw new Error('inset-shadow-purple-700 is not supported')
  },
  'inset-shadow-purple-800': () => {
    throw new Error('inset-shadow-purple-800 is not supported')
  },
  'inset-shadow-purple-900': () => {
    throw new Error('inset-shadow-purple-900 is not supported')
  },
  'inset-shadow-purple-950': () => {
    throw new Error('inset-shadow-purple-950 is not supported')
  },
  'inset-shadow-fuchsia-50': () => {
    throw new Error('inset-shadow-fuchsia-50 is not supported')
  },
  'inset-shadow-fuchsia-100': () => {
    throw new Error('inset-shadow-fuchsia-100 is not supported')
  },
  'inset-shadow-fuchsia-200': () => {
    throw new Error('inset-shadow-fuchsia-200 is not supported')
  },
  'inset-shadow-fuchsia-300': () => {
    throw new Error('inset-shadow-fuchsia-300 is not supported')
  },
  'inset-shadow-fuchsia-400': () => {
    throw new Error('inset-shadow-fuchsia-400 is not supported')
  },
  'inset-shadow-fuchsia-500': () => {
    throw new Error('inset-shadow-fuchsia-500 is not supported')
  },
  'inset-shadow-fuchsia-600': () => {
    throw new Error('inset-shadow-fuchsia-600 is not supported')
  },
  'inset-shadow-fuchsia-700': () => {
    throw new Error('inset-shadow-fuchsia-700 is not supported')
  },
  'inset-shadow-fuchsia-800': () => {
    throw new Error('inset-shadow-fuchsia-800 is not supported')
  },
  'inset-shadow-fuchsia-900': () => {
    throw new Error('inset-shadow-fuchsia-900 is not supported')
  },
  'inset-shadow-fuchsia-950': () => {
    throw new Error('inset-shadow-fuchsia-950 is not supported')
  },
  'inset-shadow-pink-50': () => {
    throw new Error('inset-shadow-pink-50 is not supported')
  },
  'inset-shadow-pink-100': () => {
    throw new Error('inset-shadow-pink-100 is not supported')
  },
  'inset-shadow-pink-200': () => {
    throw new Error('inset-shadow-pink-200 is not supported')
  },
  'inset-shadow-pink-300': () => {
    throw new Error('inset-shadow-pink-300 is not supported')
  },
  'inset-shadow-pink-400': () => {
    throw new Error('inset-shadow-pink-400 is not supported')
  },
  'inset-shadow-pink-500': () => {
    throw new Error('inset-shadow-pink-500 is not supported')
  },
  'inset-shadow-pink-600': () => {
    throw new Error('inset-shadow-pink-600 is not supported')
  },
  'inset-shadow-pink-700': () => {
    throw new Error('inset-shadow-pink-700 is not supported')
  },
  'inset-shadow-pink-800': () => {
    throw new Error('inset-shadow-pink-800 is not supported')
  },
  'inset-shadow-pink-900': () => {
    throw new Error('inset-shadow-pink-900 is not supported')
  },
  'inset-shadow-pink-950': () => {
    throw new Error('inset-shadow-pink-950 is not supported')
  },
  'inset-shadow-rose-50': () => {
    throw new Error('inset-shadow-rose-50 is not supported')
  },
  'inset-shadow-rose-100': () => {
    throw new Error('inset-shadow-rose-100 is not supported')
  },
  'inset-shadow-rose-200': () => {
    throw new Error('inset-shadow-rose-200 is not supported')
  },
  'inset-shadow-rose-300': () => {
    throw new Error('inset-shadow-rose-300 is not supported')
  },
  'inset-shadow-rose-400': () => {
    throw new Error('inset-shadow-rose-400 is not supported')
  },
  'inset-shadow-rose-500': () => {
    throw new Error('inset-shadow-rose-500 is not supported')
  },
  'inset-shadow-rose-600': () => {
    throw new Error('inset-shadow-rose-600 is not supported')
  },
  'inset-shadow-rose-700': () => {
    throw new Error('inset-shadow-rose-700 is not supported')
  },
  'inset-shadow-rose-800': () => {
    throw new Error('inset-shadow-rose-800 is not supported')
  },
  'inset-shadow-rose-900': () => {
    throw new Error('inset-shadow-rose-900 is not supported')
  },
  'inset-shadow-rose-950': () => {
    throw new Error('inset-shadow-rose-950 is not supported')
  },
  'inset-shadow-slate-50': () => {
    throw new Error('inset-shadow-slate-50 is not supported')
  },
  'inset-shadow-slate-100': () => {
    throw new Error('inset-shadow-slate-100 is not supported')
  },
  'inset-shadow-slate-200': () => {
    throw new Error('inset-shadow-slate-200 is not supported')
  },
  'inset-shadow-slate-300': () => {
    throw new Error('inset-shadow-slate-300 is not supported')
  },
  'inset-shadow-slate-400': () => {
    throw new Error('inset-shadow-slate-400 is not supported')
  },
  'inset-shadow-slate-500': () => {
    throw new Error('inset-shadow-slate-500 is not supported')
  },
  'inset-shadow-slate-600': () => {
    throw new Error('inset-shadow-slate-600 is not supported')
  },
  'inset-shadow-slate-700': () => {
    throw new Error('inset-shadow-slate-700 is not supported')
  },
  'inset-shadow-slate-800': () => {
    throw new Error('inset-shadow-slate-800 is not supported')
  },
  'inset-shadow-slate-900': () => {
    throw new Error('inset-shadow-slate-900 is not supported')
  },
  'inset-shadow-slate-950': () => {
    throw new Error('inset-shadow-slate-950 is not supported')
  },
  'inset-shadow-gray-50': () => {
    throw new Error('inset-shadow-gray-50 is not supported')
  },
  'inset-shadow-gray-100': () => {
    throw new Error('inset-shadow-gray-100 is not supported')
  },
  'inset-shadow-gray-200': () => {
    throw new Error('inset-shadow-gray-200 is not supported')
  },
  'inset-shadow-gray-300': () => {
    throw new Error('inset-shadow-gray-300 is not supported')
  },
  'inset-shadow-gray-400': () => {
    throw new Error('inset-shadow-gray-400 is not supported')
  },
  'inset-shadow-gray-500': () => {
    throw new Error('inset-shadow-gray-500 is not supported')
  },
  'inset-shadow-gray-600': () => {
    throw new Error('inset-shadow-gray-600 is not supported')
  },
  'inset-shadow-gray-700': () => {
    throw new Error('inset-shadow-gray-700 is not supported')
  },
  'inset-shadow-gray-800': () => {
    throw new Error('inset-shadow-gray-800 is not supported')
  },
  'inset-shadow-gray-900': () => {
    throw new Error('inset-shadow-gray-900 is not supported')
  },
  'inset-shadow-gray-950': () => {
    throw new Error('inset-shadow-gray-950 is not supported')
  },
  'inset-shadow-zinc-50': () => {
    throw new Error('inset-shadow-zinc-50 is not supported')
  },
  'inset-shadow-zinc-100': () => {
    throw new Error('inset-shadow-zinc-100 is not supported')
  },
  'inset-shadow-zinc-200': () => {
    throw new Error('inset-shadow-zinc-200 is not supported')
  },
  'inset-shadow-zinc-300': () => {
    throw new Error('inset-shadow-zinc-300 is not supported')
  },
  'inset-shadow-zinc-400': () => {
    throw new Error('inset-shadow-zinc-400 is not supported')
  },
  'inset-shadow-zinc-500': () => {
    throw new Error('inset-shadow-zinc-500 is not supported')
  },
  'inset-shadow-zinc-600': () => {
    throw new Error('inset-shadow-zinc-600 is not supported')
  },
  'inset-shadow-zinc-700': () => {
    throw new Error('inset-shadow-zinc-700 is not supported')
  },
  'inset-shadow-zinc-800': () => {
    throw new Error('inset-shadow-zinc-800 is not supported')
  },
  'inset-shadow-zinc-900': () => {
    throw new Error('inset-shadow-zinc-900 is not supported')
  },
  'inset-shadow-zinc-950': () => {
    throw new Error('inset-shadow-zinc-950 is not supported')
  },
  'inset-shadow-neutral-50': () => {
    throw new Error('inset-shadow-neutral-50 is not supported')
  },
  'inset-shadow-neutral-100': () => {
    throw new Error('inset-shadow-neutral-100 is not supported')
  },
  'inset-shadow-neutral-200': () => {
    throw new Error('inset-shadow-neutral-200 is not supported')
  },
  'inset-shadow-neutral-300': () => {
    throw new Error('inset-shadow-neutral-300 is not supported')
  },
  'inset-shadow-neutral-400': () => {
    throw new Error('inset-shadow-neutral-400 is not supported')
  },
  'inset-shadow-neutral-500': () => {
    throw new Error('inset-shadow-neutral-500 is not supported')
  },
  'inset-shadow-neutral-600': () => {
    throw new Error('inset-shadow-neutral-600 is not supported')
  },
  'inset-shadow-neutral-700': () => {
    throw new Error('inset-shadow-neutral-700 is not supported')
  },
  'inset-shadow-neutral-800': () => {
    throw new Error('inset-shadow-neutral-800 is not supported')
  },
  'inset-shadow-neutral-900': () => {
    throw new Error('inset-shadow-neutral-900 is not supported')
  },
  'inset-shadow-neutral-950': () => {
    throw new Error('inset-shadow-neutral-950 is not supported')
  },
  'inset-shadow-stone-50': () => {
    throw new Error('inset-shadow-stone-50 is not supported')
  },
  'inset-shadow-stone-100': () => {
    throw new Error('inset-shadow-stone-100 is not supported')
  },
  'inset-shadow-stone-200': () => {
    throw new Error('inset-shadow-stone-200 is not supported')
  },
  'inset-shadow-stone-300': () => {
    throw new Error('inset-shadow-stone-300 is not supported')
  },
  'inset-shadow-stone-400': () => {
    throw new Error('inset-shadow-stone-400 is not supported')
  },
  'inset-shadow-stone-500': () => {
    throw new Error('inset-shadow-stone-500 is not supported')
  },
  'inset-shadow-stone-600': () => {
    throw new Error('inset-shadow-stone-600 is not supported')
  },
  'inset-shadow-stone-700': () => {
    throw new Error('inset-shadow-stone-700 is not supported')
  },
  'inset-shadow-stone-800': () => {
    throw new Error('inset-shadow-stone-800 is not supported')
  },
  'inset-shadow-stone-900': () => {
    throw new Error('inset-shadow-stone-900 is not supported')
  },
  'inset-shadow-stone-950': () => {
    throw new Error('inset-shadow-stone-950 is not supported')
  },
  ring: () => ({ twRingShadow: '0 0 0 1px' }),
  'ring-<number>': ([value]) => ({ twRingShadow: `0 0 0 ${value}px` }),
  'ring-(<custom-property>)': ([value]) => ({ twRingShadow: `0 0 0 var(${value})` }),
  'ring-[<value>]': ([value]) => ({ twRingShadow: `0 0 0 ${value}` }),
  'ring-inherit': () => ({ twRingColor: 'inherit' }),
  'ring-current': () => ({ twRingColor: 'currentColor' }),
  'ring-transparent': () => ({ twRingColor: 'transparent' }),
  'ring-black': () => ({ twRingColor: 'var(--color-black)' }),
  'ring-white': () => ({ twRingColor: 'var(--color-white)' }),
  'ring-red-50': () => ({ twRingColor: 'var(--color-red-50)' }),
  'ring-red-100': () => ({ twRingColor: 'var(--color-red-100)' }),
  'ring-red-200': () => ({ twRingColor: 'var(--color-red-200)' }),
  'ring-red-300': () => ({ twRingColor: 'var(--color-red-300)' }),
  'ring-red-400': () => ({ twRingColor: 'var(--color-red-400)' }),
  'ring-red-500': () => ({ twRingColor: 'var(--color-red-500)' }),
  'ring-red-600': () => ({ twRingColor: 'var(--color-red-600)' }),
  'ring-red-700': () => ({ twRingColor: 'var(--color-red-700)' }),
  'ring-red-800': () => ({ twRingColor: 'var(--color-red-800)' }),
  'ring-red-900': () => ({ twRingColor: 'var(--color-red-900)' }),
  'ring-red-950': () => ({ twRingColor: 'var(--color-red-950)' }),
  'ring-orange-50': () => ({ twRingColor: 'var(--color-orange-50)' }),
  'ring-orange-100': () => ({ twRingColor: 'var(--color-orange-100)' }),
  'ring-orange-200': () => ({ twRingColor: 'var(--color-orange-200)' }),
  'ring-orange-300': () => ({ twRingColor: 'var(--color-orange-300)' }),
  'ring-orange-400': () => ({ twRingColor: 'var(--color-orange-400)' }),
  'ring-orange-500': () => ({ twRingColor: 'var(--color-orange-500)' }),
  'ring-orange-600': () => ({ twRingColor: 'var(--color-orange-600)' }),
  'ring-orange-700': () => ({ twRingColor: 'var(--color-orange-700)' }),
  'ring-orange-800': () => ({ twRingColor: 'var(--color-orange-800)' }),
  'ring-orange-900': () => ({ twRingColor: 'var(--color-orange-900)' }),
  'ring-orange-950': () => ({ twRingColor: 'var(--color-orange-950)' }),
  'ring-amber-50': () => ({ twRingColor: 'var(--color-amber-50)' }),
  'ring-amber-100': () => ({ twRingColor: 'var(--color-amber-100)' }),
  'ring-amber-200': () => ({ twRingColor: 'var(--color-amber-200)' }),
  'ring-amber-300': () => ({ twRingColor: 'var(--color-amber-300)' }),
  'ring-amber-400': () => ({ twRingColor: 'var(--color-amber-400)' }),
  'ring-amber-500': () => ({ twRingColor: 'var(--color-amber-500)' }),
  'ring-amber-600': () => ({ twRingColor: 'var(--color-amber-600)' }),
  'ring-amber-700': () => ({ twRingColor: 'var(--color-amber-700)' }),
  'ring-amber-800': () => ({ twRingColor: 'var(--color-amber-800)' }),
  'ring-amber-900': () => ({ twRingColor: 'var(--color-amber-900)' }),
  'ring-amber-950': () => ({ twRingColor: 'var(--color-amber-950)' }),
  'ring-yellow-50': () => ({ twRingColor: 'var(--color-yellow-50)' }),
  'ring-yellow-100': () => ({ twRingColor: 'var(--color-yellow-100)' }),
  'ring-yellow-200': () => ({ twRingColor: 'var(--color-yellow-200)' }),
  'ring-yellow-300': () => ({ twRingColor: 'var(--color-yellow-300)' }),
  'ring-yellow-400': () => ({ twRingColor: 'var(--color-yellow-400)' }),
  'ring-yellow-500': () => ({ twRingColor: 'var(--color-yellow-500)' }),
  'ring-yellow-600': () => ({ twRingColor: 'var(--color-yellow-600)' }),
  'ring-yellow-700': () => ({ twRingColor: 'var(--color-yellow-700)' }),
  'ring-yellow-800': () => ({ twRingColor: 'var(--color-yellow-800)' }),
  'ring-yellow-900': () => ({ twRingColor: 'var(--color-yellow-900)' }),
  'ring-yellow-950': () => ({ twRingColor: 'var(--color-yellow-950)' }),
  'ring-lime-50': () => ({ twRingColor: 'var(--color-lime-50)' }),
  'ring-lime-100': () => ({ twRingColor: 'var(--color-lime-100)' }),
  'ring-lime-200': () => ({ twRingColor: 'var(--color-lime-200)' }),
  'ring-lime-300': () => ({ twRingColor: 'var(--color-lime-300)' }),
  'ring-lime-400': () => ({ twRingColor: 'var(--color-lime-400)' }),
  'ring-lime-500': () => ({ twRingColor: 'var(--color-lime-500)' }),
  'ring-lime-600': () => ({ twRingColor: 'var(--color-lime-600)' }),
  'ring-lime-700': () => ({ twRingColor: 'var(--color-lime-700)' }),
  'ring-lime-800': () => ({ twRingColor: 'var(--color-lime-800)' }),
  'ring-lime-900': () => ({ twRingColor: 'var(--color-lime-900)' }),
  'ring-lime-950': () => ({ twRingColor: 'var(--color-lime-950)' }),
  'ring-green-50': () => ({ twRingColor: 'var(--color-green-50)' }),
  'ring-green-100': () => ({ twRingColor: 'var(--color-green-100)' }),
  'ring-green-200': () => ({ twRingColor: 'var(--color-green-200)' }),
  'ring-green-300': () => ({ twRingColor: 'var(--color-green-300)' }),
  'ring-green-400': () => ({ twRingColor: 'var(--color-green-400)' }),
  'ring-green-500': () => ({ twRingColor: 'var(--color-green-500)' }),
  'ring-green-600': () => ({ twRingColor: 'var(--color-green-600)' }),
  'ring-green-700': () => ({ twRingColor: 'var(--color-green-700)' }),
  'ring-green-800': () => ({ twRingColor: 'var(--color-green-800)' }),
  'ring-green-900': () => ({ twRingColor: 'var(--color-green-900)' }),
  'ring-green-950': () => ({ twRingColor: 'var(--color-green-950)' }),
  'ring-emerald-50': () => ({ twRingColor: 'var(--color-emerald-50)' }),
  'ring-emerald-100': () => ({ twRingColor: 'var(--color-emerald-100)' }),
  'ring-emerald-200': () => ({ twRingColor: 'var(--color-emerald-200)' }),
  'ring-emerald-300': () => ({ twRingColor: 'var(--color-emerald-300)' }),
  'ring-emerald-400': () => ({ twRingColor: 'var(--color-emerald-400)' }),
  'ring-emerald-500': () => ({ twRingColor: 'var(--color-emerald-500)' }),
  'ring-emerald-600': () => ({ twRingColor: 'var(--color-emerald-600)' }),
  'ring-emerald-700': () => ({ twRingColor: 'var(--color-emerald-700)' }),
  'ring-emerald-800': () => ({ twRingColor: 'var(--color-emerald-800)' }),
  'ring-emerald-900': () => ({ twRingColor: 'var(--color-emerald-900)' }),
  'ring-emerald-950': () => ({ twRingColor: 'var(--color-emerald-950)' }),
  'ring-teal-50': () => ({ twRingColor: 'var(--color-teal-50)' }),
  'ring-teal-100': () => ({ twRingColor: 'var(--color-teal-100)' }),
  'ring-teal-200': () => ({ twRingColor: 'var(--color-teal-200)' }),
  'ring-teal-300': () => ({ twRingColor: 'var(--color-teal-300)' }),
  'ring-teal-400': () => ({ twRingColor: 'var(--color-teal-400)' }),
  'ring-teal-500': () => ({ twRingColor: 'var(--color-teal-500)' }),
  'ring-teal-600': () => ({ twRingColor: 'var(--color-teal-600)' }),
  'ring-teal-700': () => ({ twRingColor: 'var(--color-teal-700)' }),
  'ring-teal-800': () => ({ twRingColor: 'var(--color-teal-800)' }),
  'ring-teal-900': () => ({ twRingColor: 'var(--color-teal-900)' }),
  'ring-teal-950': () => ({ twRingColor: 'var(--color-teal-950)' }),
  'ring-cyan-50': () => ({ twRingColor: 'var(--color-cyan-50)' }),
  'ring-cyan-100': () => ({ twRingColor: 'var(--color-cyan-100)' }),
  'ring-cyan-200': () => ({ twRingColor: 'var(--color-cyan-200)' }),
  'ring-cyan-300': () => ({ twRingColor: 'var(--color-cyan-300)' }),
  'ring-cyan-400': () => ({ twRingColor: 'var(--color-cyan-400)' }),
  'ring-cyan-500': () => ({ twRingColor: 'var(--color-cyan-500)' }),
  'ring-cyan-600': () => ({ twRingColor: 'var(--color-cyan-600)' }),
  'ring-cyan-700': () => ({ twRingColor: 'var(--color-cyan-700)' }),
  'ring-cyan-800': () => ({ twRingColor: 'var(--color-cyan-800)' }),
  'ring-cyan-900': () => ({ twRingColor: 'var(--color-cyan-900)' }),
  'ring-cyan-950': () => ({ twRingColor: 'var(--color-cyan-950)' }),
  'ring-sky-50': () => ({ twRingColor: 'var(--color-sky-50)' }),
  'ring-sky-100': () => ({ twRingColor: 'var(--color-sky-100)' }),
  'ring-sky-200': () => ({ twRingColor: 'var(--color-sky-200)' }),
  'ring-sky-300': () => ({ twRingColor: 'var(--color-sky-300)' }),
  'ring-sky-400': () => ({ twRingColor: 'var(--color-sky-400)' }),
  'ring-sky-500': () => ({ twRingColor: 'var(--color-sky-500)' }),
  'ring-sky-600': () => ({ twRingColor: 'var(--color-sky-600)' }),
  'ring-sky-700': () => ({ twRingColor: 'var(--color-sky-700)' }),
  'ring-sky-800': () => ({ twRingColor: 'var(--color-sky-800)' }),
  'ring-sky-900': () => ({ twRingColor: 'var(--color-sky-900)' }),
  'ring-sky-950': () => ({ twRingColor: 'var(--color-sky-950)' }),
  'ring-blue-50': () => ({ twRingColor: 'var(--color-blue-50)' }),
  'ring-blue-100': () => ({ twRingColor: 'var(--color-blue-100)' }),
  'ring-blue-200': () => ({ twRingColor: 'var(--color-blue-200)' }),
  'ring-blue-300': () => ({ twRingColor: 'var(--color-blue-300)' }),
  'ring-blue-400': () => ({ twRingColor: 'var(--color-blue-400)' }),
  'ring-blue-500': () => ({ twRingColor: 'var(--color-blue-500)' }),
  'ring-blue-600': () => ({ twRingColor: 'var(--color-blue-600)' }),
  'ring-blue-700': () => ({ twRingColor: 'var(--color-blue-700)' }),
  'ring-blue-800': () => ({ twRingColor: 'var(--color-blue-800)' }),
  'ring-blue-900': () => ({ twRingColor: 'var(--color-blue-900)' }),
  'ring-blue-950': () => ({ twRingColor: 'var(--color-blue-950)' }),
  'ring-indigo-50': () => ({ twRingColor: 'var(--color-indigo-50)' }),
  'ring-indigo-100': () => ({ twRingColor: 'var(--color-indigo-100)' }),
  'ring-indigo-200': () => ({ twRingColor: 'var(--color-indigo-200)' }),
  'ring-indigo-300': () => ({ twRingColor: 'var(--color-indigo-300)' }),
  'ring-indigo-400': () => ({ twRingColor: 'var(--color-indigo-400)' }),
  'ring-indigo-500': () => ({ twRingColor: 'var(--color-indigo-500)' }),
  'ring-indigo-600': () => ({ twRingColor: 'var(--color-indigo-600)' }),
  'ring-indigo-700': () => ({ twRingColor: 'var(--color-indigo-700)' }),
  'ring-indigo-800': () => ({ twRingColor: 'var(--color-indigo-800)' }),
  'ring-indigo-900': () => ({ twRingColor: 'var(--color-indigo-900)' }),
  'ring-indigo-950': () => ({ twRingColor: 'var(--color-indigo-950)' }),
  'ring-violet-50': () => ({ twRingColor: 'var(--color-violet-50)' }),
  'ring-violet-100': () => ({ twRingColor: 'var(--color-violet-100)' }),
  'ring-violet-200': () => ({ twRingColor: 'var(--color-violet-200)' }),
  'ring-violet-300': () => ({ twRingColor: 'var(--color-violet-300)' }),
  'ring-violet-400': () => ({ twRingColor: 'var(--color-violet-400)' }),
  'ring-violet-500': () => ({ twRingColor: 'var(--color-violet-500)' }),
  'ring-violet-600': () => ({ twRingColor: 'var(--color-violet-600)' }),
  'ring-violet-700': () => ({ twRingColor: 'var(--color-violet-700)' }),
  'ring-violet-800': () => ({ twRingColor: 'var(--color-violet-800)' }),
  'ring-violet-900': () => ({ twRingColor: 'var(--color-violet-900)' }),
  'ring-violet-950': () => ({ twRingColor: 'var(--color-violet-950)' }),
  'ring-purple-50': () => ({ twRingColor: 'var(--color-purple-50)' }),
  'ring-purple-100': () => ({ twRingColor: 'var(--color-purple-100)' }),
  'ring-purple-200': () => ({ twRingColor: 'var(--color-purple-200)' }),
  'ring-purple-300': () => ({ twRingColor: 'var(--color-purple-300)' }),
  'ring-purple-400': () => ({ twRingColor: 'var(--color-purple-400)' }),
  'ring-purple-500': () => ({ twRingColor: 'var(--color-purple-500)' }),
  'ring-purple-600': () => ({ twRingColor: 'var(--color-purple-600)' }),
  'ring-purple-700': () => ({ twRingColor: 'var(--color-purple-700)' }),
  'ring-purple-800': () => ({ twRingColor: 'var(--color-purple-800)' }),
  'ring-purple-900': () => ({ twRingColor: 'var(--color-purple-900)' }),
  'ring-purple-950': () => ({ twRingColor: 'var(--color-purple-950)' }),
  'ring-fuchsia-50': () => ({ twRingColor: 'var(--color-fuchsia-50)' }),
  'ring-fuchsia-100': () => ({ twRingColor: 'var(--color-fuchsia-100)' }),
  'ring-fuchsia-200': () => ({ twRingColor: 'var(--color-fuchsia-200)' }),
  'ring-fuchsia-300': () => ({ twRingColor: 'var(--color-fuchsia-300)' }),
  'ring-fuchsia-400': () => ({ twRingColor: 'var(--color-fuchsia-400)' }),
  'ring-fuchsia-500': () => ({ twRingColor: 'var(--color-fuchsia-500)' }),
  'ring-fuchsia-600': () => ({ twRingColor: 'var(--color-fuchsia-600)' }),
  'ring-fuchsia-700': () => ({ twRingColor: 'var(--color-fuchsia-700)' }),
  'ring-fuchsia-800': () => ({ twRingColor: 'var(--color-fuchsia-800)' }),
  'ring-fuchsia-900': () => ({ twRingColor: 'var(--color-fuchsia-900)' }),
  'ring-fuchsia-950': () => ({ twRingColor: 'var(--color-fuchsia-950)' }),
  'ring-pink-50': () => ({ twRingColor: 'var(--color-pink-50)' }),
  'ring-pink-100': () => ({ twRingColor: 'var(--color-pink-100)' }),
  'ring-pink-200': () => ({ twRingColor: 'var(--color-pink-200)' }),
  'ring-pink-300': () => ({ twRingColor: 'var(--color-pink-300)' }),
  'ring-pink-400': () => ({ twRingColor: 'var(--color-pink-400)' }),
  'ring-pink-500': () => ({ twRingColor: 'var(--color-pink-500)' }),
  'ring-pink-600': () => ({ twRingColor: 'var(--color-pink-600)' }),
  'ring-pink-700': () => ({ twRingColor: 'var(--color-pink-700)' }),
  'ring-pink-800': () => ({ twRingColor: 'var(--color-pink-800)' }),
  'ring-pink-900': () => ({ twRingColor: 'var(--color-pink-900)' }),
  'ring-pink-950': () => ({ twRingColor: 'var(--color-pink-950)' }),
  'ring-rose-50': () => ({ twRingColor: 'var(--color-rose-50)' }),
  'ring-rose-100': () => ({ twRingColor: 'var(--color-rose-100)' }),
  'ring-rose-200': () => ({ twRingColor: 'var(--color-rose-200)' }),
  'ring-rose-300': () => ({ twRingColor: 'var(--color-rose-300)' }),
  'ring-rose-400': () => ({ twRingColor: 'var(--color-rose-400)' }),
  'ring-rose-500': () => ({ twRingColor: 'var(--color-rose-500)' }),
  'ring-rose-600': () => ({ twRingColor: 'var(--color-rose-600)' }),
  'ring-rose-700': () => ({ twRingColor: 'var(--color-rose-700)' }),
  'ring-rose-800': () => ({ twRingColor: 'var(--color-rose-800)' }),
  'ring-rose-900': () => ({ twRingColor: 'var(--color-rose-900)' }),
  'ring-rose-950': () => ({ twRingColor: 'var(--color-rose-950)' }),
  'ring-slate-50': () => ({ twRingColor: 'var(--color-slate-50)' }),
  'ring-slate-100': () => ({ twRingColor: 'var(--color-slate-100)' }),
  'ring-slate-200': () => ({ twRingColor: 'var(--color-slate-200)' }),
  'ring-slate-300': () => ({ twRingColor: 'var(--color-slate-300)' }),
  'ring-slate-400': () => ({ twRingColor: 'var(--color-slate-400)' }),
  'ring-slate-500': () => ({ twRingColor: 'var(--color-slate-500)' }),
  'ring-slate-600': () => ({ twRingColor: 'var(--color-slate-600)' }),
  'ring-slate-700': () => ({ twRingColor: 'var(--color-slate-700)' }),
  'ring-slate-800': () => ({ twRingColor: 'var(--color-slate-800)' }),
  'ring-slate-900': () => ({ twRingColor: 'var(--color-slate-900)' }),
  'ring-slate-950': () => ({ twRingColor: 'var(--color-slate-950)' }),
  'ring-gray-50': () => ({ twRingColor: 'var(--color-gray-50)' }),
  'ring-gray-100': () => ({ twRingColor: 'var(--color-gray-100)' }),
  'ring-gray-200': () => ({ twRingColor: 'var(--color-gray-200)' }),
  'ring-gray-300': () => ({ twRingColor: 'var(--color-gray-300)' }),
  'ring-gray-400': () => ({ twRingColor: 'var(--color-gray-400)' }),
  'ring-gray-500': () => ({ twRingColor: 'var(--color-gray-500)' }),
  'ring-gray-600': () => ({ twRingColor: 'var(--color-gray-600)' }),
  'ring-gray-700': () => ({ twRingColor: 'var(--color-gray-700)' }),
  'ring-gray-800': () => ({ twRingColor: 'var(--color-gray-800)' }),
  'ring-gray-900': () => ({ twRingColor: 'var(--color-gray-900)' }),
  'ring-gray-950': () => ({ twRingColor: 'var(--color-gray-950)' }),
  'ring-zinc-50': () => ({ twRingColor: 'var(--color-zinc-50)' }),
  'ring-zinc-100': () => ({ twRingColor: 'var(--color-zinc-100)' }),
  'ring-zinc-200': () => ({ twRingColor: 'var(--color-zinc-200)' }),
  'ring-zinc-300': () => ({ twRingColor: 'var(--color-zinc-300)' }),
  'ring-zinc-400': () => ({ twRingColor: 'var(--color-zinc-400)' }),
  'ring-zinc-500': () => ({ twRingColor: 'var(--color-zinc-500)' }),
  'ring-zinc-600': () => ({ twRingColor: 'var(--color-zinc-600)' }),
  'ring-zinc-700': () => ({ twRingColor: 'var(--color-zinc-700)' }),
  'ring-zinc-800': () => ({ twRingColor: 'var(--color-zinc-800)' }),
  'ring-zinc-900': () => ({ twRingColor: 'var(--color-zinc-900)' }),
  'ring-zinc-950': () => ({ twRingColor: 'var(--color-zinc-950)' }),
  'ring-neutral-50': () => ({ twRingColor: 'var(--color-neutral-50)' }),
  'ring-neutral-100': () => ({ twRingColor: 'var(--color-neutral-100)' }),
  'ring-neutral-200': () => ({ twRingColor: 'var(--color-neutral-200)' }),
  'ring-neutral-300': () => ({ twRingColor: 'var(--color-neutral-300)' }),
  'ring-neutral-400': () => ({ twRingColor: 'var(--color-neutral-400)' }),
  'ring-neutral-500': () => ({ twRingColor: 'var(--color-neutral-500)' }),
  'ring-neutral-600': () => ({ twRingColor: 'var(--color-neutral-600)' }),
  'ring-neutral-700': () => ({ twRingColor: 'var(--color-neutral-700)' }),
  'ring-neutral-800': () => ({ twRingColor: 'var(--color-neutral-800)' }),
  'ring-neutral-900': () => ({ twRingColor: 'var(--color-neutral-900)' }),
  'ring-neutral-950': () => ({ twRingColor: 'var(--color-neutral-950)' }),
  'ring-stone-50': () => ({ twRingColor: 'var(--color-stone-50)' }),
  'ring-stone-100': () => ({ twRingColor: 'var(--color-stone-100)' }),
  'ring-stone-200': () => ({ twRingColor: 'var(--color-stone-200)' }),
  'ring-stone-300': () => ({ twRingColor: 'var(--color-stone-300)' }),
  'ring-stone-400': () => ({ twRingColor: 'var(--color-stone-400)' }),
  'ring-stone-500': () => ({ twRingColor: 'var(--color-stone-500)' }),
  'ring-stone-600': () => ({ twRingColor: 'var(--color-stone-600)' }),
  'ring-stone-700': () => ({ twRingColor: 'var(--color-stone-700)' }),
  'ring-stone-800': () => ({ twRingColor: 'var(--color-stone-800)' }),
  'ring-stone-900': () => ({ twRingColor: 'var(--color-stone-900)' }),
  'ring-stone-950': () => ({ twRingColor: 'var(--color-stone-950)' }),
  'inset-ring': () => ({ twInsetRingShadow: 'inset 0 0 0 1px' }),
  'inset-ring-<number>': ([value]) => ({ twInsetRingShadow: `inset 0 0 0 ${value}px` }),
  'inset-ring-(<custom-property>)': ([value]) => ({
    twInsetRingShadow: `inset 0 0 0 var(${value})`,
  }),
  'inset-ring-[<value>]': ([value]) => ({ twInsetRingShadow: `inset 0 0 0 ${value}` }),
  'inset-ring-inherit': () => ({ twInsetRingColor: 'inherit' }),
  'inset-ring-current': () => ({ twInsetRingColor: 'currentColor' }),
  'inset-ring-transparent': () => ({ twInsetRingColor: 'transparent' }),
  'inset-ring-black': () => ({ twInsetRingColor: 'var(--color-black)' }),
  'inset-ring-white': () => ({ twInsetRingColor: 'var(--color-white)' }),
  'inset-ring-red-50': () => ({ twInsetRingColor: 'var(--color-red-50)' }),
  'inset-ring-red-100': () => ({ twInsetRingColor: 'var(--color-red-100)' }),
  'inset-ring-red-200': () => ({ twInsetRingColor: 'var(--color-red-200)' }),
  'inset-ring-red-300': () => ({ twInsetRingColor: 'var(--color-red-300)' }),
  'inset-ring-red-400': () => ({ twInsetRingColor: 'var(--color-red-400)' }),
  'inset-ring-red-500': () => ({ twInsetRingColor: 'var(--color-red-500)' }),
  'inset-ring-red-600': () => ({ twInsetRingColor: 'var(--color-red-600)' }),
  'inset-ring-red-700': () => ({ twInsetRingColor: 'var(--color-red-700)' }),
  'inset-ring-red-800': () => ({ twInsetRingColor: 'var(--color-red-800)' }),
  'inset-ring-red-900': () => ({ twInsetRingColor: 'var(--color-red-900)' }),
  'inset-ring-red-950': () => ({ twInsetRingColor: 'var(--color-red-950)' }),
  'inset-ring-orange-50': () => ({ twInsetRingColor: 'var(--color-orange-50)' }),
  'inset-ring-orange-100': () => ({ twInsetRingColor: 'var(--color-orange-100)' }),
  'inset-ring-orange-200': () => ({ twInsetRingColor: 'var(--color-orange-200)' }),
  'inset-ring-orange-300': () => ({ twInsetRingColor: 'var(--color-orange-300)' }),
  'inset-ring-orange-400': () => ({ twInsetRingColor: 'var(--color-orange-400)' }),
  'inset-ring-orange-500': () => ({ twInsetRingColor: 'var(--color-orange-500)' }),
  'inset-ring-orange-600': () => ({ twInsetRingColor: 'var(--color-orange-600)' }),
  'inset-ring-orange-700': () => ({ twInsetRingColor: 'var(--color-orange-700)' }),
  'inset-ring-orange-800': () => ({ twInsetRingColor: 'var(--color-orange-800)' }),
  'inset-ring-orange-900': () => ({ twInsetRingColor: 'var(--color-orange-900)' }),
  'inset-ring-orange-950': () => ({ twInsetRingColor: 'var(--color-orange-950)' }),
  'inset-ring-amber-50': () => ({ twInsetRingColor: 'var(--color-amber-50)' }),
  'inset-ring-amber-100': () => ({ twInsetRingColor: 'var(--color-amber-100)' }),
  'inset-ring-amber-200': () => ({ twInsetRingColor: 'var(--color-amber-200)' }),
  'inset-ring-amber-300': () => ({ twInsetRingColor: 'var(--color-amber-300)' }),
  'inset-ring-amber-400': () => ({ twInsetRingColor: 'var(--color-amber-400)' }),
  'inset-ring-amber-500': () => ({ twInsetRingColor: 'var(--color-amber-500)' }),
  'inset-ring-amber-600': () => ({ twInsetRingColor: 'var(--color-amber-600)' }),
  'inset-ring-amber-700': () => ({ twInsetRingColor: 'var(--color-amber-700)' }),
  'inset-ring-amber-800': () => ({ twInsetRingColor: 'var(--color-amber-800)' }),
  'inset-ring-amber-900': () => ({ twInsetRingColor: 'var(--color-amber-900)' }),
  'inset-ring-amber-950': () => ({ twInsetRingColor: 'var(--color-amber-950)' }),
  'inset-ring-yellow-50': () => ({ twInsetRingColor: 'var(--color-yellow-50)' }),
  'inset-ring-yellow-100': () => ({ twInsetRingColor: 'var(--color-yellow-100)' }),
  'inset-ring-yellow-200': () => ({ twInsetRingColor: 'var(--color-yellow-200)' }),
  'inset-ring-yellow-300': () => ({ twInsetRingColor: 'var(--color-yellow-300)' }),
  'inset-ring-yellow-400': () => ({ twInsetRingColor: 'var(--color-yellow-400)' }),
  'inset-ring-yellow-500': () => ({ twInsetRingColor: 'var(--color-yellow-500)' }),
  'inset-ring-yellow-600': () => ({ twInsetRingColor: 'var(--color-yellow-600)' }),
  'inset-ring-yellow-700': () => ({ twInsetRingColor: 'var(--color-yellow-700)' }),
  'inset-ring-yellow-800': () => ({ twInsetRingColor: 'var(--color-yellow-800)' }),
  'inset-ring-yellow-900': () => ({ twInsetRingColor: 'var(--color-yellow-900)' }),
  'inset-ring-yellow-950': () => ({ twInsetRingColor: 'var(--color-yellow-950)' }),
  'inset-ring-lime-50': () => ({ twInsetRingColor: 'var(--color-lime-50)' }),
  'inset-ring-lime-100': () => ({ twInsetRingColor: 'var(--color-lime-100)' }),
  'inset-ring-lime-200': () => ({ twInsetRingColor: 'var(--color-lime-200)' }),
  'inset-ring-lime-300': () => ({ twInsetRingColor: 'var(--color-lime-300)' }),
  'inset-ring-lime-400': () => ({ twInsetRingColor: 'var(--color-lime-400)' }),
  'inset-ring-lime-500': () => ({ twInsetRingColor: 'var(--color-lime-500)' }),
  'inset-ring-lime-600': () => ({ twInsetRingColor: 'var(--color-lime-600)' }),
  'inset-ring-lime-700': () => ({ twInsetRingColor: 'var(--color-lime-700)' }),
  'inset-ring-lime-800': () => ({ twInsetRingColor: 'var(--color-lime-800)' }),
  'inset-ring-lime-900': () => ({ twInsetRingColor: 'var(--color-lime-900)' }),
  'inset-ring-lime-950': () => ({ twInsetRingColor: 'var(--color-lime-950)' }),
  'inset-ring-green-50': () => ({ twInsetRingColor: 'var(--color-green-50)' }),
  'inset-ring-green-100': () => ({ twInsetRingColor: 'var(--color-green-100)' }),
  'inset-ring-green-200': () => ({ twInsetRingColor: 'var(--color-green-200)' }),
  'inset-ring-green-300': () => ({ twInsetRingColor: 'var(--color-green-300)' }),
  'inset-ring-green-400': () => ({ twInsetRingColor: 'var(--color-green-400)' }),
  'inset-ring-green-500': () => ({ twInsetRingColor: 'var(--color-green-500)' }),
  'inset-ring-green-600': () => ({ twInsetRingColor: 'var(--color-green-600)' }),
  'inset-ring-green-700': () => ({ twInsetRingColor: 'var(--color-green-700)' }),
  'inset-ring-green-800': () => ({ twInsetRingColor: 'var(--color-green-800)' }),
  'inset-ring-green-900': () => ({ twInsetRingColor: 'var(--color-green-900)' }),
  'inset-ring-green-950': () => ({ twInsetRingColor: 'var(--color-green-950)' }),
  'inset-ring-emerald-50': () => ({ twInsetRingColor: 'var(--color-emerald-50)' }),
  'inset-ring-emerald-100': () => ({ twInsetRingColor: 'var(--color-emerald-100)' }),
  'inset-ring-emerald-200': () => ({ twInsetRingColor: 'var(--color-emerald-200)' }),
  'inset-ring-emerald-300': () => ({ twInsetRingColor: 'var(--color-emerald-300)' }),
  'inset-ring-emerald-400': () => ({ twInsetRingColor: 'var(--color-emerald-400)' }),
  'inset-ring-emerald-500': () => ({ twInsetRingColor: 'var(--color-emerald-500)' }),
  'inset-ring-emerald-600': () => ({ twInsetRingColor: 'var(--color-emerald-600)' }),
  'inset-ring-emerald-700': () => ({ twInsetRingColor: 'var(--color-emerald-700)' }),
  'inset-ring-emerald-800': () => ({ twInsetRingColor: 'var(--color-emerald-800)' }),
  'inset-ring-emerald-900': () => ({ twInsetRingColor: 'var(--color-emerald-900)' }),
  'inset-ring-emerald-950': () => ({ twInsetRingColor: 'var(--color-emerald-950)' }),
  'inset-ring-teal-50': () => ({ twInsetRingColor: 'var(--color-teal-50)' }),
  'inset-ring-teal-100': () => ({ twInsetRingColor: 'var(--color-teal-100)' }),
  'inset-ring-teal-200': () => ({ twInsetRingColor: 'var(--color-teal-200)' }),
  'inset-ring-teal-300': () => ({ twInsetRingColor: 'var(--color-teal-300)' }),
  'inset-ring-teal-400': () => ({ twInsetRingColor: 'var(--color-teal-400)' }),
  'inset-ring-teal-500': () => ({ twInsetRingColor: 'var(--color-teal-500)' }),
  'inset-ring-teal-600': () => ({ twInsetRingColor: 'var(--color-teal-600)' }),
  'inset-ring-teal-700': () => ({ twInsetRingColor: 'var(--color-teal-700)' }),
  'inset-ring-teal-800': () => ({ twInsetRingColor: 'var(--color-teal-800)' }),
  'inset-ring-teal-900': () => ({ twInsetRingColor: 'var(--color-teal-900)' }),
  'inset-ring-teal-950': () => ({ twInsetRingColor: 'var(--color-teal-950)' }),
  'inset-ring-cyan-50': () => ({ twInsetRingColor: 'var(--color-cyan-50)' }),
  'inset-ring-cyan-100': () => ({ twInsetRingColor: 'var(--color-cyan-100)' }),
  'inset-ring-cyan-200': () => ({ twInsetRingColor: 'var(--color-cyan-200)' }),
  'inset-ring-cyan-300': () => ({ twInsetRingColor: 'var(--color-cyan-300)' }),
  'inset-ring-cyan-400': () => ({ twInsetRingColor: 'var(--color-cyan-400)' }),
  'inset-ring-cyan-500': () => ({ twInsetRingColor: 'var(--color-cyan-500)' }),
  'inset-ring-cyan-600': () => ({ twInsetRingColor: 'var(--color-cyan-600)' }),
  'inset-ring-cyan-700': () => ({ twInsetRingColor: 'var(--color-cyan-700)' }),
  'inset-ring-cyan-800': () => ({ twInsetRingColor: 'var(--color-cyan-800)' }),
  'inset-ring-cyan-900': () => ({ twInsetRingColor: 'var(--color-cyan-900)' }),
  'inset-ring-cyan-950': () => ({ twInsetRingColor: 'var(--color-cyan-950)' }),
  'inset-ring-sky-50': () => ({ twInsetRingColor: 'var(--color-sky-50)' }),
  'inset-ring-sky-100': () => ({ twInsetRingColor: 'var(--color-sky-100)' }),
  'inset-ring-sky-200': () => ({ twInsetRingColor: 'var(--color-sky-200)' }),
  'inset-ring-sky-300': () => ({ twInsetRingColor: 'var(--color-sky-300)' }),
  'inset-ring-sky-400': () => ({ twInsetRingColor: 'var(--color-sky-400)' }),
  'inset-ring-sky-500': () => ({ twInsetRingColor: 'var(--color-sky-500)' }),
  'inset-ring-sky-600': () => ({ twInsetRingColor: 'var(--color-sky-600)' }),
  'inset-ring-sky-700': () => ({ twInsetRingColor: 'var(--color-sky-700)' }),
  'inset-ring-sky-800': () => ({ twInsetRingColor: 'var(--color-sky-800)' }),
  'inset-ring-sky-900': () => ({ twInsetRingColor: 'var(--color-sky-900)' }),
  'inset-ring-sky-950': () => ({ twInsetRingColor: 'var(--color-sky-950)' }),
  'inset-ring-blue-50': () => ({ twInsetRingColor: 'var(--color-blue-50)' }),
  'inset-ring-blue-100': () => ({ twInsetRingColor: 'var(--color-blue-100)' }),
  'inset-ring-blue-200': () => ({ twInsetRingColor: 'var(--color-blue-200)' }),
  'inset-ring-blue-300': () => ({ twInsetRingColor: 'var(--color-blue-300)' }),
  'inset-ring-blue-400': () => ({ twInsetRingColor: 'var(--color-blue-400)' }),
  'inset-ring-blue-500': () => ({ twInsetRingColor: 'var(--color-blue-500)' }),
  'inset-ring-blue-600': () => ({ twInsetRingColor: 'var(--color-blue-600)' }),
  'inset-ring-blue-700': () => ({ twInsetRingColor: 'var(--color-blue-700)' }),
  'inset-ring-blue-800': () => ({ twInsetRingColor: 'var(--color-blue-800)' }),
  'inset-ring-blue-900': () => ({ twInsetRingColor: 'var(--color-blue-900)' }),
  'inset-ring-blue-950': () => ({ twInsetRingColor: 'var(--color-blue-950)' }),
  'inset-ring-indigo-50': () => ({ twInsetRingColor: 'var(--color-indigo-50)' }),
  'inset-ring-indigo-100': () => ({ twInsetRingColor: 'var(--color-indigo-100)' }),
  'inset-ring-indigo-200': () => ({ twInsetRingColor: 'var(--color-indigo-200)' }),
  'inset-ring-indigo-300': () => ({ twInsetRingColor: 'var(--color-indigo-300)' }),
  'inset-ring-indigo-400': () => ({ twInsetRingColor: 'var(--color-indigo-400)' }),
  'inset-ring-indigo-500': () => ({ twInsetRingColor: 'var(--color-indigo-500)' }),
  'inset-ring-indigo-600': () => ({ twInsetRingColor: 'var(--color-indigo-600)' }),
  'inset-ring-indigo-700': () => ({ twInsetRingColor: 'var(--color-indigo-700)' }),
  'inset-ring-indigo-800': () => ({ twInsetRingColor: 'var(--color-indigo-800)' }),
  'inset-ring-indigo-900': () => ({ twInsetRingColor: 'var(--color-indigo-900)' }),
  'inset-ring-indigo-950': () => ({ twInsetRingColor: 'var(--color-indigo-950)' }),
  'inset-ring-violet-50': () => ({ twInsetRingColor: 'var(--color-violet-50)' }),
  'inset-ring-violet-100': () => ({ twInsetRingColor: 'var(--color-violet-100)' }),
  'inset-ring-violet-200': () => ({ twInsetRingColor: 'var(--color-violet-200)' }),
  'inset-ring-violet-300': () => ({ twInsetRingColor: 'var(--color-violet-300)' }),
  'inset-ring-violet-400': () => ({ twInsetRingColor: 'var(--color-violet-400)' }),
  'inset-ring-violet-500': () => ({ twInsetRingColor: 'var(--color-violet-500)' }),
  'inset-ring-violet-600': () => ({ twInsetRingColor: 'var(--color-violet-600)' }),
  'inset-ring-violet-700': () => ({ twInsetRingColor: 'var(--color-violet-700)' }),
  'inset-ring-violet-800': () => ({ twInsetRingColor: 'var(--color-violet-800)' }),
  'inset-ring-violet-900': () => ({ twInsetRingColor: 'var(--color-violet-900)' }),
  'inset-ring-violet-950': () => ({ twInsetRingColor: 'var(--color-violet-950)' }),
  'inset-ring-purple-50': () => ({ twInsetRingColor: 'var(--color-purple-50)' }),
  'inset-ring-purple-100': () => ({ twInsetRingColor: 'var(--color-purple-100)' }),
  'inset-ring-purple-200': () => ({ twInsetRingColor: 'var(--color-purple-200)' }),
  'inset-ring-purple-300': () => ({ twInsetRingColor: 'var(--color-purple-300)' }),
  'inset-ring-purple-400': () => ({ twInsetRingColor: 'var(--color-purple-400)' }),
  'inset-ring-purple-500': () => ({ twInsetRingColor: 'var(--color-purple-500)' }),
  'inset-ring-purple-600': () => ({ twInsetRingColor: 'var(--color-purple-600)' }),
  'inset-ring-purple-700': () => ({ twInsetRingColor: 'var(--color-purple-700)' }),
  'inset-ring-purple-800': () => ({ twInsetRingColor: 'var(--color-purple-800)' }),
  'inset-ring-purple-900': () => ({ twInsetRingColor: 'var(--color-purple-900)' }),
  'inset-ring-purple-950': () => ({ twInsetRingColor: 'var(--color-purple-950)' }),
  'inset-ring-fuchsia-50': () => ({ twInsetRingColor: 'var(--color-fuchsia-50)' }),
  'inset-ring-fuchsia-100': () => ({ twInsetRingColor: 'var(--color-fuchsia-100)' }),
  'inset-ring-fuchsia-200': () => ({ twInsetRingColor: 'var(--color-fuchsia-200)' }),
  'inset-ring-fuchsia-300': () => ({ twInsetRingColor: 'var(--color-fuchsia-300)' }),
  'inset-ring-fuchsia-400': () => ({ twInsetRingColor: 'var(--color-fuchsia-400)' }),
  'inset-ring-fuchsia-500': () => ({ twInsetRingColor: 'var(--color-fuchsia-500)' }),
  'inset-ring-fuchsia-600': () => ({ twInsetRingColor: 'var(--color-fuchsia-600)' }),
  'inset-ring-fuchsia-700': () => ({ twInsetRingColor: 'var(--color-fuchsia-700)' }),
  'inset-ring-fuchsia-800': () => ({ twInsetRingColor: 'var(--color-fuchsia-800)' }),
  'inset-ring-fuchsia-900': () => ({ twInsetRingColor: 'var(--color-fuchsia-900)' }),
  'inset-ring-fuchsia-950': () => ({ twInsetRingColor: 'var(--color-fuchsia-950)' }),
  'inset-ring-pink-50': () => ({ twInsetRingColor: 'var(--color-pink-50)' }),
  'inset-ring-pink-100': () => ({ twInsetRingColor: 'var(--color-pink-100)' }),
  'inset-ring-pink-200': () => ({ twInsetRingColor: 'var(--color-pink-200)' }),
  'inset-ring-pink-300': () => ({ twInsetRingColor: 'var(--color-pink-300)' }),
  'inset-ring-pink-400': () => ({ twInsetRingColor: 'var(--color-pink-400)' }),
  'inset-ring-pink-500': () => ({ twInsetRingColor: 'var(--color-pink-500)' }),
  'inset-ring-pink-600': () => ({ twInsetRingColor: 'var(--color-pink-600)' }),
  'inset-ring-pink-700': () => ({ twInsetRingColor: 'var(--color-pink-700)' }),
  'inset-ring-pink-800': () => ({ twInsetRingColor: 'var(--color-pink-800)' }),
  'inset-ring-pink-900': () => ({ twInsetRingColor: 'var(--color-pink-900)' }),
  'inset-ring-pink-950': () => ({ twInsetRingColor: 'var(--color-pink-950)' }),
  'inset-ring-rose-50': () => ({ twInsetRingColor: 'var(--color-rose-50)' }),
  'inset-ring-rose-100': () => ({ twInsetRingColor: 'var(--color-rose-100)' }),
  'inset-ring-rose-200': () => ({ twInsetRingColor: 'var(--color-rose-200)' }),
  'inset-ring-rose-300': () => ({ twInsetRingColor: 'var(--color-rose-300)' }),
  'inset-ring-rose-400': () => ({ twInsetRingColor: 'var(--color-rose-400)' }),
  'inset-ring-rose-500': () => ({ twInsetRingColor: 'var(--color-rose-500)' }),
  'inset-ring-rose-600': () => ({ twInsetRingColor: 'var(--color-rose-600)' }),
  'inset-ring-rose-700': () => ({ twInsetRingColor: 'var(--color-rose-700)' }),
  'inset-ring-rose-800': () => ({ twInsetRingColor: 'var(--color-rose-800)' }),
  'inset-ring-rose-900': () => ({ twInsetRingColor: 'var(--color-rose-900)' }),
  'inset-ring-rose-950': () => ({ twInsetRingColor: 'var(--color-rose-950)' }),
  'inset-ring-slate-50': () => ({ twInsetRingColor: 'var(--color-slate-50)' }),
  'inset-ring-slate-100': () => ({ twInsetRingColor: 'var(--color-slate-100)' }),
  'inset-ring-slate-200': () => ({ twInsetRingColor: 'var(--color-slate-200)' }),
  'inset-ring-slate-300': () => ({ twInsetRingColor: 'var(--color-slate-300)' }),
  'inset-ring-slate-400': () => ({ twInsetRingColor: 'var(--color-slate-400)' }),
  'inset-ring-slate-500': () => ({ twInsetRingColor: 'var(--color-slate-500)' }),
  'inset-ring-slate-600': () => ({ twInsetRingColor: 'var(--color-slate-600)' }),
  'inset-ring-slate-700': () => ({ twInsetRingColor: 'var(--color-slate-700)' }),
  'inset-ring-slate-800': () => ({ twInsetRingColor: 'var(--color-slate-800)' }),
  'inset-ring-slate-900': () => ({ twInsetRingColor: 'var(--color-slate-900)' }),
  'inset-ring-slate-950': () => ({ twInsetRingColor: 'var(--color-slate-950)' }),
  'inset-ring-gray-50': () => ({ twInsetRingColor: 'var(--color-gray-50)' }),
  'inset-ring-gray-100': () => ({ twInsetRingColor: 'var(--color-gray-100)' }),
  'inset-ring-gray-200': () => ({ twInsetRingColor: 'var(--color-gray-200)' }),
  'inset-ring-gray-300': () => ({ twInsetRingColor: 'var(--color-gray-300)' }),
  'inset-ring-gray-400': () => ({ twInsetRingColor: 'var(--color-gray-400)' }),
  'inset-ring-gray-500': () => ({ twInsetRingColor: 'var(--color-gray-500)' }),
  'inset-ring-gray-600': () => ({ twInsetRingColor: 'var(--color-gray-600)' }),
  'inset-ring-gray-700': () => ({ twInsetRingColor: 'var(--color-gray-700)' }),
  'inset-ring-gray-800': () => ({ twInsetRingColor: 'var(--color-gray-800)' }),
  'inset-ring-gray-900': () => ({ twInsetRingColor: 'var(--color-gray-900)' }),
  'inset-ring-gray-950': () => ({ twInsetRingColor: 'var(--color-gray-950)' }),
  'inset-ring-zinc-50': () => ({ twInsetRingColor: 'var(--color-zinc-50)' }),
  'inset-ring-zinc-100': () => ({ twInsetRingColor: 'var(--color-zinc-100)' }),
  'inset-ring-zinc-200': () => ({ twInsetRingColor: 'var(--color-zinc-200)' }),
  'inset-ring-zinc-300': () => ({ twInsetRingColor: 'var(--color-zinc-300)' }),
  'inset-ring-zinc-400': () => ({ twInsetRingColor: 'var(--color-zinc-400)' }),
  'inset-ring-zinc-500': () => ({ twInsetRingColor: 'var(--color-zinc-500)' }),
  'inset-ring-zinc-600': () => ({ twInsetRingColor: 'var(--color-zinc-600)' }),
  'inset-ring-zinc-700': () => ({ twInsetRingColor: 'var(--color-zinc-700)' }),
  'inset-ring-zinc-800': () => ({ twInsetRingColor: 'var(--color-zinc-800)' }),
  'inset-ring-zinc-900': () => ({ twInsetRingColor: 'var(--color-zinc-900)' }),
  'inset-ring-zinc-950': () => ({ twInsetRingColor: 'var(--color-zinc-950)' }),
  'inset-ring-neutral-50': () => ({ twInsetRingColor: 'var(--color-neutral-50)' }),
  'inset-ring-neutral-100': () => ({ twInsetRingColor: 'var(--color-neutral-100)' }),
  'inset-ring-neutral-200': () => ({ twInsetRingColor: 'var(--color-neutral-200)' }),
  'inset-ring-neutral-300': () => ({ twInsetRingColor: 'var(--color-neutral-300)' }),
  'inset-ring-neutral-400': () => ({ twInsetRingColor: 'var(--color-neutral-400)' }),
  'inset-ring-neutral-500': () => ({ twInsetRingColor: 'var(--color-neutral-500)' }),
  'inset-ring-neutral-600': () => ({ twInsetRingColor: 'var(--color-neutral-600)' }),
  'inset-ring-neutral-700': () => ({ twInsetRingColor: 'var(--color-neutral-700)' }),
  'inset-ring-neutral-800': () => ({ twInsetRingColor: 'var(--color-neutral-800)' }),
  'inset-ring-neutral-900': () => ({ twInsetRingColor: 'var(--color-neutral-900)' }),
  'inset-ring-neutral-950': () => ({ twInsetRingColor: 'var(--color-neutral-950)' }),
  'inset-ring-stone-50': () => ({ twInsetRingColor: 'var(--color-stone-50)' }),
  'inset-ring-stone-100': () => ({ twInsetRingColor: 'var(--color-stone-100)' }),
  'inset-ring-stone-200': () => ({ twInsetRingColor: 'var(--color-stone-200)' }),
  'inset-ring-stone-300': () => ({ twInsetRingColor: 'var(--color-stone-300)' }),
  'inset-ring-stone-400': () => ({ twInsetRingColor: 'var(--color-stone-400)' }),
  'inset-ring-stone-500': () => ({ twInsetRingColor: 'var(--color-stone-500)' }),
  'inset-ring-stone-600': () => ({ twInsetRingColor: 'var(--color-stone-600)' }),
  'inset-ring-stone-700': () => ({ twInsetRingColor: 'var(--color-stone-700)' }),
  'inset-ring-stone-800': () => ({ twInsetRingColor: 'var(--color-stone-800)' }),
  'inset-ring-stone-900': () => ({ twInsetRingColor: 'var(--color-stone-900)' }),
  'inset-ring-stone-950': () => ({ twInsetRingColor: 'var(--color-stone-950)' }),

  // opacity
  'opacity-<number>': ([value]) => ({ opacity: `${value}%` }),
  'opacity-(<custom-property>)': ([value]) => ({ opacity: `var(${value})` }),
  'opacity-[<value>]': ([value]) => ({ opacity: `"${value}"` }),

  // mix-blend-mode
  'mix-blend-normal': () => ({ mixBlendMode: 'normal' }),
  'mix-blend-multiply': () => ({ mixBlendMode: 'multiply' }),
  'mix-blend-screen': () => ({ mixBlendMode: 'screen' }),
  'mix-blend-overlay': () => ({ mixBlendMode: 'overlay' }),
  'mix-blend-darken': () => ({ mixBlendMode: 'darken' }),
  'mix-blend-lighten': () => ({ mixBlendMode: 'lighten' }),
  'mix-blend-color-dodge': () => ({ mixBlendMode: 'color-dodge' }),
  'mix-blend-color-burn': () => ({ mixBlendMode: 'color-burn' }),
  'mix-blend-hard-light': () => ({ mixBlendMode: 'hard-light' }),
  'mix-blend-soft-light': () => ({ mixBlendMode: 'soft-light' }),
  'mix-blend-difference': () => ({ mixBlendMode: 'difference' }),
  'mix-blend-exclusion': () => ({ mixBlendMode: 'exclusion' }),
  'mix-blend-hue': () => ({ mixBlendMode: 'hue' }),
  'mix-blend-saturation': () => ({ mixBlendMode: 'saturation' }),
  'mix-blend-color': () => ({ mixBlendMode: 'color' }),
  'mix-blend-luminosity': () => ({ mixBlendMode: 'luminosity' }),
  'mix-blend-plus-darker': () => ({ mixBlendMode: 'plus-darker' }),
  'mix-blend-plus-lighter': () => ({ mixBlendMode: 'plus-lighter' }),

  // background-blend-mode
  'bg-blend-normal': () => ({ backgroundBlendMode: 'normal' }),
  'bg-blend-multiply': () => ({ backgroundBlendMode: 'multiply' }),
  'bg-blend-screen': () => ({ backgroundBlendMode: 'screen' }),
  'bg-blend-overlay': () => ({ backgroundBlendMode: 'overlay' }),
  'bg-blend-darken': () => ({ backgroundBlendMode: 'darken' }),
  'bg-blend-lighten': () => ({ backgroundBlendMode: 'lighten' }),
  'bg-blend-color-dodge': () => ({ backgroundBlendMode: 'color-dodge' }),
  'bg-blend-color-burn': () => ({ backgroundBlendMode: 'color-burn' }),
  'bg-blend-hard-light': () => ({ backgroundBlendMode: 'hard-light' }),
  'bg-blend-soft-light': () => ({ backgroundBlendMode: 'soft-light' }),
  'bg-blend-difference': () => ({ backgroundBlendMode: 'difference' }),
  'bg-blend-exclusion': () => ({ backgroundBlendMode: 'exclusion' }),
  'bg-blend-hue': () => ({ backgroundBlendMode: 'hue' }),
  'bg-blend-saturation': () => ({ backgroundBlendMode: 'saturation' }),
  'bg-blend-color': () => ({ backgroundBlendMode: 'color' }),
  'bg-blend-luminosity': () => ({ backgroundBlendMode: 'luminosity' }),

  // FILTERS

  // filter
  'filter-none': () => ({ filter: 'none' }),
  'filter-(<custom-property>)': ([value]) => ({ filter: `var(${value})` }),
  'filter-[<value>]': ([value]) => ({ filter: `"${value}"` }),

  // filter: blur
  'blur-xs': () => ({ filter: 'blur(var(--blur-xs))' }),
  'blur-sm': () => ({ filter: 'blur(var(--blur-sm))' }),
  'blur-md': () => ({ filter: 'blur(var(--blur-md))' }),
  'blur-lg': () => ({ filter: 'blur(var(--blur-lg))' }),
  'blur-xl': () => ({ filter: 'blur(var(--blur-xl))' }),
  'blur-2xl': () => ({ filter: 'blur(var(--blur-2xl))' }),
  'blur-3xl': () => ({ filter: 'blur(var(--blur-3xl))' }),
  'blur-none': () => ({ filter: '' }),
  'blur-(<custom-property>)': ([value]) => ({ filter: `blur(var(${value}))` }),
  'blur-[<value>]': ([value]) => ({ filter: `blur(${value})` }),

  // filter: brightness
  'brightness-<number>': ([value]) => ({ filter: `brightness(${value}%)` }),
  'brightness-(<custom-property>)': ([value]) => ({ filter: `brightness(var(${value}))` }),
  'brightness-[<value>]': ([value]) => ({ filter: `brightness(${value})` }),

  // filter: contrast
  'contrast-<number>': ([value]) => ({ filter: `contrast(${value}%)` }),
  'contrast-(<custom-property>)': ([value]) => ({ filter: `contrast(var(${value}))` }),
  'contrast-[<value>]': ([value]) => ({ filter: `contrast(${value})` }),

  // filter: drop-shadow
  'drop-shadow-xs': () => ({ filter: 'drop-shadow(var(--drop-shadow-xs))' }),
  'drop-shadow-sm': () => ({ filter: 'drop-shadow(var(--drop-shadow-sm))' }),
  'drop-shadow-md': () => ({ filter: 'drop-shadow(var(--drop-shadow-md))' }),
  'drop-shadow-lg': () => ({ filter: 'drop-shadow(var(--drop-shadow-lg))' }),
  'drop-shadow-xl': () => ({ filter: 'drop-shadow(var(--drop-shadow-xl)' }),
  'drop-shadow-2xl': () => ({ filter: 'drop-shadow(var(--drop-shadow-2xl))' }),
  'drop-shadow-none': () => ({ filter: 'drop-shadow(0 0 #0000)' }),
  'drop-shadow-(<custom-property>)': ([value]) => ({ filter: `drop-shadow(var(${value}))` }),
  'drop-shadow-[<value>]': ([value]) => ({ filter: `drop-shadow(${value})` }),

  // filter: grayscale
  grayscale: () => ({ filter: 'grayscale(100%)' }),
  'grayscale-<number>': ([value]) => ({ filter: `grayscale(${value}%)` }),
  'grayscale-(<custom-property>)': ([value]) => ({ filter: `grayscale(var(${value}))` }),
  'grayscale-[<value>]': ([value]) => ({ filter: `grayscale(${value})` }),

  // filter: hue-rotate
  'hue-rotate-<number>': ([value]) => ({ filter: `hue-rotate(${value}deg)` }),
  '-hue-rotate-<number>': ([value]) => ({ filter: `hue-rotate(calc(${value}deg * -1))` }),
  'hue-rotate-(<custom-property>)': ([value]) => ({ filter: `hue-rotate(var(${value}))` }),
  'hue-rotate-[<value>]': ([value]) => ({ filter: `hue-rotate(${value})` }),

  // filter: invert
  invert: () => ({ filter: 'invert(100%)' }),
  'invert-<number>': ([value]) => ({ filter: `invert(${value}%)` }),
  'invert-(<custom-property>)': ([value]) => ({ filter: `invert(var(${value}))` }),
  'invert-[<value>]': ([value]) => ({ filter: `invert(${value})` }),

  // filter: saturate
  'saturate-<number>': ([value]) => ({ filter: `saturate(${value}%)` }),
  'saturate-(<custom-property>)': ([value]) => ({ filter: `saturate(var(${value}))` }),
  'saturate-[<value>]': ([value]) => ({ filter: `saturate(${value})` }),

  // filter: sepia
  sepia: () => ({ filter: 'sepia(100%)' }),
  'sepia-<number>': ([value]) => ({ filter: `sepia(${value}%)` }),
  'sepia-(<custom-property>)': ([value]) => ({ filter: `sepia(var(${value}))` }),
  'sepia-[<value>]': ([value]) => ({ filter: `sepia(${value})` }),

  // backdrop-filter
  'backdrop-filter-none': () => ({ backdropFilter: 'none' }),
  'backdrop-filter-(<custom-property>)': ([value]) => ({ backdropFilter: `var(${value})` }),
  'backdrop-filter-[<value>]': ([value]) => ({ backdropFilter: `"${value}"` }),

  // backdrop-filter: blur
  'backdrop-blur-xs': () => ({ backdropFilter: 'blur(var(--blur-xs))' }),
  'backdrop-blur-sm': () => ({ backdropFilter: 'blur(var(--blur-sm))' }),
  'backdrop-blur-md': () => ({ backdropFilter: 'blur(var(--blur-md))' }),
  'backdrop-blur-lg': () => ({ backdropFilter: 'blur(var(--blur-lg))' }),
  'backdrop-blur-xl': () => ({ backdropFilter: 'blur(var(--blur-xl))' }),
  'backdrop-blur-2xl': () => ({ backdropFilter: 'blur(var(--blur-2xl))' }),
  'backdrop-blur-3xl': () => ({ backdropFilter: 'blur(var(--blur-3xl))' }),
  'backdrop-blur-none': () => ({ backdropFilter: '' }),
  'backdrop-blur-(<custom-property>)': ([value]) => ({ backdropFilter: `blur(var(${value}))` }),
  'backdrop-blur-[<value>]': ([value]) => ({ backdropFilter: `blur(${value})` }),

  // backdrop-filter: brightness
  'backdrop-brightness-<number>': ([value]) => ({ backdropFilter: `brightness(${value}%)` }),
  'backdrop-brightness-(<custom-property>)': ([value]) => ({
    backdropFilter: `brightness(var(${value}))`,
  }),
  'backdrop-brightness-[<value>]': ([value]) => ({ backdropFilter: `brightness(${value})` }),

  // backdrop-filter: contrast
  'backdrop-contrast-<number>': ([value]) => ({ backdropFilter: `contrast(${value}%)` }),
  'backdrop-contrast-(<custom-property>)': ([value]) => ({
    backdropFilter: `contrast(var(${value}))`,
  }),
  'backdrop-contrast-[<value>]': ([value]) => ({ backdropFilter: `contrast(${value})` }),

  // backdrop-filter: grayscale
  'backdrop-grayscale': () => ({ backdropFilter: 'grayscale(100%)' }),
  'backdrop-grayscale-<number>': ([value]) => ({ backdropFilter: `grayscale(${value}%)` }),
  'backdrop-grayscale-(<custom-property>)': ([value]) => ({
    backdropFilter: `grayscale(var(${value}))`,
  }),
  'backdrop-grayscale-[<value>]': ([value]) => ({ backdropFilter: `grayscale(${value})` }),

  // backdrop-filter: hue-rotate
  'backdrop-hue-rotate-<number>': ([value]) => ({ backdropFilter: `hue-rotate(${value}deg)` }),
  '-backdrop-hue-rotate-<number>': ([value]) => ({
    backdropFilter: `hue-rotate(calc(${value}deg * -1))`,
  }),
  'backdrop-hue-rotate-(<custom-property>)': ([value]) => ({
    backdropFilter: `hue-rotate(var(${value}))`,
  }),
  'backdrop-hue-rotate-[<value>]': ([value]) => ({ backdropFilter: `hue-rotate(${value})` }),

  // backdrop-filter: invert
  'backdrop-invert': () => ({ backdropFilter: 'invert(100%)' }),
  'backdrop-invert-<number>': ([value]) => ({ backdropFilter: `invert(${value}%)` }),
  'backdrop-invert-(<custom-property>)': ([value]) => ({ backdropFilter: `invert(var(${value}))` }),
  'backdrop-invert-[<value>]': ([value]) => ({ backdropFilter: `invert(${value})` }),

  // backdrop-filter: opacity
  'backdrop-opacity-<number>': ([value]) => ({ backdropFilter: `opacity(${value}%)` }),
  'backdrop-opacity-(<custom-property>)': ([value]) => ({
    backdropFilter: `opacity(var(${value}))`,
  }),
  'backdrop-opacity-[<value>]': ([value]) => ({ backdropFilter: `opacity(${value})` }),

  // backdrop-filter: saturate
  'backdrop-saturate-<number>': ([value]) => ({ backdropFilter: `saturate(${value}%)` }),
  'backdrop-saturate-(<custom-property>)': ([value]) => ({
    backdropFilter: `saturate(var(${value}))`,
  }),
  'backdrop-saturate-[<value>]': ([value]) => ({ backdropFilter: `saturate(${value})` }),

  // backdrop-filter: sepia
  'backdrop-sepia': () => ({ backdropFilter: 'sepia(100%)' }),
  'backdrop-sepia-<number>': ([value]) => ({ backdropFilter: `sepia(${value}%)` }),
  'backdrop-sepia-(<custom-property>)': ([value]) => ({ backdropFilter: `sepia(var(${value}))` }),
  'backdrop-sepia-[<value>]': ([value]) => ({ backdropFilter: `sepia(${value})` }),

  // TABLES

  // border-collapse
  'border-collapse': () => ({ borderCollapse: 'collapse' }),
  'border-separate': () => ({ borderCollapse: 'separate' }),

  // border-spacing
  'border-spacing-<number>': ([value]) => ({ borderSpacing: `calc(var(--spacing) * ${value})` }),
  'border-spacing-(<custom-property>)': ([value]) => ({ borderSpacing: `var(${value})` }),
  'border-spacing-[<value>]': ([value]) => ({ borderSpacing: `"${value}"` }),
  'border-spacing-x-<number>': ([value]) => ({
    borderSpacing: `calc(var(--spacing) * ${value}) var(--tw-border-spacing-y)`,
  }),
  'border-spacing-x-(<custom-property>)': ([value]) => ({
    borderSpacing: `var(${value}) var(--tw-border-spacing-y)`,
  }),
  'border-spacing-x-[<value>]': ([value]) => ({
    borderSpacing: `${value} var(--tw-border-spacing-y)`,
  }),
  'border-spacing-y-<number>': ([value]) => ({
    borderSpacing: `var(--tw-border-spacing-x) calc(var(--spacing) * ${value})`,
  }),
  'border-spacing-y-(<custom-property>)': ([value]) => ({
    borderSpacing: `var(--tw-border-spacing-x) var(${value})`,
  }),
  'border-spacing-y-[<value>]': ([value]) => ({
    borderSpacing: `var(--tw-border-spacing-x) ${value}`,
  }),

  // table-layout
  'table-auto': () => ({ tableLayout: 'auto' }),
  'table-fixed': () => ({ tableLayout: 'fixed' }),

  // caption-side
  'caption-top': () => ({ captionSide: 'top' }),
  'caption-bottom': () => ({ captionSide: 'bottom' }),

  // TRANSITIONS & ANIMATION

  // transition-property
  transition: () => ({
    transitionProperty:
      'color, background-color, border-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter',
    transitionTimingFunction: 'var(--default-transition-timing-function)',
    transitionDuration: 'var(--default-transition-duration)',
  }),
  'transition-all': () => ({
    transitionProperty: 'all',
    transitionTimingFunction: 'var(--default-transition-timing-function)',
    transitionDuration: 'var(--default-transition-duration)',
  }),
  'transition-colors': () => ({
    transitionProperty:
      'color, background-color, border-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to',
    transitionTimingFunction: 'var(--default-transition-timing-function)',
    transitionDuration: 'var(--default-transition-duration)',
  }),
  'transition-opacity': () => ({
    transitionProperty: 'opacity',
    transitionTimingFunction: 'var(--default-transition-timing-function)',
    transitionDuration: 'var(--default-transition-duration)',
  }),
  'transition-shadow': () => ({
    transitionProperty: 'box-shadow',
    transitionTimingFunction: 'var(--default-transition-timing-function)',
    transitionDuration: 'var(--default-transition-duration)',
  }),
  'transition-transform': () => ({
    transitionProperty: 'transform, translate, scale, rotate',
    transitionTimingFunction: 'var(--default-transition-timing-function)',
    transitionDuration: 'var(--default-transition-duration)',
  }),
  'transition-none': () => ({ transitionProperty: 'none' }),
  'transition-(<custom-property>)': ([value]) => ({
    transitionProperty: `var(${value})`,
    transitionTimingFunction: 'var(--default-transition-timing-function)',
    transitionDuration: 'var(--default-transition-duration)',
  }),
  'transition-[<value>]': ([value]) => ({
    transitionProperty: `"${value}"`,
    transitionTimingFunction: 'var(--default-transition-timing-function)',
    transitionDuration: 'var(--default-transition-duration)',
  }),

  // transition-behavior
  'transition-normal': () => ({ transitionBehavior: 'normal' }),
  'transition-discrete': () => ({ transitionBehavior: 'allow-discrete' }),

  // transition-duration
  'duration-<number>': ([value]) => ({ transitionDuration: `${value}ms` }),
  'duration-initial': () => ({ transitionDuration: 'initial' }),
  'duration-(<custom-property>)': ([value]) => ({ transitionDuration: `var(${value})` }),
  'duration-[<value>]': ([value]) => ({ transitionDuration: `"${value}"` }),

  // transition-timing-function
  'ease-linear': () => ({ transitionTimingFunction: 'linear' }),
  'ease-in': () => ({ transitionTimingFunction: 'var(--ease-in)' }),
  'ease-out': () => ({ transitionTimingFunction: 'var(--ease-out)' }),
  'ease-in-out': () => ({ transitionTimingFunction: 'var(--ease-in-out)' }),
  'ease-initial': () => ({ transitionTimingFunction: 'initial' }),
  'ease-(<custom-property>)': ([value]) => ({ transitionTimingFunction: `var(${value})` }),
  'ease-[<value>]': ([value]) => ({ transitionTimingFunction: `"${value}"` }),

  // transition-delay
  'delay-<number>': ([value]) => ({ transitionDelay: `${value}ms` }),
  'delay-(<custom-property>)': ([value]) => ({ transitionDelay: `var(${value})` }),
  'delay-[<value>]': ([value]) => ({ transitionDelay: `"${value}"` }),

  // animation
  'animate-spin': () => {
    throw new Error('animate-spin is not supported')
  },
  'animate-ping': () => {
    throw new Error('animate-ping is not supported')
  },
  'animate-pulse': () => {
    throw new Error('animate-pulse is not supported')
  },
  'animate-bounce': () => {
    throw new Error('animate-bounce is not supported')
  },
  'animate-none': () => ({ animation: 'none' }),
  'animate-(<custom-property>)': ([value]) => ({ animation: `var(${value})` }),
  'animate-[<value>]': ([value]) => ({ animation: `"${value}"` }),

  // TRANSFORMS

  // backface-visibility
  'backface-hidden': () => ({ backfaceVisibility: 'hidden' }),
  'backface-visible': () => ({ backfaceVisibility: 'visible' }),

  // perspective
  'perspective-dramatic': () => ({ perspective: 'var(--perspective-dramatic)' }),
  'perspective-near': () => ({ perspective: 'var(--perspective-near)' }),
  'perspective-normal': () => ({ perspective: 'var(--perspective-normal)' }),
  'perspective-midrange': () => ({ perspective: 'var(--perspective-midrange)' }),
  'perspective-distant': () => ({ perspective: 'var(--perspective-distant)' }),
  'perspective-none': () => ({ perspective: 'none' }),
  'perspective-(<custom-property>)': ([value]) => ({ perspective: `var(${value})` }),
  'perspective-[<value>]': ([value]) => ({ perspective: `"${value}"` }),

  // perspective-origin
  'perspective-origin-center': () => ({ perspectiveOrigin: 'center' }),
  'perspective-origin-top': () => ({ perspectiveOrigin: 'top' }),
  'perspective-origin-top-right': () => ({ perspectiveOrigin: 'top right' }),
  'perspective-origin-right': () => ({ perspectiveOrigin: 'right' }),
  'perspective-origin-bottom-right': () => ({ perspectiveOrigin: 'bottom right' }),
  'perspective-origin-bottom': () => ({ perspectiveOrigin: 'bottom' }),
  'perspective-origin-bottom-left': () => ({ perspectiveOrigin: 'bottom left' }),
  'perspective-origin-left': () => ({ perspectiveOrigin: 'left' }),
  'perspective-origin-top-left': () => ({ perspectiveOrigin: 'top left' }),
  'perspective-origin-(<custom-property>)': ([value]) => ({ perspectiveOrigin: `var(${value})` }),
  'perspective-origin-[<value>]': ([value]) => ({ perspectiveOrigin: `"${value}"` }),

  // rotate
  'rotate-none': () => ({ rotate: 'none' }),
  'rotate-<number>': ([value]) => ({ rotate: `${value}deg` }),
  '-rotate-<number>': ([value]) => ({ rotate: `calc(${value}deg * -1)` }),
  'rotate-(<custom-property>)': ([value]) => ({ rotate: `var(${value})` }),
  'rotate-[<value>]': ([value]) => ({ rotate: `"${value}"` }),
  'rotate-x-<number>': ([value]) => ({ transform: `rotateX(${value}deg) var(--tw-rotate-y)` }),
  '-rotate-x-<number>': ([value]) => ({ transform: `rotateX(-${value}deg) var(--tw-rotate-y)` }),
  'rotate-x-(<custom-property>)': ([value]) => ({
    transform: `rotateX(var(${value})) var(--tw-rotate-y)`,
  }),
  'rotate-x-[<value>]': ([value]) => ({ transform: `rotateX(${value}) var(--tw-rotate-y)` }),
  'rotate-y-<number>': ([value]) => ({ transform: `var(--tw-rotate-x) rotateY(${value}deg)` }),
  '-rotate-y-<number>': ([value]) => ({ transform: `var(--tw-rotate-x) rotateY(-${value}deg)` }),
  'rotate-y-(<custom-property>)': ([value]) => ({
    transform: `var(--tw-rotate-x) rotateY(var(${value}))`,
  }),
  'rotate-y-[<value>]': ([value]) => ({ transform: `var(--tw-rotate-x) rotateY(${value})` }),
  'rotate-z-<number>': ([value]) => ({
    transform: `var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(${value}deg)`,
  }),
  '-rotate-z-<number>': ([value]) => ({
    transform: `var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(-${value}deg)`,
  }),
  'rotate-z-(<custom-property>)': ([value]) => ({
    transform: `var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(var(${value}))`,
  }),
  'rotate-z-[<value>]': ([value]) => ({
    transform: `var(--tw-rotate-x) var(--tw-rotate-y) rotateZ(${value})`,
  }),

  // scale
  'scale-none': () => ({ scale: 'none' }),
  'scale-<number>': ([value]) => ({ scale: `${value}% ${value}%` }),
  '-scale-<number>': ([value]) => ({ scale: `calc(${value}% * -1) calc(${value}% * -1)` }),
  'scale-(<custom-property>)': ([value]) => ({ scale: `var(${value}) var(${value})` }),
  'scale-[<value>]': ([value]) => ({ scale: `"${value}"` }),
  'scale-x-<number>': ([value]) => ({ scale: `${value}% var(--tw-scale-y)` }),
  '-scale-x-<number>': ([value]) => ({ scale: `calc(${value}% * -1) var(--tw-scale-y)` }),
  'scale-x-(<custom-property>)': ([value]) => ({ scale: `var(${value}) var(--tw-scale-y)` }),
  'scale-x-[<value>]': ([value]) => ({ scale: `${value} var(--tw-scale-y)` }),
  'scale-y-<number>': ([value]) => ({ scale: `var(--tw-scale-x) ${value}%` }),
  '-scale-y-<number>': ([value]) => ({ scale: `var(--tw-scale-x) calc(${value}% * -1)` }),
  'scale-y-(<custom-property>)': ([value]) => ({ scale: `var(--tw-scale-x) var(${value})` }),
  'scale-y-[<value>]': ([value]) => ({ scale: `var(--tw-scale-x) ${value}` }),
  'scale-z-<number>': ([value]) => ({ scale: `var(--tw-scale-x) var(--tw-scale-y) ${value}%` }),
  '-scale-z-<number>': ([value]) => ({
    scale: `var(--tw-scale-x) var(--tw-scale-y) calc(${value}% * -1)`,
  }),
  'scale-z-(<custom-property>)': ([value]) => ({
    scale: `var(--tw-scale-x) var(--tw-scale-y) var(${value})`,
  }),
  'scale-z-[<value>]': ([value]) => ({ scale: `var(--tw-scale-x) var(--tw-scale-y) ${value}` }),
  'scale-3d': () => ({ scale: 'var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)' }),

  // skew
  'skew-<number>': ([value]) => ({ transform: `skewX(${value}deg) skewY(${value}deg)` }),
  '-skew-<number>': ([value]) => ({ transform: `skewX(-${value}deg) skewY(-${value}deg)` }),
  'skew-(<custom-property>)': ([value]) => ({
    transform: `skewX(var(${value})) skewY(var(${value}))`,
  }),
  'skew-[<value>]': ([value]) => ({ transform: `skewX(${value}) skewY(${value})` }),
  'skew-x-<number>': ([value]) => ({ transform: `skewX(${value}deg))` }),
  '-skew-x-<number>': ([value]) => ({ transform: `skewX(-${value}deg))` }),
  'skew-x-(<custom-property>)': ([value]) => ({ transform: `skewX(var(${value}))` }),
  'skew-x-[<value>]': ([value]) => ({ transform: `skewX(${value}))` }),
  'skew-y-<number>': ([value]) => ({ transform: `skewY(${value}deg)` }),
  '-skew-y-<number>': ([value]) => ({ transform: `skewY(-${value}deg)` }),
  'skew-y-(<custom-property>)': ([value]) => ({ transform: `skewY(var(${value}))` }),
  'skew-y-[<value>]': ([value]) => ({ transform: `skewY(${value})` }),

  // transform
  'transform-(<custom-property>)': ([value]) => ({ transform: `var(${value})` }),
  'transform-[<value>]': ([value]) => ({ transform: `"${value}"` }),
  'transform-none': () => ({ transform: 'none' }),
  'transform-gpu': () => ({
    transform:
      'translateZ(0) var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y)',
  }),
  'transform-cpu': () => ({
    transform:
      'var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y)',
  }),

  // transform-origin
  'origin-center': () => ({ transformOrigin: 'center' }),
  'origin-top': () => ({ transformOrigin: 'top' }),
  'origin-top-right': () => ({ transformOrigin: 'top right' }),
  'origin-right': () => ({ transformOrigin: 'right' }),
  'origin-bottom-right': () => ({ transformOrigin: 'bottom right' }),
  'origin-bottom': () => ({ transformOrigin: 'bottom' }),
  'origin-bottom-left': () => ({ transformOrigin: 'bottom left' }),
  'origin-left': () => ({ transformOrigin: 'left' }),
  'origin-top-left': () => ({ transformOrigin: 'top left' }),
  'origin-(<custom-property>)': ([value]) => ({ transformOrigin: `var(${value})` }),
  'origin-[<value>]': ([value]) => ({ transformOrigin: `"${value}"` }),

  // transform-style
  'transform-3d': () => ({ transformStyle: 'preserve-3d' }),
  'transform-flat': () => ({ transformStyle: 'flat' }),

  // translate
  'translate-<number>': ([value]) => ({
    translate: `calc(var(--spacing) * ${value}) calc(var(--spacing) * ${value})`,
  }),
  '-translate-<number>': ([value]) => ({
    translate: `calc(var(--spacing) * -${value}) calc(var(--spacing) * -${value})`,
  }),
  'translate-<fraction>': () => ({ translate: 'calc(<fraction> * 100%) calc(<fraction> * 100%)' }),
  '-translate-<fraction>': () => ({
    translate: 'calc(<fraction> * -100%) calc(<fraction> * -100%)',
  }),
  'translate-full': () => ({ translate: '100% 100%' }),
  '-translate-full': () => ({ translate: '-100% -100%' }),
  'translate-px': () => ({ translate: '1px 1px' }),
  '-translate-px': () => ({ translate: '-1px -1px' }),
  'translate-(<custom-property>)': ([value]) => ({ translate: `var(${value}) var(${value})` }),
  'translate-[<value>]': ([value]) => ({ translate: `${value} ${value}` }),
  'translate-x-<number>': ([value]) => ({
    translate: `calc(var(--spacing) * ${value}) var(--tw-translate-y)`,
  }),
  '-translate-x-<number>': ([value]) => ({
    translate: `calc(var(--spacing) * -${value}) var(--tw-translate-y)`,
  }),
  'translate-x-<fraction>': () => ({ translate: 'calc(<fraction> * 100%) var(--tw-translate-y)' }),
  '-translate-x-<fraction>': () => ({
    translate: 'calc(<fraction> * -100%) var(--tw-translate-y)',
  }),
  'translate-x-full': () => ({ translate: '100% var(--tw-translate-y)' }),
  '-translate-x-full': () => ({ translate: '-100% var(--tw-translate-y)' }),
  'translate-x-px': () => ({ translate: '1px var(--tw-translate-y)' }),
  '-translate-x-px': () => ({ translate: '-1px var(--tw-translate-y)' }),
  'translate-x-(<custom-property>)': ([value]) => ({
    translate: `var(${value}) var(--tw-translate-y)`,
  }),
  'translate-x-[<value>]': ([value]) => ({ translate: `${value} var(--tw-translate-y)` }),
  'translate-y-<number>': ([value]) => ({
    translate: `var(--tw-translate-x) calc(var(--spacing) * ${value})`,
  }),
  '-translate-y-<number>': ([value]) => ({
    translate: `var(--tw-translate-x) calc(var(--spacing) * -${value})`,
  }),
  'translate-y-<fraction>': () => ({ translate: 'var(--tw-translate-x) calc(<fraction> * 100%)' }),
  '-translate-y-<fraction>': () => ({
    translate: 'var(--tw-translate-x) calc(<fraction> * -100%)',
  }),
  'translate-y-full': () => ({ translate: 'var(--tw-translate-x) 100%' }),
  '-translate-y-full': () => ({ translate: 'var(--tw-translate-x) -100%' }),
  'translate-y-px': () => ({ translate: 'var(--tw-translate-x) 1px' }),
  '-translate-y-px': () => ({ translate: 'var(--tw-translate-x) -1px' }),
  'translate-y-(<custom-property>)': ([value]) => ({
    translate: `var(--tw-translate-x) var(${value})`,
  }),
  'translate-y-[<value>]': ([value]) => ({ translate: `var(--tw-translate-x) ${value}` }),
  'translate-z-<number>': ([value]) => ({
    translate: `var(--tw-translate-x) var(--tw-translate-y) calc(var(--spacing) * ${value})`,
  }),
  '-translate-z-<number>': ([value]) => ({
    translate: `var(--tw-translate-x) var(--tw-translate-y) calc(var(--spacing) * -${value})`,
  }),
  'translate-z-px': () => ({ translate: 'var(--tw-translate-x) var(--tw-translate-y) 1px' }),
  '-translate-z-px': () => ({ translate: 'var(--tw-translate-x) var(--tw-translate-y) -1px' }),
  'translate-z-(<custom-property>)': ([value]) => ({
    translate: `var(--tw-translate-x) var(--tw-translate-y) var(${value})`,
  }),
  'translate-z-[<value>]': ([value]) => ({
    translate: `var(--tw-translate-x) var(--tw-translate-y) ${value}`,
  }),
  'translate-none': () => ({ translate: 'none' }),

  // INTERACTIVITY

  // accent-color

  'accent-inherit': () => ({ accentColor: 'inherit' }),
  'accent-current': () => ({ accentColor: 'currentColor' }),
  'accent-transparent': () => ({ accentColor: 'transparent' }),
  'accent-black': () => ({ accentColor: 'var(--color-black)' }),
  'accent-white': () => ({ accentColor: 'var(--color-white)' }),
  'accent-red-50': () => ({ accentColor: 'var(--color-red-50)' }),
  'accent-red-100': () => ({ accentColor: 'var(--color-red-100)' }),
  'accent-red-200': () => ({ accentColor: 'var(--color-red-200)' }),
  'accent-red-300': () => ({ accentColor: 'var(--color-red-300)' }),
  'accent-red-400': () => ({ accentColor: 'var(--color-red-400)' }),
  'accent-red-500': () => ({ accentColor: 'var(--color-red-500)' }),
  'accent-red-600': () => ({ accentColor: 'var(--color-red-600)' }),
  'accent-red-700': () => ({ accentColor: 'var(--color-red-700)' }),
  'accent-red-800': () => ({ accentColor: 'var(--color-red-800)' }),
  'accent-red-900': () => ({ accentColor: 'var(--color-red-900)' }),
  'accent-red-950': () => ({ accentColor: 'var(--color-red-950)' }),
  'accent-orange-50': () => ({ accentColor: 'var(--color-orange-50)' }),
  'accent-orange-100': () => ({ accentColor: 'var(--color-orange-100)' }),
  'accent-orange-200': () => ({ accentColor: 'var(--color-orange-200)' }),
  'accent-orange-300': () => ({ accentColor: 'var(--color-orange-300)' }),
  'accent-orange-400': () => ({ accentColor: 'var(--color-orange-400)' }),
  'accent-orange-500': () => ({ accentColor: 'var(--color-orange-500)' }),
  'accent-orange-600': () => ({ accentColor: 'var(--color-orange-600)' }),
  'accent-orange-700': () => ({ accentColor: 'var(--color-orange-700)' }),
  'accent-orange-800': () => ({ accentColor: 'var(--color-orange-800)' }),
  'accent-orange-900': () => ({ accentColor: 'var(--color-orange-900)' }),
  'accent-orange-950': () => ({ accentColor: 'var(--color-orange-950)' }),
  'accent-amber-50': () => ({ accentColor: 'var(--color-amber-50)' }),
  'accent-amber-100': () => ({ accentColor: 'var(--color-amber-100)' }),
  'accent-amber-200': () => ({ accentColor: 'var(--color-amber-200)' }),
  'accent-amber-300': () => ({ accentColor: 'var(--color-amber-300)' }),
  'accent-amber-400': () => ({ accentColor: 'var(--color-amber-400)' }),
  'accent-amber-500': () => ({ accentColor: 'var(--color-amber-500)' }),
  'accent-amber-600': () => ({ accentColor: 'var(--color-amber-600)' }),
  'accent-amber-700': () => ({ accentColor: 'var(--color-amber-700)' }),
  'accent-amber-800': () => ({ accentColor: 'var(--color-amber-800)' }),
  'accent-amber-900': () => ({ accentColor: 'var(--color-amber-900)' }),
  'accent-amber-950': () => ({ accentColor: 'var(--color-amber-950)' }),
  'accent-yellow-50': () => ({ accentColor: 'var(--color-yellow-50)' }),
  'accent-yellow-100': () => ({ accentColor: 'var(--color-yellow-100)' }),
  'accent-yellow-200': () => ({ accentColor: 'var(--color-yellow-200)' }),
  'accent-yellow-300': () => ({ accentColor: 'var(--color-yellow-300)' }),
  'accent-yellow-400': () => ({ accentColor: 'var(--color-yellow-400)' }),
  'accent-yellow-500': () => ({ accentColor: 'var(--color-yellow-500)' }),
  'accent-yellow-600': () => ({ accentColor: 'var(--color-yellow-600)' }),
  'accent-yellow-700': () => ({ accentColor: 'var(--color-yellow-700)' }),
  'accent-yellow-800': () => ({ accentColor: 'var(--color-yellow-800)' }),
  'accent-yellow-900': () => ({ accentColor: 'var(--color-yellow-900)' }),
  'accent-yellow-950': () => ({ accentColor: 'var(--color-yellow-950)' }),
  'accent-lime-50': () => ({ accentColor: 'var(--color-lime-50)' }),
  'accent-lime-100': () => ({ accentColor: 'var(--color-lime-100)' }),
  'accent-lime-200': () => ({ accentColor: 'var(--color-lime-200)' }),
  'accent-lime-300': () => ({ accentColor: 'var(--color-lime-300)' }),
  'accent-lime-400': () => ({ accentColor: 'var(--color-lime-400)' }),
  'accent-lime-500': () => ({ accentColor: 'var(--color-lime-500)' }),
  'accent-lime-600': () => ({ accentColor: 'var(--color-lime-600)' }),
  'accent-lime-700': () => ({ accentColor: 'var(--color-lime-700)' }),
  'accent-lime-800': () => ({ accentColor: 'var(--color-lime-800)' }),
  'accent-lime-900': () => ({ accentColor: 'var(--color-lime-900)' }),
  'accent-lime-950': () => ({ accentColor: 'var(--color-lime-950)' }),
  'accent-green-50': () => ({ accentColor: 'var(--color-green-50)' }),
  'accent-green-100': () => ({ accentColor: 'var(--color-green-100)' }),
  'accent-green-200': () => ({ accentColor: 'var(--color-green-200)' }),
  'accent-green-300': () => ({ accentColor: 'var(--color-green-300)' }),
  'accent-green-400': () => ({ accentColor: 'var(--color-green-400)' }),
  'accent-green-500': () => ({ accentColor: 'var(--color-green-500)' }),
  'accent-green-600': () => ({ accentColor: 'var(--color-green-600)' }),
  'accent-green-700': () => ({ accentColor: 'var(--color-green-700)' }),
  'accent-green-800': () => ({ accentColor: 'var(--color-green-800)' }),
  'accent-green-900': () => ({ accentColor: 'var(--color-green-900)' }),
  'accent-green-950': () => ({ accentColor: 'var(--color-green-950)' }),
  'accent-emerald-50': () => ({ accentColor: 'var(--color-emerald-50)' }),
  'accent-emerald-100': () => ({ accentColor: 'var(--color-emerald-100)' }),
  'accent-emerald-200': () => ({ accentColor: 'var(--color-emerald-200)' }),
  'accent-emerald-300': () => ({ accentColor: 'var(--color-emerald-300)' }),
  'accent-emerald-400': () => ({ accentColor: 'var(--color-emerald-400)' }),
  'accent-emerald-500': () => ({ accentColor: 'var(--color-emerald-500)' }),
  'accent-emerald-600': () => ({ accentColor: 'var(--color-emerald-600)' }),
  'accent-emerald-700': () => ({ accentColor: 'var(--color-emerald-700)' }),
  'accent-emerald-800': () => ({ accentColor: 'var(--color-emerald-800)' }),
  'accent-emerald-900': () => ({ accentColor: 'var(--color-emerald-900)' }),
  'accent-emerald-950': () => ({ accentColor: 'var(--color-emerald-950)' }),
  'accent-teal-50': () => ({ accentColor: 'var(--color-teal-50)' }),
  'accent-teal-100': () => ({ accentColor: 'var(--color-teal-100)' }),
  'accent-teal-200': () => ({ accentColor: 'var(--color-teal-200)' }),
  'accent-teal-300': () => ({ accentColor: 'var(--color-teal-300)' }),
  'accent-teal-400': () => ({ accentColor: 'var(--color-teal-400)' }),
  'accent-teal-500': () => ({ accentColor: 'var(--color-teal-500)' }),
  'accent-teal-600': () => ({ accentColor: 'var(--color-teal-600)' }),
  'accent-teal-700': () => ({ accentColor: 'var(--color-teal-700)' }),
  'accent-teal-800': () => ({ accentColor: 'var(--color-teal-800)' }),
  'accent-teal-900': () => ({ accentColor: 'var(--color-teal-900)' }),
  'accent-teal-950': () => ({ accentColor: 'var(--color-teal-950)' }),
  'accent-cyan-50': () => ({ accentColor: 'var(--color-cyan-50)' }),
  'accent-cyan-100': () => ({ accentColor: 'var(--color-cyan-100)' }),
  'accent-cyan-200': () => ({ accentColor: 'var(--color-cyan-200)' }),
  'accent-cyan-300': () => ({ accentColor: 'var(--color-cyan-300)' }),
  'accent-cyan-400': () => ({ accentColor: 'var(--color-cyan-400)' }),
  'accent-cyan-500': () => ({ accentColor: 'var(--color-cyan-500)' }),
  'accent-cyan-600': () => ({ accentColor: 'var(--color-cyan-600)' }),
  'accent-cyan-700': () => ({ accentColor: 'var(--color-cyan-700)' }),
  'accent-cyan-800': () => ({ accentColor: 'var(--color-cyan-800)' }),
  'accent-cyan-900': () => ({ accentColor: 'var(--color-cyan-900)' }),
  'accent-cyan-950': () => ({ accentColor: 'var(--color-cyan-950)' }),
  'accent-sky-50': () => ({ accentColor: 'var(--color-sky-50)' }),
  'accent-sky-100': () => ({ accentColor: 'var(--color-sky-100)' }),
  'accent-sky-200': () => ({ accentColor: 'var(--color-sky-200)' }),
  'accent-sky-300': () => ({ accentColor: 'var(--color-sky-300)' }),
  'accent-sky-400': () => ({ accentColor: 'var(--color-sky-400)' }),
  'accent-sky-500': () => ({ accentColor: 'var(--color-sky-500)' }),
  'accent-sky-600': () => ({ accentColor: 'var(--color-sky-600)' }),
  'accent-sky-700': () => ({ accentColor: 'var(--color-sky-700)' }),
  'accent-sky-800': () => ({ accentColor: 'var(--color-sky-800)' }),
  'accent-sky-900': () => ({ accentColor: 'var(--color-sky-900)' }),
  'accent-sky-950': () => ({ accentColor: 'var(--color-sky-950)' }),
  'accent-blue-50': () => ({ accentColor: 'var(--color-blue-50)' }),
  'accent-blue-100': () => ({ accentColor: 'var(--color-blue-100)' }),
  'accent-blue-200': () => ({ accentColor: 'var(--color-blue-200)' }),
  'accent-blue-300': () => ({ accentColor: 'var(--color-blue-300)' }),
  'accent-blue-400': () => ({ accentColor: 'var(--color-blue-400)' }),
  'accent-blue-500': () => ({ accentColor: 'var(--color-blue-500)' }),
  'accent-blue-600': () => ({ accentColor: 'var(--color-blue-600)' }),
  'accent-blue-700': () => ({ accentColor: 'var(--color-blue-700)' }),
  'accent-blue-800': () => ({ accentColor: 'var(--color-blue-800)' }),
  'accent-blue-900': () => ({ accentColor: 'var(--color-blue-900)' }),
  'accent-blue-950': () => ({ accentColor: 'var(--color-blue-950)' }),
  'accent-indigo-50': () => ({ accentColor: 'var(--color-indigo-50)' }),
  'accent-indigo-100': () => ({ accentColor: 'var(--color-indigo-100)' }),
  'accent-indigo-200': () => ({ accentColor: 'var(--color-indigo-200)' }),
  'accent-indigo-300': () => ({ accentColor: 'var(--color-indigo-300)' }),
  'accent-indigo-400': () => ({ accentColor: 'var(--color-indigo-400)' }),
  'accent-indigo-500': () => ({ accentColor: 'var(--color-indigo-500)' }),
  'accent-indigo-600': () => ({ accentColor: 'var(--color-indigo-600)' }),
  'accent-indigo-700': () => ({ accentColor: 'var(--color-indigo-700)' }),
  'accent-indigo-800': () => ({ accentColor: 'var(--color-indigo-800)' }),
  'accent-indigo-900': () => ({ accentColor: 'var(--color-indigo-900)' }),
  'accent-indigo-950': () => ({ accentColor: 'var(--color-indigo-950)' }),
  'accent-violet-50': () => ({ accentColor: 'var(--color-violet-50)' }),
  'accent-violet-100': () => ({ accentColor: 'var(--color-violet-100)' }),
  'accent-violet-200': () => ({ accentColor: 'var(--color-violet-200)' }),
  'accent-violet-300': () => ({ accentColor: 'var(--color-violet-300)' }),
  'accent-violet-400': () => ({ accentColor: 'var(--color-violet-400)' }),
  'accent-violet-500': () => ({ accentColor: 'var(--color-violet-500)' }),
  'accent-violet-600': () => ({ accentColor: 'var(--color-violet-600)' }),
  'accent-violet-700': () => ({ accentColor: 'var(--color-violet-700)' }),
  'accent-violet-800': () => ({ accentColor: 'var(--color-violet-800)' }),
  'accent-violet-900': () => ({ accentColor: 'var(--color-violet-900)' }),
  'accent-violet-950': () => ({ accentColor: 'var(--color-violet-950)' }),
  'accent-purple-50': () => ({ accentColor: 'var(--color-purple-50)' }),
  'accent-purple-100': () => ({ accentColor: 'var(--color-purple-100)' }),
  'accent-purple-200': () => ({ accentColor: 'var(--color-purple-200)' }),
  'accent-purple-300': () => ({ accentColor: 'var(--color-purple-300)' }),
  'accent-purple-400': () => ({ accentColor: 'var(--color-purple-400)' }),
  'accent-purple-500': () => ({ accentColor: 'var(--color-purple-500)' }),
  'accent-purple-600': () => ({ accentColor: 'var(--color-purple-600)' }),
  'accent-purple-700': () => ({ accentColor: 'var(--color-purple-700)' }),
  'accent-purple-800': () => ({ accentColor: 'var(--color-purple-800)' }),
  'accent-purple-900': () => ({ accentColor: 'var(--color-purple-900)' }),
  'accent-purple-950': () => ({ accentColor: 'var(--color-purple-950)' }),
  'accent-fuchsia-50': () => ({ accentColor: 'var(--color-fuchsia-50)' }),
  'accent-fuchsia-100': () => ({ accentColor: 'var(--color-fuchsia-100)' }),
  'accent-fuchsia-200': () => ({ accentColor: 'var(--color-fuchsia-200)' }),
  'accent-fuchsia-300': () => ({ accentColor: 'var(--color-fuchsia-300)' }),
  'accent-fuchsia-400': () => ({ accentColor: 'var(--color-fuchsia-400)' }),
  'accent-fuchsia-500': () => ({ accentColor: 'var(--color-fuchsia-500)' }),
  'accent-fuchsia-600': () => ({ accentColor: 'var(--color-fuchsia-600)' }),
  'accent-fuchsia-700': () => ({ accentColor: 'var(--color-fuchsia-700)' }),
  'accent-fuchsia-800': () => ({ accentColor: 'var(--color-fuchsia-800)' }),
  'accent-fuchsia-900': () => ({ accentColor: 'var(--color-fuchsia-900)' }),
  'accent-fuchsia-950': () => ({ accentColor: 'var(--color-fuchsia-950)' }),
  'accent-pink-50': () => ({ accentColor: 'var(--color-pink-50)' }),
  'accent-pink-100': () => ({ accentColor: 'var(--color-pink-100)' }),
  'accent-pink-200': () => ({ accentColor: 'var(--color-pink-200)' }),
  'accent-pink-300': () => ({ accentColor: 'var(--color-pink-300)' }),
  'accent-pink-400': () => ({ accentColor: 'var(--color-pink-400)' }),
  'accent-pink-500': () => ({ accentColor: 'var(--color-pink-500)' }),
  'accent-pink-600': () => ({ accentColor: 'var(--color-pink-600)' }),
  'accent-pink-700': () => ({ accentColor: 'var(--color-pink-700)' }),
  'accent-pink-800': () => ({ accentColor: 'var(--color-pink-800)' }),
  'accent-pink-900': () => ({ accentColor: 'var(--color-pink-900)' }),
  'accent-pink-950': () => ({ accentColor: 'var(--color-pink-950)' }),
  'accent-rose-50': () => ({ accentColor: 'var(--color-rose-50)' }),
  'accent-rose-100': () => ({ accentColor: 'var(--color-rose-100)' }),
  'accent-rose-200': () => ({ accentColor: 'var(--color-rose-200)' }),
  'accent-rose-300': () => ({ accentColor: 'var(--color-rose-300)' }),
  'accent-rose-400': () => ({ accentColor: 'var(--color-rose-400)' }),
  'accent-rose-500': () => ({ accentColor: 'var(--color-rose-500)' }),
  'accent-rose-600': () => ({ accentColor: 'var(--color-rose-600)' }),
  'accent-rose-700': () => ({ accentColor: 'var(--color-rose-700)' }),
  'accent-rose-800': () => ({ accentColor: 'var(--color-rose-800)' }),
  'accent-rose-900': () => ({ accentColor: 'var(--color-rose-900)' }),
  'accent-rose-950': () => ({ accentColor: 'var(--color-rose-950)' }),
  'accent-slate-50': () => ({ accentColor: 'var(--color-slate-50)' }),
  'accent-slate-100': () => ({ accentColor: 'var(--color-slate-100)' }),
  'accent-slate-200': () => ({ accentColor: 'var(--color-slate-200)' }),
  'accent-slate-300': () => ({ accentColor: 'var(--color-slate-300)' }),
  'accent-slate-400': () => ({ accentColor: 'var(--color-slate-400)' }),
  'accent-slate-500': () => ({ accentColor: 'var(--color-slate-500)' }),
  'accent-slate-600': () => ({ accentColor: 'var(--color-slate-600)' }),
  'accent-slate-700': () => ({ accentColor: 'var(--color-slate-700)' }),
  'accent-slate-800': () => ({ accentColor: 'var(--color-slate-800)' }),
  'accent-slate-900': () => ({ accentColor: 'var(--color-slate-900)' }),
  'accent-slate-950': () => ({ accentColor: 'var(--color-slate-950)' }),
  'accent-gray-50': () => ({ accentColor: 'var(--color-gray-50)' }),
  'accent-gray-100': () => ({ accentColor: 'var(--color-gray-100)' }),
  'accent-gray-200': () => ({ accentColor: 'var(--color-gray-200)' }),
  'accent-gray-300': () => ({ accentColor: 'var(--color-gray-300)' }),
  'accent-gray-400': () => ({ accentColor: 'var(--color-gray-400)' }),
  'accent-gray-500': () => ({ accentColor: 'var(--color-gray-500)' }),
  'accent-gray-600': () => ({ accentColor: 'var(--color-gray-600)' }),
  'accent-gray-700': () => ({ accentColor: 'var(--color-gray-700)' }),
  'accent-gray-800': () => ({ accentColor: 'var(--color-gray-800)' }),
  'accent-gray-900': () => ({ accentColor: 'var(--color-gray-900)' }),
  'accent-gray-950': () => ({ accentColor: 'var(--color-gray-950)' }),
  'accent-zinc-50': () => ({ accentColor: 'var(--color-zinc-50)' }),
  'accent-zinc-100': () => ({ accentColor: 'var(--color-zinc-100)' }),
  'accent-zinc-200': () => ({ accentColor: 'var(--color-zinc-200)' }),
  'accent-zinc-300': () => ({ accentColor: 'var(--color-zinc-300)' }),
  'accent-zinc-400': () => ({ accentColor: 'var(--color-zinc-400)' }),
  'accent-zinc-500': () => ({ accentColor: 'var(--color-zinc-500)' }),
  'accent-zinc-600': () => ({ accentColor: 'var(--color-zinc-600)' }),
  'accent-zinc-700': () => ({ accentColor: 'var(--color-zinc-700)' }),
  'accent-zinc-800': () => ({ accentColor: 'var(--color-zinc-800)' }),
  'accent-zinc-900': () => ({ accentColor: 'var(--color-zinc-900)' }),
  'accent-zinc-950': () => ({ accentColor: 'var(--color-zinc-950)' }),
  'accent-neutral-50': () => ({ accentColor: 'var(--color-neutral-50)' }),
  'accent-neutral-100': () => ({ accentColor: 'var(--color-neutral-100)' }),
  'accent-neutral-200': () => ({ accentColor: 'var(--color-neutral-200)' }),
  'accent-neutral-300': () => ({ accentColor: 'var(--color-neutral-300)' }),
  'accent-neutral-400': () => ({ accentColor: 'var(--color-neutral-400)' }),
  'accent-neutral-500': () => ({ accentColor: 'var(--color-neutral-500)' }),
  'accent-neutral-600': () => ({ accentColor: 'var(--color-neutral-600)' }),
  'accent-neutral-700': () => ({ accentColor: 'var(--color-neutral-700)' }),
  'accent-neutral-800': () => ({ accentColor: 'var(--color-neutral-800)' }),
  'accent-neutral-900': () => ({ accentColor: 'var(--color-neutral-900)' }),
  'accent-neutral-950': () => ({ accentColor: 'var(--color-neutral-950)' }),
  'accent-stone-50': () => ({ accentColor: 'var(--color-stone-50)' }),
  'accent-stone-100': () => ({ accentColor: 'var(--color-stone-100)' }),
  'accent-stone-200': () => ({ accentColor: 'var(--color-stone-200)' }),
  'accent-stone-300': () => ({ accentColor: 'var(--color-stone-300)' }),
  'accent-stone-400': () => ({ accentColor: 'var(--color-stone-400)' }),
  'accent-stone-500': () => ({ accentColor: 'var(--color-stone-500)' }),
  'accent-stone-600': () => ({ accentColor: 'var(--color-stone-600)' }),
  'accent-stone-700': () => ({ accentColor: 'var(--color-stone-700)' }),
  'accent-stone-800': () => ({ accentColor: 'var(--color-stone-800)' }),
  'accent-stone-900': () => ({ accentColor: 'var(--color-stone-900)' }),
  'accent-stone-950': () => ({ accentColor: 'var(--color-stone-950)' }),
  'accent-<custom-property>': ([value]) => ({ accentColor: `var(${value})` }),
  'accent-[<value>]': ([value]) => ({ accentColor: `"${value}"` }),

  // appearance
  'appearance-none': () => ({ appearance: 'none' }),
  'appearance-auto': () => ({ appearance: 'auto' }),

  // caret-color
  'caret-inherit': () => ({ caretColor: 'inherit' }),
  'caret-current': () => ({ caretColor: 'currentColor' }),
  'caret-transparent': () => ({ caretColor: 'transparent' }),
  'caret-black': () => ({ caretColor: 'var(--color-black)' }),
  'caret-white': () => ({ caretColor: 'var(--color-white)' }),
  'caret-red-50': () => ({ caretColor: 'var(--color-red-50)' }),
  'caret-red-100': () => ({ caretColor: 'var(--color-red-100)' }),
  'caret-red-200': () => ({ caretColor: 'var(--color-red-200)' }),
  'caret-red-300': () => ({ caretColor: 'var(--color-red-300)' }),
  'caret-red-400': () => ({ caretColor: 'var(--color-red-400)' }),
  'caret-red-500': () => ({ caretColor: 'var(--color-red-500)' }),
  'caret-red-600': () => ({ caretColor: 'var(--color-red-600)' }),
  'caret-red-700': () => ({ caretColor: 'var(--color-red-700)' }),
  'caret-red-800': () => ({ caretColor: 'var(--color-red-800)' }),
  'caret-red-900': () => ({ caretColor: 'var(--color-red-900)' }),
  'caret-red-950': () => ({ caretColor: 'var(--color-red-950)' }),
  'caret-orange-50': () => ({ caretColor: 'var(--color-orange-50)' }),
  'caret-orange-100': () => ({ caretColor: 'var(--color-orange-100)' }),
  'caret-orange-200': () => ({ caretColor: 'var(--color-orange-200)' }),
  'caret-orange-300': () => ({ caretColor: 'var(--color-orange-300)' }),
  'caret-orange-400': () => ({ caretColor: 'var(--color-orange-400)' }),
  'caret-orange-500': () => ({ caretColor: 'var(--color-orange-500)' }),
  'caret-orange-600': () => ({ caretColor: 'var(--color-orange-600)' }),
  'caret-orange-700': () => ({ caretColor: 'var(--color-orange-700)' }),
  'caret-orange-800': () => ({ caretColor: 'var(--color-orange-800)' }),
  'caret-orange-900': () => ({ caretColor: 'var(--color-orange-900)' }),
  'caret-orange-950': () => ({ caretColor: 'var(--color-orange-950)' }),
  'caret-amber-50': () => ({ caretColor: 'var(--color-amber-50)' }),
  'caret-amber-100': () => ({ caretColor: 'var(--color-amber-100)' }),
  'caret-amber-200': () => ({ caretColor: 'var(--color-amber-200)' }),
  'caret-amber-300': () => ({ caretColor: 'var(--color-amber-300)' }),
  'caret-amber-400': () => ({ caretColor: 'var(--color-amber-400)' }),
  'caret-amber-500': () => ({ caretColor: 'var(--color-amber-500)' }),
  'caret-amber-600': () => ({ caretColor: 'var(--color-amber-600)' }),
  'caret-amber-700': () => ({ caretColor: 'var(--color-amber-700)' }),
  'caret-amber-800': () => ({ caretColor: 'var(--color-amber-800)' }),
  'caret-amber-900': () => ({ caretColor: 'var(--color-amber-900)' }),
  'caret-amber-950': () => ({ caretColor: 'var(--color-amber-950)' }),
  'caret-yellow-50': () => ({ caretColor: 'var(--color-yellow-50)' }),
  'caret-yellow-100': () => ({ caretColor: 'var(--color-yellow-100)' }),
  'caret-yellow-200': () => ({ caretColor: 'var(--color-yellow-200)' }),
  'caret-yellow-300': () => ({ caretColor: 'var(--color-yellow-300)' }),
  'caret-yellow-400': () => ({ caretColor: 'var(--color-yellow-400)' }),
  'caret-yellow-500': () => ({ caretColor: 'var(--color-yellow-500)' }),
  'caret-yellow-600': () => ({ caretColor: 'var(--color-yellow-600)' }),
  'caret-yellow-700': () => ({ caretColor: 'var(--color-yellow-700)' }),
  'caret-yellow-800': () => ({ caretColor: 'var(--color-yellow-800)' }),
  'caret-yellow-900': () => ({ caretColor: 'var(--color-yellow-900)' }),
  'caret-yellow-950': () => ({ caretColor: 'var(--color-yellow-950)' }),
  'caret-lime-50': () => ({ caretColor: 'var(--color-lime-50)' }),
  'caret-lime-100': () => ({ caretColor: 'var(--color-lime-100)' }),
  'caret-lime-200': () => ({ caretColor: 'var(--color-lime-200)' }),
  'caret-lime-300': () => ({ caretColor: 'var(--color-lime-300)' }),
  'caret-lime-400': () => ({ caretColor: 'var(--color-lime-400)' }),
  'caret-lime-500': () => ({ caretColor: 'var(--color-lime-500)' }),
  'caret-lime-600': () => ({ caretColor: 'var(--color-lime-600)' }),
  'caret-lime-700': () => ({ caretColor: 'var(--color-lime-700)' }),
  'caret-lime-800': () => ({ caretColor: 'var(--color-lime-800)' }),
  'caret-lime-900': () => ({ caretColor: 'var(--color-lime-900)' }),
  'caret-lime-950': () => ({ caretColor: 'var(--color-lime-950)' }),
  'caret-green-50': () => ({ caretColor: 'var(--color-green-50)' }),
  'caret-green-100': () => ({ caretColor: 'var(--color-green-100)' }),
  'caret-green-200': () => ({ caretColor: 'var(--color-green-200)' }),
  'caret-green-300': () => ({ caretColor: 'var(--color-green-300)' }),
  'caret-green-400': () => ({ caretColor: 'var(--color-green-400)' }),
  'caret-green-500': () => ({ caretColor: 'var(--color-green-500)' }),
  'caret-green-600': () => ({ caretColor: 'var(--color-green-600)' }),
  'caret-green-700': () => ({ caretColor: 'var(--color-green-700)' }),
  'caret-green-800': () => ({ caretColor: 'var(--color-green-800)' }),
  'caret-green-900': () => ({ caretColor: 'var(--color-green-900)' }),
  'caret-green-950': () => ({ caretColor: 'var(--color-green-950)' }),
  'caret-emerald-50': () => ({ caretColor: 'var(--color-emerald-50)' }),
  'caret-emerald-100': () => ({ caretColor: 'var(--color-emerald-100)' }),
  'caret-emerald-200': () => ({ caretColor: 'var(--color-emerald-200)' }),
  'caret-emerald-300': () => ({ caretColor: 'var(--color-emerald-300)' }),
  'caret-emerald-400': () => ({ caretColor: 'var(--color-emerald-400)' }),
  'caret-emerald-500': () => ({ caretColor: 'var(--color-emerald-500)' }),
  'caret-emerald-600': () => ({ caretColor: 'var(--color-emerald-600)' }),
  'caret-emerald-700': () => ({ caretColor: 'var(--color-emerald-700)' }),
  'caret-emerald-800': () => ({ caretColor: 'var(--color-emerald-800)' }),
  'caret-emerald-900': () => ({ caretColor: 'var(--color-emerald-900)' }),
  'caret-emerald-950': () => ({ caretColor: 'var(--color-emerald-950)' }),
  'caret-teal-50': () => ({ caretColor: 'var(--color-teal-50)' }),
  'caret-teal-100': () => ({ caretColor: 'var(--color-teal-100)' }),
  'caret-teal-200': () => ({ caretColor: 'var(--color-teal-200)' }),
  'caret-teal-300': () => ({ caretColor: 'var(--color-teal-300)' }),
  'caret-teal-400': () => ({ caretColor: 'var(--color-teal-400)' }),
  'caret-teal-500': () => ({ caretColor: 'var(--color-teal-500)' }),
  'caret-teal-600': () => ({ caretColor: 'var(--color-teal-600)' }),
  'caret-teal-700': () => ({ caretColor: 'var(--color-teal-700)' }),
  'caret-teal-800': () => ({ caretColor: 'var(--color-teal-800)' }),
  'caret-teal-900': () => ({ caretColor: 'var(--color-teal-900)' }),
  'caret-teal-950': () => ({ caretColor: 'var(--color-teal-950)' }),
  'caret-cyan-50': () => ({ caretColor: 'var(--color-cyan-50)' }),
  'caret-cyan-100': () => ({ caretColor: 'var(--color-cyan-100)' }),
  'caret-cyan-200': () => ({ caretColor: 'var(--color-cyan-200)' }),
  'caret-cyan-300': () => ({ caretColor: 'var(--color-cyan-300)' }),
  'caret-cyan-400': () => ({ caretColor: 'var(--color-cyan-400)' }),
  'caret-cyan-500': () => ({ caretColor: 'var(--color-cyan-500)' }),
  'caret-cyan-600': () => ({ caretColor: 'var(--color-cyan-600)' }),
  'caret-cyan-700': () => ({ caretColor: 'var(--color-cyan-700)' }),
  'caret-cyan-800': () => ({ caretColor: 'var(--color-cyan-800)' }),
  'caret-cyan-900': () => ({ caretColor: 'var(--color-cyan-900)' }),
  'caret-cyan-950': () => ({ caretColor: 'var(--color-cyan-950)' }),
  'caret-sky-50': () => ({ caretColor: 'var(--color-sky-50)' }),
  'caret-sky-100': () => ({ caretColor: 'var(--color-sky-100)' }),
  'caret-sky-200': () => ({ caretColor: 'var(--color-sky-200)' }),
  'caret-sky-300': () => ({ caretColor: 'var(--color-sky-300)' }),
  'caret-sky-400': () => ({ caretColor: 'var(--color-sky-400)' }),
  'caret-sky-500': () => ({ caretColor: 'var(--color-sky-500)' }),
  'caret-sky-600': () => ({ caretColor: 'var(--color-sky-600)' }),
  'caret-sky-700': () => ({ caretColor: 'var(--color-sky-700)' }),
  'caret-sky-800': () => ({ caretColor: 'var(--color-sky-800)' }),
  'caret-sky-900': () => ({ caretColor: 'var(--color-sky-900)' }),
  'caret-sky-950': () => ({ caretColor: 'var(--color-sky-950)' }),
  'caret-blue-50': () => ({ caretColor: 'var(--color-blue-50)' }),
  'caret-blue-100': () => ({ caretColor: 'var(--color-blue-100)' }),
  'caret-blue-200': () => ({ caretColor: 'var(--color-blue-200)' }),
  'caret-blue-300': () => ({ caretColor: 'var(--color-blue-300)' }),
  'caret-blue-400': () => ({ caretColor: 'var(--color-blue-400)' }),
  'caret-blue-500': () => ({ caretColor: 'var(--color-blue-500)' }),
  'caret-blue-600': () => ({ caretColor: 'var(--color-blue-600)' }),
  'caret-blue-700': () => ({ caretColor: 'var(--color-blue-700)' }),
  'caret-blue-800': () => ({ caretColor: 'var(--color-blue-800)' }),
  'caret-blue-900': () => ({ caretColor: 'var(--color-blue-900)' }),
  'caret-blue-950': () => ({ caretColor: 'var(--color-blue-950)' }),
  'caret-indigo-50': () => ({ caretColor: 'var(--color-indigo-50)' }),
  'caret-indigo-100': () => ({ caretColor: 'var(--color-indigo-100)' }),
  'caret-indigo-200': () => ({ caretColor: 'var(--color-indigo-200)' }),
  'caret-indigo-300': () => ({ caretColor: 'var(--color-indigo-300)' }),
  'caret-indigo-400': () => ({ caretColor: 'var(--color-indigo-400)' }),
  'caret-indigo-500': () => ({ caretColor: 'var(--color-indigo-500)' }),
  'caret-indigo-600': () => ({ caretColor: 'var(--color-indigo-600)' }),
  'caret-indigo-700': () => ({ caretColor: 'var(--color-indigo-700)' }),
  'caret-indigo-800': () => ({ caretColor: 'var(--color-indigo-800)' }),
  'caret-indigo-900': () => ({ caretColor: 'var(--color-indigo-900)' }),
  'caret-indigo-950': () => ({ caretColor: 'var(--color-indigo-950)' }),
  'caret-violet-50': () => ({ caretColor: 'var(--color-violet-50)' }),
  'caret-violet-100': () => ({ caretColor: 'var(--color-violet-100)' }),
  'caret-violet-200': () => ({ caretColor: 'var(--color-violet-200)' }),
  'caret-violet-300': () => ({ caretColor: 'var(--color-violet-300)' }),
  'caret-violet-400': () => ({ caretColor: 'var(--color-violet-400)' }),
  'caret-violet-500': () => ({ caretColor: 'var(--color-violet-500)' }),
  'caret-violet-600': () => ({ caretColor: 'var(--color-violet-600)' }),
  'caret-violet-700': () => ({ caretColor: 'var(--color-violet-700)' }),
  'caret-violet-800': () => ({ caretColor: 'var(--color-violet-800)' }),
  'caret-violet-900': () => ({ caretColor: 'var(--color-violet-900)' }),
  'caret-violet-950': () => ({ caretColor: 'var(--color-violet-950)' }),
  'caret-purple-50': () => ({ caretColor: 'var(--color-purple-50)' }),
  'caret-purple-100': () => ({ caretColor: 'var(--color-purple-100)' }),
  'caret-purple-200': () => ({ caretColor: 'var(--color-purple-200)' }),
  'caret-purple-300': () => ({ caretColor: 'var(--color-purple-300)' }),
  'caret-purple-400': () => ({ caretColor: 'var(--color-purple-400)' }),
  'caret-purple-500': () => ({ caretColor: 'var(--color-purple-500)' }),
  'caret-purple-600': () => ({ caretColor: 'var(--color-purple-600)' }),
  'caret-purple-700': () => ({ caretColor: 'var(--color-purple-700)' }),
  'caret-purple-800': () => ({ caretColor: 'var(--color-purple-800)' }),
  'caret-purple-900': () => ({ caretColor: 'var(--color-purple-900)' }),
  'caret-purple-950': () => ({ caretColor: 'var(--color-purple-950)' }),
  'caret-fuchsia-50': () => ({ caretColor: 'var(--color-fuchsia-50)' }),
  'caret-fuchsia-100': () => ({ caretColor: 'var(--color-fuchsia-100)' }),
  'caret-fuchsia-200': () => ({ caretColor: 'var(--color-fuchsia-200)' }),
  'caret-fuchsia-300': () => ({ caretColor: 'var(--color-fuchsia-300)' }),
  'caret-fuchsia-400': () => ({ caretColor: 'var(--color-fuchsia-400)' }),
  'caret-fuchsia-500': () => ({ caretColor: 'var(--color-fuchsia-500)' }),
  'caret-fuchsia-600': () => ({ caretColor: 'var(--color-fuchsia-600)' }),
  'caret-fuchsia-700': () => ({ caretColor: 'var(--color-fuchsia-700)' }),
  'caret-fuchsia-800': () => ({ caretColor: 'var(--color-fuchsia-800)' }),
  'caret-fuchsia-900': () => ({ caretColor: 'var(--color-fuchsia-900)' }),
  'caret-fuchsia-950': () => ({ caretColor: 'var(--color-fuchsia-950)' }),
  'caret-pink-50': () => ({ caretColor: 'var(--color-pink-50)' }),
  'caret-pink-100': () => ({ caretColor: 'var(--color-pink-100)' }),
  'caret-pink-200': () => ({ caretColor: 'var(--color-pink-200)' }),
  'caret-pink-300': () => ({ caretColor: 'var(--color-pink-300)' }),
  'caret-pink-400': () => ({ caretColor: 'var(--color-pink-400)' }),
  'caret-pink-500': () => ({ caretColor: 'var(--color-pink-500)' }),
  'caret-pink-600': () => ({ caretColor: 'var(--color-pink-600)' }),
  'caret-pink-700': () => ({ caretColor: 'var(--color-pink-700)' }),
  'caret-pink-800': () => ({ caretColor: 'var(--color-pink-800)' }),
  'caret-pink-900': () => ({ caretColor: 'var(--color-pink-900)' }),
  'caret-pink-950': () => ({ caretColor: 'var(--color-pink-950)' }),
  'caret-rose-50': () => ({ caretColor: 'var(--color-rose-50)' }),
  'caret-rose-100': () => ({ caretColor: 'var(--color-rose-100)' }),
  'caret-rose-200': () => ({ caretColor: 'var(--color-rose-200)' }),
  'caret-rose-300': () => ({ caretColor: 'var(--color-rose-300)' }),
  'caret-rose-400': () => ({ caretColor: 'var(--color-rose-400)' }),
  'caret-rose-500': () => ({ caretColor: 'var(--color-rose-500)' }),
  'caret-rose-600': () => ({ caretColor: 'var(--color-rose-600)' }),
  'caret-rose-700': () => ({ caretColor: 'var(--color-rose-700)' }),
  'caret-rose-800': () => ({ caretColor: 'var(--color-rose-800)' }),
  'caret-rose-900': () => ({ caretColor: 'var(--color-rose-900)' }),
  'caret-rose-950': () => ({ caretColor: 'var(--color-rose-950)' }),
  'caret-slate-50': () => ({ caretColor: 'var(--color-slate-50)' }),
  'caret-slate-100': () => ({ caretColor: 'var(--color-slate-100)' }),
  'caret-slate-200': () => ({ caretColor: 'var(--color-slate-200)' }),
  'caret-slate-300': () => ({ caretColor: 'var(--color-slate-300)' }),
  'caret-slate-400': () => ({ caretColor: 'var(--color-slate-400)' }),
  'caret-slate-500': () => ({ caretColor: 'var(--color-slate-500)' }),
  'caret-slate-600': () => ({ caretColor: 'var(--color-slate-600)' }),
  'caret-slate-700': () => ({ caretColor: 'var(--color-slate-700)' }),
  'caret-slate-800': () => ({ caretColor: 'var(--color-slate-800)' }),
  'caret-slate-900': () => ({ caretColor: 'var(--color-slate-900)' }),
  'caret-slate-950': () => ({ caretColor: 'var(--color-slate-950)' }),
  'caret-gray-50': () => ({ caretColor: 'var(--color-gray-50)' }),
  'caret-gray-100': () => ({ caretColor: 'var(--color-gray-100)' }),
  'caret-gray-200': () => ({ caretColor: 'var(--color-gray-200)' }),
  'caret-gray-300': () => ({ caretColor: 'var(--color-gray-300)' }),
  'caret-gray-400': () => ({ caretColor: 'var(--color-gray-400)' }),
  'caret-gray-500': () => ({ caretColor: 'var(--color-gray-500)' }),
  'caret-gray-600': () => ({ caretColor: 'var(--color-gray-600)' }),
  'caret-gray-700': () => ({ caretColor: 'var(--color-gray-700)' }),
  'caret-gray-800': () => ({ caretColor: 'var(--color-gray-800)' }),
  'caret-gray-900': () => ({ caretColor: 'var(--color-gray-900)' }),
  'caret-gray-950': () => ({ caretColor: 'var(--color-gray-950)' }),
  'caret-zinc-50': () => ({ caretColor: 'var(--color-zinc-50)' }),
  'caret-zinc-100': () => ({ caretColor: 'var(--color-zinc-100)' }),
  'caret-zinc-200': () => ({ caretColor: 'var(--color-zinc-200)' }),
  'caret-zinc-300': () => ({ caretColor: 'var(--color-zinc-300)' }),
  'caret-zinc-400': () => ({ caretColor: 'var(--color-zinc-400)' }),
  'caret-zinc-500': () => ({ caretColor: 'var(--color-zinc-500)' }),
  'caret-zinc-600': () => ({ caretColor: 'var(--color-zinc-600)' }),
  'caret-zinc-700': () => ({ caretColor: 'var(--color-zinc-700)' }),
  'caret-zinc-800': () => ({ caretColor: 'var(--color-zinc-800)' }),
  'caret-zinc-900': () => ({ caretColor: 'var(--color-zinc-900)' }),
  'caret-zinc-950': () => ({ caretColor: 'var(--color-zinc-950)' }),
  'caret-neutral-50': () => ({ caretColor: 'var(--color-neutral-50)' }),
  'caret-neutral-100': () => ({ caretColor: 'var(--color-neutral-100)' }),
  'caret-neutral-200': () => ({ caretColor: 'var(--color-neutral-200)' }),
  'caret-neutral-300': () => ({ caretColor: 'var(--color-neutral-300)' }),
  'caret-neutral-400': () => ({ caretColor: 'var(--color-neutral-400)' }),
  'caret-neutral-500': () => ({ caretColor: 'var(--color-neutral-500)' }),
  'caret-neutral-600': () => ({ caretColor: 'var(--color-neutral-600)' }),
  'caret-neutral-700': () => ({ caretColor: 'var(--color-neutral-700)' }),
  'caret-neutral-800': () => ({ caretColor: 'var(--color-neutral-800)' }),
  'caret-neutral-900': () => ({ caretColor: 'var(--color-neutral-900)' }),
  'caret-neutral-950': () => ({ caretColor: 'var(--color-neutral-950)' }),
  'caret-stone-50': () => ({ caretColor: 'var(--color-stone-50)' }),
  'caret-stone-100': () => ({ caretColor: 'var(--color-stone-100)' }),
  'caret-stone-200': () => ({ caretColor: 'var(--color-stone-200)' }),
  'caret-stone-300': () => ({ caretColor: 'var(--color-stone-300)' }),
  'caret-stone-400': () => ({ caretColor: 'var(--color-stone-400)' }),
  'caret-stone-500': () => ({ caretColor: 'var(--color-stone-500)' }),
  'caret-stone-600': () => ({ caretColor: 'var(--color-stone-600)' }),
  'caret-stone-700': () => ({ caretColor: 'var(--color-stone-700)' }),
  'caret-stone-800': () => ({ caretColor: 'var(--color-stone-800)' }),
  'caret-stone-900': () => ({ caretColor: 'var(--color-stone-900)' }),
  'caret-stone-950': () => ({ caretColor: 'var(--color-stone-950)' }),
  'caret-<custom-property>': ([value]) => ({ caretColor: `var(${value})` }),
  'caret-[<value>]': ([value]) => ({ caretColor: `"${value}"` }),

  // color-scheme
  'scheme-normal': () => ({ colorScheme: 'normal' }),
  'scheme-dark': () => ({ colorScheme: 'dark' }),
  'scheme-light': () => ({ colorScheme: 'light' }),
  'scheme-light-dark': () => ({ colorScheme: 'light dark' }),
  'scheme-only-dark': () => ({ colorScheme: 'only dark' }),
  'scheme-only-light': () => ({ colorScheme: 'only light' }),

  // cursor
  'cursor-auto': () => ({ cursor: 'auto' }),
  'cursor-default': () => ({ cursor: 'default' }),
  'cursor-pointer': () => ({ cursor: 'pointer' }),
  'cursor-wait': () => ({ cursor: 'wait' }),
  'cursor-text': () => ({ cursor: 'text' }),
  'cursor-move': () => ({ cursor: 'move' }),
  'cursor-help': () => ({ cursor: 'help' }),
  'cursor-not-allowed': () => ({ cursor: 'not-allowed' }),
  'cursor-none': () => ({ cursor: 'none' }),
  'cursor-context-menu': () => ({ cursor: 'context-menu' }),
  'cursor-progress': () => ({ cursor: 'progress' }),
  'cursor-cell': () => ({ cursor: 'cell' }),
  'cursor-crosshair': () => ({ cursor: 'crosshair' }),
  'cursor-vertical-text': () => ({ cursor: 'vertical-text' }),
  'cursor-alias': () => ({ cursor: 'alias' }),
  'cursor-copy': () => ({ cursor: 'copy' }),
  'cursor-no-drop': () => ({ cursor: 'no-drop' }),
  'cursor-grab': () => ({ cursor: 'grab' }),
  'cursor-grabbing': () => ({ cursor: 'grabbing' }),
  'cursor-all-scroll': () => ({ cursor: 'all-scroll' }),
  'cursor-col-resize': () => ({ cursor: 'col-resize' }),
  'cursor-row-resize': () => ({ cursor: 'row-resize' }),
  'cursor-n-resize': () => ({ cursor: 'n-resize' }),
  'cursor-e-resize': () => ({ cursor: 'e-resize' }),
  'cursor-s-resize': () => ({ cursor: 's-resize' }),
  'cursor-w-resize': () => ({ cursor: 'w-resize' }),
  'cursor-ne-resize': () => ({ cursor: 'ne-resize' }),
  'cursor-nw-resize': () => ({ cursor: 'nw-resize' }),
  'cursor-se-resize': () => ({ cursor: 'se-resize' }),
  'cursor-sw-resize': () => ({ cursor: 'sw-resize' }),
  'cursor-ew-resize': () => ({ cursor: 'ew-resize' }),
  'cursor-ns-resize': () => ({ cursor: 'ns-resize' }),
  'cursor-nesw-resize': () => ({ cursor: 'nesw-resize' }),
  'cursor-nwse-resize': () => ({ cursor: 'nwse-resize' }),
  'cursor-zoom-in': () => ({ cursor: 'zoom-in' }),
  'cursor-zoom-out': () => ({ cursor: 'zoom-out' }),
  'cursor-(<custom-property>)': ([value]) => ({ cursor: `var(${value})` }),
  'cursor-[<value>]': ([value]) => ({ cursor: `"${value}"` }),

  // field-sizing
  'field-sizing-fixed': () => ({ fieldSizing: 'fixed' }),
  'field-sizing-content': () => ({ fieldSizing: 'content' }),

  // pointer-events
  'pointer-events-auto': () => ({ pointerEvents: 'auto' }),
  'pointer-events-none': () => ({ pointerEvents: 'none' }),
  'resize-none': () => ({ resize: 'none' }),

  // resize
  resize: () => ({ resize: 'both' }),
  'resize-y': () => ({ resize: 'vertical' }),
  'resize-x': () => ({ resize: 'horizontal' }),

  // scroll-behavior
  'scroll-auto': () => ({ scrollBehavior: 'auto' }),
  'scroll-smooth': () => ({ scrollBehavior: 'smooth' }),

  // scroll-margin
  'scroll-m-<number>': ([value]) => ({ scrollMargin: `calc(var(--spacing) * ${value})` }),
  '-scroll-m-<number>': ([value]) => ({ scrollMargin: `calc(var(--spacing) * -${value})` }),
  'scroll-m-(<custom-property>)': ([value]) => ({ scrollMargin: `var(${value})` }),
  'scroll-m-[<value>]': ([value]) => ({ scrollMargin: `"${value}"` }),
  'scroll-mx-<number>': ([value]) => ({ scrollMarginInline: `calc(var(--spacing) * ${value})` }),
  '-scroll-mx-<number>': ([value]) => ({ scrollMarginInline: `calc(var(--spacing) * -${value})` }),
  'scroll-mx-(<custom-property>)': ([value]) => ({ scrollMarginInline: `var(${value})` }),
  'scroll-mx-[<value>]': ([value]) => ({ scrollMarginInline: `"${value}"` }),
  'scroll-my-<number>': ([value]) => ({ scrollMarginBlock: `calc(var(--spacing) * ${value})` }),
  '-scroll-my-<number>': ([value]) => ({ scrollMarginBlock: `calc(var(--spacing) * -${value})` }),
  'scroll-my-(<custom-property>)': ([value]) => ({ scrollMarginBlock: `var(${value})` }),
  'scroll-my-[<value>]': ([value]) => ({ scrollMarginBlock: `"${value}"` }),
  'scroll-ms-<number>': ([value]) => ({
    scrollMarginInlineStart: `calc(var(--spacing) * ${value})`,
  }),
  '-scroll-ms-<number>': ([value]) => ({
    scrollMarginInlineStart: `calc(var(--spacing) * -${value})`,
  }),
  'scroll-ms-(<custom-property>)': ([value]) => ({ scrollMarginInlineStart: `var(${value})` }),
  'scroll-ms-[<value>]': ([value]) => ({ scrollMarginInlineStart: `"${value}"` }),
  'scroll-me-<number>': ([value]) => ({ scrollMarginInlineEnd: `calc(var(--spacing) * ${value})` }),
  '-scroll-me-<number>': ([value]) => ({
    scrollMarginInlineEnd: `calc(var(--spacing) * -${value})`,
  }),
  'scroll-me-(<custom-property>)': ([value]) => ({ scrollMarginInlineEnd: `var(${value})` }),
  'scroll-me-[<value>]': ([value]) => ({ scrollMarginInlineEnd: `"${value}"` }),
  'scroll-mt-<number>': ([value]) => ({ scrollMarginTop: `calc(var(--spacing) * ${value})` }),
  '-scroll-mt-<number>': ([value]) => ({ scrollMarginTop: `calc(var(--spacing) * -${value})` }),
  'scroll-mt-(<custom-property>)': ([value]) => ({ scrollMarginTop: `var(${value})` }),
  'scroll-mt-[<value>]': ([value]) => ({ scrollMarginTop: `"${value}"` }),
  'scroll-mr-<number>': ([value]) => ({ scrollMarginRight: `calc(var(--spacing) * ${value})` }),
  '-scroll-mr-<number>': ([value]) => ({ scrollMarginRight: `calc(var(--spacing) * -${value})` }),
  'scroll-mr-(<custom-property>)': ([value]) => ({ scrollMarginRight: `var(${value})` }),
  'scroll-mr-[<value>]': ([value]) => ({ scrollMarginRight: `"${value}"` }),
  'scroll-mb-<number>': ([value]) => ({ scrollMarginBottom: `calc(var(--spacing) * ${value})` }),
  '-scroll-mb-<number>': ([value]) => ({ scrollMarginBottom: `calc(var(--spacing) * -${value})` }),
  'scroll-mb-(<custom-property>)': ([value]) => ({ scrollMarginBottom: `var(${value})` }),
  'scroll-mb-[<value>]': ([value]) => ({ scrollMarginBottom: `"${value}"` }),
  'scroll-ml-<number>': ([value]) => ({ scrollMarginLeft: `calc(var(--spacing) * ${value})` }),
  '-scroll-ml-<number>': ([value]) => ({ scrollMarginLeft: `calc(var(--spacing) * -${value})` }),
  'scroll-ml-(<custom-property>)': ([value]) => ({ scrollMarginLeft: `var(${value})` }),
  'scroll-ml-[<value>]': ([value]) => ({ scrollMarginLeft: `"${value}"` }),

  // scroll-padding
  'scroll-p-<number>': ([value]) => ({ scrollPadding: `calc(var(--spacing) * ${value})` }),
  '-scroll-p-<number>': ([value]) => ({ scrollPadding: `calc(var(--spacing) * -${value})` }),
  'scroll-p-(<custom-property>)': ([value]) => ({ scrollPadding: `var(${value})` }),
  'scroll-p-[<value>]': ([value]) => ({ scrollPadding: `"${value}"` }),
  'scroll-px-<number>': ([value]) => ({ scrollPaddingInline: `calc(var(--spacing) * ${value})` }),
  '-scroll-px-<number>': ([value]) => ({ scrollPaddingInline: `calc(var(--spacing) * -${value})` }),
  'scroll-px-(<custom-property>)': ([value]) => ({ scrollPaddingInline: `var(${value})` }),
  'scroll-px-[<value>]': ([value]) => ({ scrollPaddingInline: `"${value}"` }),
  'scroll-py-<number>': ([value]) => ({ scrollPaddingBlock: `calc(var(--spacing) * ${value})` }),
  '-scroll-py-<number>': ([value]) => ({ scrollPaddingBlock: `calc(var(--spacing) * -${value})` }),
  'scroll-py-(<custom-property>)': ([value]) => ({ scrollPaddingBlock: `var(${value})` }),
  'scroll-py-[<value>]': ([value]) => ({ scrollPaddingBlock: `"${value}"` }),
  'scroll-ps-<number>': ([value]) => ({
    scrollPaddingInlineStart: `calc(var(--spacing) * ${value})`,
  }),
  '-scroll-ps-<number>': ([value]) => ({
    scrollPaddingInlineStart: `calc(var(--spacing) * -${value})`,
  }),
  'scroll-ps-(<custom-property>)': ([value]) => ({ scrollPaddingInlineStart: `var(${value})` }),
  'scroll-ps-[<value>]': ([value]) => ({ scrollPaddingInlineStart: `"${value}"` }),
  'scroll-pe-<number>': ([value]) => ({
    scrollPaddingInlineEnd: `calc(var(--spacing) * ${value})`,
  }),
  '-scroll-pe-<number>': ([value]) => ({
    scrollPaddingInlineEnd: `calc(var(--spacing) * -${value})`,
  }),
  'scroll-pe-(<custom-property>)': ([value]) => ({ scrollPaddingInlineEnd: `var(${value})` }),
  'scroll-pe-[<value>]': ([value]) => ({ scrollPaddingInlineEnd: `"${value}"` }),
  'scroll-pt-<number>': ([value]) => ({ scrollPaddingTop: `calc(var(--spacing) * ${value})` }),
  '-scroll-pt-<number>': ([value]) => ({ scrollPaddingTop: `calc(var(--spacing) * -${value})` }),
  'scroll-pt-(<custom-property>)': ([value]) => ({ scrollPaddingTop: `var(${value})` }),
  'scroll-pt-[<value>]': ([value]) => ({ scrollPaddingTop: `"${value}"` }),
  'scroll-pr-<number>': ([value]) => ({ scrollPaddingRight: `calc(var(--spacing) * ${value})` }),
  '-scroll-pr-<number>': ([value]) => ({ scrollPaddingRight: `calc(var(--spacing) * -${value})` }),
  'scroll-pr-(<custom-property>)': ([value]) => ({ scrollPaddingRight: `var(${value})` }),
  'scroll-pr-[<value>]': ([value]) => ({ scrollPaddingRight: `"${value}"` }),
  'scroll-pb-<number>': ([value]) => ({ scrollPaddingBottom: `calc(var(--spacing) * ${value})` }),
  '-scroll-pb-<number>': ([value]) => ({ scrollPaddingBottom: `calc(var(--spacing) * -${value})` }),
  'scroll-pb-(<custom-property>)': ([value]) => ({ scrollPaddingBottom: `var(${value})` }),
  'scroll-pb-[<value>]': ([value]) => ({ scrollPaddingBottom: `"${value}"` }),
  'scroll-pl-<number>': ([value]) => ({ scrollPaddingLeft: `calc(var(--spacing) * ${value})` }),
  '-scroll-pl-<number>': ([value]) => ({ scrollPaddingLeft: `calc(var(--spacing) * -${value})` }),
  'scroll-pl-(<custom-property>)': ([value]) => ({ scrollPaddingLeft: `var(${value})` }),
  'scroll-pl-[<value>]': ([value]) => ({ scrollPaddingLeft: `"${value}"` }),

  // scroll-snap-align
  'snap-start': () => ({ scrollSnapAlign: 'start' }),
  'snap-end': () => ({ scrollSnapAlign: 'end' }),
  'snap-center': () => ({ scrollSnapAlign: 'center' }),
  'snap-align-none': () => ({ scrollSnapAlign: 'none' }),

  // scroll-snap-stop
  'snap-normal': () => ({ scrollSnapStop: 'normal' }),
  'snap-always': () => ({ scrollSnapStop: 'always' }),

  // scroll-snap-type
  'snap-none': () => ({ scrollSnapType: 'none' }),
  'snap-x': () => ({ scrollSnapType: 'x var(--tw-scroll-snap-strictness)' }),
  'snap-y': () => ({ scrollSnapType: 'y var(--tw-scroll-snap-strictness)' }),
  'snap-both': () => ({ scrollSnapType: 'both var(--tw-scroll-snap-strictness)' }),
  'snap-mandatory': () => ({ twScrollSnapStrictness: 'mandatory' }),
  'snap-proximity': () => ({ twScrollSnapStrictness: 'proximity' }),

  // touch-action
  'touch-auto': () => ({ touchAction: 'auto' }),
  'touch-none': () => ({ touchAction: 'none' }),
  'touch-pan-x': () => ({ touchAction: 'pan-x' }),
  'touch-pan-left': () => ({ touchAction: 'pan-left' }),
  'touch-pan-right': () => ({ touchAction: 'pan-right' }),
  'touch-pan-y': () => ({ touchAction: 'pan-y' }),
  'touch-pan-up': () => ({ touchAction: 'pan-up' }),
  'touch-pan-down': () => ({ touchAction: 'pan-down' }),
  'touch-pinch-zoom': () => ({ touchAction: 'pinch-zoom' }),
  'touch-manipulation': () => ({ touchAction: 'manipulation' }),

  // user-select
  'select-none': () => ({ userSelect: 'none' }),
  'select-text': () => ({ userSelect: 'text' }),
  'select-all': () => ({ userSelect: 'all' }),
  'select-auto': () => ({ userSelect: 'auto' }),

  // will-change
  'will-change-auto': () => ({ willChange: 'auto' }),
  'will-change-scroll': () => ({ willChange: 'scroll-position' }),
  'will-change-contents': () => ({ willChange: 'contents' }),
  'will-change-transform': () => ({ willChange: 'transform' }),
  'will-change-<custom-property>': ([value]) => ({ willChange: `var(${value})` }),
  'will-change-[<value>]': ([value]) => ({ willChange: `"${value}"` }),

  // SVG

  // fill
  'fill-none': () => ({ fill: 'none' }),
  'fill-inherit': () => ({ fill: 'inherit' }),
  'fill-current': () => ({ fill: 'currentColor' }),
  'fill-transparent': () => ({ fill: 'transparent' }),
  'fill-black': () => ({ fill: 'var(--color-black)' }),
  'fill-white': () => ({ fill: 'var(--color-white)' }),
  'fill-red-50': () => ({ fill: 'var(--color-red-50)' }),
  'fill-red-100': () => ({ fill: 'var(--color-red-100)' }),
  'fill-red-200': () => ({ fill: 'var(--color-red-200)' }),
  'fill-red-300': () => ({ fill: 'var(--color-red-300)' }),
  'fill-red-400': () => ({ fill: 'var(--color-red-400)' }),
  'fill-red-500': () => ({ fill: 'var(--color-red-500)' }),
  'fill-red-600': () => ({ fill: 'var(--color-red-600)' }),
  'fill-red-700': () => ({ fill: 'var(--color-red-700)' }),
  'fill-red-800': () => ({ fill: 'var(--color-red-800)' }),
  'fill-red-900': () => ({ fill: 'var(--color-red-900)' }),
  'fill-red-950': () => ({ fill: 'var(--color-red-950)' }),
  'fill-orange-50': () => ({ fill: 'var(--color-orange-50)' }),
  'fill-orange-100': () => ({ fill: 'var(--color-orange-100)' }),
  'fill-orange-200': () => ({ fill: 'var(--color-orange-200)' }),
  'fill-orange-300': () => ({ fill: 'var(--color-orange-300)' }),
  'fill-orange-400': () => ({ fill: 'var(--color-orange-400)' }),
  'fill-orange-500': () => ({ fill: 'var(--color-orange-500)' }),
  'fill-orange-600': () => ({ fill: 'var(--color-orange-600)' }),
  'fill-orange-700': () => ({ fill: 'var(--color-orange-700)' }),
  'fill-orange-800': () => ({ fill: 'var(--color-orange-800)' }),
  'fill-orange-900': () => ({ fill: 'var(--color-orange-900)' }),
  'fill-orange-950': () => ({ fill: 'var(--color-orange-950)' }),
  'fill-amber-50': () => ({ fill: 'var(--color-amber-50)' }),
  'fill-amber-100': () => ({ fill: 'var(--color-amber-100)' }),
  'fill-amber-200': () => ({ fill: 'var(--color-amber-200)' }),
  'fill-amber-300': () => ({ fill: 'var(--color-amber-300)' }),
  'fill-amber-400': () => ({ fill: 'var(--color-amber-400)' }),
  'fill-amber-500': () => ({ fill: 'var(--color-amber-500)' }),
  'fill-amber-600': () => ({ fill: 'var(--color-amber-600)' }),
  'fill-amber-700': () => ({ fill: 'var(--color-amber-700)' }),
  'fill-amber-800': () => ({ fill: 'var(--color-amber-800)' }),
  'fill-amber-900': () => ({ fill: 'var(--color-amber-900)' }),
  'fill-amber-950': () => ({ fill: 'var(--color-amber-950)' }),
  'fill-yellow-50': () => ({ fill: 'var(--color-yellow-50)' }),
  'fill-yellow-100': () => ({ fill: 'var(--color-yellow-100)' }),
  'fill-yellow-200': () => ({ fill: 'var(--color-yellow-200)' }),
  'fill-yellow-300': () => ({ fill: 'var(--color-yellow-300)' }),
  'fill-yellow-400': () => ({ fill: 'var(--color-yellow-400)' }),
  'fill-yellow-500': () => ({ fill: 'var(--color-yellow-500)' }),
  'fill-yellow-600': () => ({ fill: 'var(--color-yellow-600)' }),
  'fill-yellow-700': () => ({ fill: 'var(--color-yellow-700)' }),
  'fill-yellow-800': () => ({ fill: 'var(--color-yellow-800)' }),
  'fill-yellow-900': () => ({ fill: 'var(--color-yellow-900)' }),
  'fill-yellow-950': () => ({ fill: 'var(--color-yellow-950)' }),
  'fill-lime-50': () => ({ fill: 'var(--color-lime-50)' }),
  'fill-lime-100': () => ({ fill: 'var(--color-lime-100)' }),
  'fill-lime-200': () => ({ fill: 'var(--color-lime-200)' }),
  'fill-lime-300': () => ({ fill: 'var(--color-lime-300)' }),
  'fill-lime-400': () => ({ fill: 'var(--color-lime-400)' }),
  'fill-lime-500': () => ({ fill: 'var(--color-lime-500)' }),
  'fill-lime-600': () => ({ fill: 'var(--color-lime-600)' }),
  'fill-lime-700': () => ({ fill: 'var(--color-lime-700)' }),
  'fill-lime-800': () => ({ fill: 'var(--color-lime-800)' }),
  'fill-lime-900': () => ({ fill: 'var(--color-lime-900)' }),
  'fill-lime-950': () => ({ fill: 'var(--color-lime-950)' }),
  'fill-green-50': () => ({ fill: 'var(--color-green-50)' }),
  'fill-green-100': () => ({ fill: 'var(--color-green-100)' }),
  'fill-green-200': () => ({ fill: 'var(--color-green-200)' }),
  'fill-green-300': () => ({ fill: 'var(--color-green-300)' }),
  'fill-green-400': () => ({ fill: 'var(--color-green-400)' }),
  'fill-green-500': () => ({ fill: 'var(--color-green-500)' }),
  'fill-green-600': () => ({ fill: 'var(--color-green-600)' }),
  'fill-green-700': () => ({ fill: 'var(--color-green-700)' }),
  'fill-green-800': () => ({ fill: 'var(--color-green-800)' }),
  'fill-green-900': () => ({ fill: 'var(--color-green-900)' }),
  'fill-green-950': () => ({ fill: 'var(--color-green-950)' }),
  'fill-emerald-50': () => ({ fill: 'var(--color-emerald-50)' }),
  'fill-emerald-100': () => ({ fill: 'var(--color-emerald-100)' }),
  'fill-emerald-200': () => ({ fill: 'var(--color-emerald-200)' }),
  'fill-emerald-300': () => ({ fill: 'var(--color-emerald-300)' }),
  'fill-emerald-400': () => ({ fill: 'var(--color-emerald-400)' }),
  'fill-emerald-500': () => ({ fill: 'var(--color-emerald-500)' }),
  'fill-emerald-600': () => ({ fill: 'var(--color-emerald-600)' }),
  'fill-emerald-700': () => ({ fill: 'var(--color-emerald-700)' }),
  'fill-emerald-800': () => ({ fill: 'var(--color-emerald-800)' }),
  'fill-emerald-900': () => ({ fill: 'var(--color-emerald-900)' }),
  'fill-emerald-950': () => ({ fill: 'var(--color-emerald-950)' }),
  'fill-teal-50': () => ({ fill: 'var(--color-teal-50)' }),
  'fill-teal-100': () => ({ fill: 'var(--color-teal-100)' }),
  'fill-teal-200': () => ({ fill: 'var(--color-teal-200)' }),
  'fill-teal-300': () => ({ fill: 'var(--color-teal-300)' }),
  'fill-teal-400': () => ({ fill: 'var(--color-teal-400)' }),
  'fill-teal-500': () => ({ fill: 'var(--color-teal-500)' }),
  'fill-teal-600': () => ({ fill: 'var(--color-teal-600)' }),
  'fill-teal-700': () => ({ fill: 'var(--color-teal-700)' }),
  'fill-teal-800': () => ({ fill: 'var(--color-teal-800)' }),
  'fill-teal-900': () => ({ fill: 'var(--color-teal-900)' }),
  'fill-teal-950': () => ({ fill: 'var(--color-teal-950)' }),
  'fill-cyan-50': () => ({ fill: 'var(--color-cyan-50)' }),
  'fill-cyan-100': () => ({ fill: 'var(--color-cyan-100)' }),
  'fill-cyan-200': () => ({ fill: 'var(--color-cyan-200)' }),
  'fill-cyan-300': () => ({ fill: 'var(--color-cyan-300)' }),
  'fill-cyan-400': () => ({ fill: 'var(--color-cyan-400)' }),
  'fill-cyan-500': () => ({ fill: 'var(--color-cyan-500)' }),
  'fill-cyan-600': () => ({ fill: 'var(--color-cyan-600)' }),
  'fill-cyan-700': () => ({ fill: 'var(--color-cyan-700)' }),
  'fill-cyan-800': () => ({ fill: 'var(--color-cyan-800)' }),
  'fill-cyan-900': () => ({ fill: 'var(--color-cyan-900)' }),
  'fill-cyan-950': () => ({ fill: 'var(--color-cyan-950)' }),
  'fill-sky-50': () => ({ fill: 'var(--color-sky-50)' }),
  'fill-sky-100': () => ({ fill: 'var(--color-sky-100)' }),
  'fill-sky-200': () => ({ fill: 'var(--color-sky-200)' }),
  'fill-sky-300': () => ({ fill: 'var(--color-sky-300)' }),
  'fill-sky-400': () => ({ fill: 'var(--color-sky-400)' }),
  'fill-sky-500': () => ({ fill: 'var(--color-sky-500)' }),
  'fill-sky-600': () => ({ fill: 'var(--color-sky-600)' }),
  'fill-sky-700': () => ({ fill: 'var(--color-sky-700)' }),
  'fill-sky-800': () => ({ fill: 'var(--color-sky-800)' }),
  'fill-sky-900': () => ({ fill: 'var(--color-sky-900)' }),
  'fill-sky-950': () => ({ fill: 'var(--color-sky-950)' }),
  'fill-blue-50': () => ({ fill: 'var(--color-blue-50)' }),
  'fill-blue-100': () => ({ fill: 'var(--color-blue-100)' }),
  'fill-blue-200': () => ({ fill: 'var(--color-blue-200)' }),
  'fill-blue-300': () => ({ fill: 'var(--color-blue-300)' }),
  'fill-blue-400': () => ({ fill: 'var(--color-blue-400)' }),
  'fill-blue-500': () => ({ fill: 'var(--color-blue-500)' }),
  'fill-blue-600': () => ({ fill: 'var(--color-blue-600)' }),
  'fill-blue-700': () => ({ fill: 'var(--color-blue-700)' }),
  'fill-blue-800': () => ({ fill: 'var(--color-blue-800)' }),
  'fill-blue-900': () => ({ fill: 'var(--color-blue-900)' }),
  'fill-blue-950': () => ({ fill: 'var(--color-blue-950)' }),
  'fill-indigo-50': () => ({ fill: 'var(--color-indigo-50)' }),
  'fill-indigo-100': () => ({ fill: 'var(--color-indigo-100)' }),
  'fill-indigo-200': () => ({ fill: 'var(--color-indigo-200)' }),
  'fill-indigo-300': () => ({ fill: 'var(--color-indigo-300)' }),
  'fill-indigo-400': () => ({ fill: 'var(--color-indigo-400)' }),
  'fill-indigo-500': () => ({ fill: 'var(--color-indigo-500)' }),
  'fill-indigo-600': () => ({ fill: 'var(--color-indigo-600)' }),
  'fill-indigo-700': () => ({ fill: 'var(--color-indigo-700)' }),
  'fill-indigo-800': () => ({ fill: 'var(--color-indigo-800)' }),
  'fill-indigo-900': () => ({ fill: 'var(--color-indigo-900)' }),
  'fill-indigo-950': () => ({ fill: 'var(--color-indigo-950)' }),
  'fill-violet-50': () => ({ fill: 'var(--color-violet-50)' }),
  'fill-violet-100': () => ({ fill: 'var(--color-violet-100)' }),
  'fill-violet-200': () => ({ fill: 'var(--color-violet-200)' }),
  'fill-violet-300': () => ({ fill: 'var(--color-violet-300)' }),
  'fill-violet-400': () => ({ fill: 'var(--color-violet-400)' }),
  'fill-violet-500': () => ({ fill: 'var(--color-violet-500)' }),
  'fill-violet-600': () => ({ fill: 'var(--color-violet-600)' }),
  'fill-violet-700': () => ({ fill: 'var(--color-violet-700)' }),
  'fill-violet-800': () => ({ fill: 'var(--color-violet-800)' }),
  'fill-violet-900': () => ({ fill: 'var(--color-violet-900)' }),
  'fill-violet-950': () => ({ fill: 'var(--color-violet-950)' }),
  'fill-purple-50': () => ({ fill: 'var(--color-purple-50)' }),
  'fill-purple-100': () => ({ fill: 'var(--color-purple-100)' }),
  'fill-purple-200': () => ({ fill: 'var(--color-purple-200)' }),
  'fill-purple-300': () => ({ fill: 'var(--color-purple-300)' }),
  'fill-purple-400': () => ({ fill: 'var(--color-purple-400)' }),
  'fill-purple-500': () => ({ fill: 'var(--color-purple-500)' }),
  'fill-purple-600': () => ({ fill: 'var(--color-purple-600)' }),
  'fill-purple-700': () => ({ fill: 'var(--color-purple-700)' }),
  'fill-purple-800': () => ({ fill: 'var(--color-purple-800)' }),
  'fill-purple-900': () => ({ fill: 'var(--color-purple-900)' }),
  'fill-purple-950': () => ({ fill: 'var(--color-purple-950)' }),
  'fill-fuchsia-50': () => ({ fill: 'var(--color-fuchsia-50)' }),
  'fill-fuchsia-100': () => ({ fill: 'var(--color-fuchsia-100)' }),
  'fill-fuchsia-200': () => ({ fill: 'var(--color-fuchsia-200)' }),
  'fill-fuchsia-300': () => ({ fill: 'var(--color-fuchsia-300)' }),
  'fill-fuchsia-400': () => ({ fill: 'var(--color-fuchsia-400)' }),
  'fill-fuchsia-500': () => ({ fill: 'var(--color-fuchsia-500)' }),
  'fill-fuchsia-600': () => ({ fill: 'var(--color-fuchsia-600)' }),
  'fill-fuchsia-700': () => ({ fill: 'var(--color-fuchsia-700)' }),
  'fill-fuchsia-800': () => ({ fill: 'var(--color-fuchsia-800)' }),
  'fill-fuchsia-900': () => ({ fill: 'var(--color-fuchsia-900)' }),
  'fill-fuchsia-950': () => ({ fill: 'var(--color-fuchsia-950)' }),
  'fill-pink-50': () => ({ fill: 'var(--color-pink-50)' }),
  'fill-pink-100': () => ({ fill: 'var(--color-pink-100)' }),
  'fill-pink-200': () => ({ fill: 'var(--color-pink-200)' }),
  'fill-pink-300': () => ({ fill: 'var(--color-pink-300)' }),
  'fill-pink-400': () => ({ fill: 'var(--color-pink-400)' }),
  'fill-pink-500': () => ({ fill: 'var(--color-pink-500)' }),
  'fill-pink-600': () => ({ fill: 'var(--color-pink-600)' }),
  'fill-pink-700': () => ({ fill: 'var(--color-pink-700)' }),
  'fill-pink-800': () => ({ fill: 'var(--color-pink-800)' }),
  'fill-pink-900': () => ({ fill: 'var(--color-pink-900)' }),
  'fill-pink-950': () => ({ fill: 'var(--color-pink-950)' }),
  'fill-rose-50': () => ({ fill: 'var(--color-rose-50)' }),
  'fill-rose-100': () => ({ fill: 'var(--color-rose-100)' }),
  'fill-rose-200': () => ({ fill: 'var(--color-rose-200)' }),
  'fill-rose-300': () => ({ fill: 'var(--color-rose-300)' }),
  'fill-rose-400': () => ({ fill: 'var(--color-rose-400)' }),
  'fill-rose-500': () => ({ fill: 'var(--color-rose-500)' }),
  'fill-rose-600': () => ({ fill: 'var(--color-rose-600)' }),
  'fill-rose-700': () => ({ fill: 'var(--color-rose-700)' }),
  'fill-rose-800': () => ({ fill: 'var(--color-rose-800)' }),
  'fill-rose-900': () => ({ fill: 'var(--color-rose-900)' }),
  'fill-rose-950': () => ({ fill: 'var(--color-rose-950)' }),
  'fill-slate-50': () => ({ fill: 'var(--color-slate-50)' }),
  'fill-slate-100': () => ({ fill: 'var(--color-slate-100)' }),
  'fill-slate-200': () => ({ fill: 'var(--color-slate-200)' }),
  'fill-slate-300': () => ({ fill: 'var(--color-slate-300)' }),
  'fill-slate-400': () => ({ fill: 'var(--color-slate-400)' }),
  'fill-slate-500': () => ({ fill: 'var(--color-slate-500)' }),
  'fill-slate-600': () => ({ fill: 'var(--color-slate-600)' }),
  'fill-slate-700': () => ({ fill: 'var(--color-slate-700)' }),
  'fill-slate-800': () => ({ fill: 'var(--color-slate-800)' }),
  'fill-slate-900': () => ({ fill: 'var(--color-slate-900)' }),
  'fill-slate-950': () => ({ fill: 'var(--color-slate-950)' }),
  'fill-gray-50': () => ({ fill: 'var(--color-gray-50)' }),
  'fill-gray-100': () => ({ fill: 'var(--color-gray-100)' }),
  'fill-gray-200': () => ({ fill: 'var(--color-gray-200)' }),
  'fill-gray-300': () => ({ fill: 'var(--color-gray-300)' }),
  'fill-gray-400': () => ({ fill: 'var(--color-gray-400)' }),
  'fill-gray-500': () => ({ fill: 'var(--color-gray-500)' }),
  'fill-gray-600': () => ({ fill: 'var(--color-gray-600)' }),
  'fill-gray-700': () => ({ fill: 'var(--color-gray-700)' }),
  'fill-gray-800': () => ({ fill: 'var(--color-gray-800)' }),
  'fill-gray-900': () => ({ fill: 'var(--color-gray-900)' }),
  'fill-gray-950': () => ({ fill: 'var(--color-gray-950)' }),
  'fill-zinc-50': () => ({ fill: 'var(--color-zinc-50)' }),
  'fill-zinc-100': () => ({ fill: 'var(--color-zinc-100)' }),
  'fill-zinc-200': () => ({ fill: 'var(--color-zinc-200)' }),
  'fill-zinc-300': () => ({ fill: 'var(--color-zinc-300)' }),
  'fill-zinc-400': () => ({ fill: 'var(--color-zinc-400)' }),
  'fill-zinc-500': () => ({ fill: 'var(--color-zinc-500)' }),
  'fill-zinc-600': () => ({ fill: 'var(--color-zinc-600)' }),
  'fill-zinc-700': () => ({ fill: 'var(--color-zinc-700)' }),
  'fill-zinc-800': () => ({ fill: 'var(--color-zinc-800)' }),
  'fill-zinc-900': () => ({ fill: 'var(--color-zinc-900)' }),
  'fill-zinc-950': () => ({ fill: 'var(--color-zinc-950)' }),
  'fill-neutral-50': () => ({ fill: 'var(--color-neutral-50)' }),
  'fill-neutral-100': () => ({ fill: 'var(--color-neutral-100)' }),
  'fill-neutral-200': () => ({ fill: 'var(--color-neutral-200)' }),
  'fill-neutral-300': () => ({ fill: 'var(--color-neutral-300)' }),
  'fill-neutral-400': () => ({ fill: 'var(--color-neutral-400)' }),
  'fill-neutral-500': () => ({ fill: 'var(--color-neutral-500)' }),
  'fill-neutral-600': () => ({ fill: 'var(--color-neutral-600)' }),
  'fill-neutral-700': () => ({ fill: 'var(--color-neutral-700)' }),
  'fill-neutral-800': () => ({ fill: 'var(--color-neutral-800)' }),
  'fill-neutral-900': () => ({ fill: 'var(--color-neutral-900)' }),
  'fill-neutral-950': () => ({ fill: 'var(--color-neutral-950)' }),
  'fill-stone-50': () => ({ fill: 'var(--color-stone-50)' }),
  'fill-stone-100': () => ({ fill: 'var(--color-stone-100)' }),
  'fill-stone-200': () => ({ fill: 'var(--color-stone-200)' }),
  'fill-stone-300': () => ({ fill: 'var(--color-stone-300)' }),
  'fill-stone-400': () => ({ fill: 'var(--color-stone-400)' }),
  'fill-stone-500': () => ({ fill: 'var(--color-stone-500)' }),
  'fill-stone-600': () => ({ fill: 'var(--color-stone-600)' }),
  'fill-stone-700': () => ({ fill: 'var(--color-stone-700)' }),
  'fill-stone-800': () => ({ fill: 'var(--color-stone-800)' }),
  'fill-stone-900': () => ({ fill: 'var(--color-stone-900)' }),
  'fill-stone-950': () => ({ fill: 'var(--color-stone-950)' }),
  'fill-(<custom-property>)': ([value]) => ({ fill: `var(${value})` }),
  'fill-[<color>]': ([value]) => ({ fill: `"${value}"` }),

  // stroke
  'stroke-none': () => ({ stroke: 'none' }),
  'stroke-inherit': () => ({ stroke: 'inherit' }),
  'stroke-current': () => ({ stroke: 'currentColor' }),
  'stroke-transparent': () => ({ stroke: 'transparent' }),
  'stroke-black': () => ({ stroke: 'var(--color-black)' }),
  'stroke-white': () => ({ stroke: 'var(--color-white)' }),
  'stroke-red-50': () => ({ stroke: 'var(--color-red-50)' }),
  'stroke-red-100': () => ({ stroke: 'var(--color-red-100)' }),
  'stroke-red-200': () => ({ stroke: 'var(--color-red-200)' }),
  'stroke-red-300': () => ({ stroke: 'var(--color-red-300)' }),
  'stroke-red-400': () => ({ stroke: 'var(--color-red-400)' }),
  'stroke-red-500': () => ({ stroke: 'var(--color-red-500)' }),
  'stroke-red-600': () => ({ stroke: 'var(--color-red-600)' }),
  'stroke-red-700': () => ({ stroke: 'var(--color-red-700)' }),
  'stroke-red-800': () => ({ stroke: 'var(--color-red-800)' }),
  'stroke-red-900': () => ({ stroke: 'var(--color-red-900)' }),
  'stroke-red-950': () => ({ stroke: 'var(--color-red-950)' }),
  'stroke-orange-50': () => ({ stroke: 'var(--color-orange-50)' }),
  'stroke-orange-100': () => ({ stroke: 'var(--color-orange-100)' }),
  'stroke-orange-200': () => ({ stroke: 'var(--color-orange-200)' }),
  'stroke-orange-300': () => ({ stroke: 'var(--color-orange-300)' }),
  'stroke-orange-400': () => ({ stroke: 'var(--color-orange-400)' }),
  'stroke-orange-500': () => ({ stroke: 'var(--color-orange-500)' }),
  'stroke-orange-600': () => ({ stroke: 'var(--color-orange-600)' }),
  'stroke-orange-700': () => ({ stroke: 'var(--color-orange-700)' }),
  'stroke-orange-800': () => ({ stroke: 'var(--color-orange-800)' }),
  'stroke-orange-900': () => ({ stroke: 'var(--color-orange-900)' }),
  'stroke-orange-950': () => ({ stroke: 'var(--color-orange-950)' }),
  'stroke-amber-50': () => ({ stroke: 'var(--color-amber-50)' }),
  'stroke-amber-100': () => ({ stroke: 'var(--color-amber-100)' }),
  'stroke-amber-200': () => ({ stroke: 'var(--color-amber-200)' }),
  'stroke-amber-300': () => ({ stroke: 'var(--color-amber-300)' }),
  'stroke-amber-400': () => ({ stroke: 'var(--color-amber-400)' }),
  'stroke-amber-500': () => ({ stroke: 'var(--color-amber-500)' }),
  'stroke-amber-600': () => ({ stroke: 'var(--color-amber-600)' }),
  'stroke-amber-700': () => ({ stroke: 'var(--color-amber-700)' }),
  'stroke-amber-800': () => ({ stroke: 'var(--color-amber-800)' }),
  'stroke-amber-900': () => ({ stroke: 'var(--color-amber-900)' }),
  'stroke-amber-950': () => ({ stroke: 'var(--color-amber-950)' }),
  'stroke-yellow-50': () => ({ stroke: 'var(--color-yellow-50)' }),
  'stroke-yellow-100': () => ({ stroke: 'var(--color-yellow-100)' }),
  'stroke-yellow-200': () => ({ stroke: 'var(--color-yellow-200)' }),
  'stroke-yellow-300': () => ({ stroke: 'var(--color-yellow-300)' }),
  'stroke-yellow-400': () => ({ stroke: 'var(--color-yellow-400)' }),
  'stroke-yellow-500': () => ({ stroke: 'var(--color-yellow-500)' }),
  'stroke-yellow-600': () => ({ stroke: 'var(--color-yellow-600)' }),
  'stroke-yellow-700': () => ({ stroke: 'var(--color-yellow-700)' }),
  'stroke-yellow-800': () => ({ stroke: 'var(--color-yellow-800)' }),
  'stroke-yellow-900': () => ({ stroke: 'var(--color-yellow-900)' }),
  'stroke-yellow-950': () => ({ stroke: 'var(--color-yellow-950)' }),
  'stroke-lime-50': () => ({ stroke: 'var(--color-lime-50)' }),
  'stroke-lime-100': () => ({ stroke: 'var(--color-lime-100)' }),
  'stroke-lime-200': () => ({ stroke: 'var(--color-lime-200)' }),
  'stroke-lime-300': () => ({ stroke: 'var(--color-lime-300)' }),
  'stroke-lime-400': () => ({ stroke: 'var(--color-lime-400)' }),
  'stroke-lime-500': () => ({ stroke: 'var(--color-lime-500)' }),
  'stroke-lime-600': () => ({ stroke: 'var(--color-lime-600)' }),
  'stroke-lime-700': () => ({ stroke: 'var(--color-lime-700)' }),
  'stroke-lime-800': () => ({ stroke: 'var(--color-lime-800)' }),
  'stroke-lime-900': () => ({ stroke: 'var(--color-lime-900)' }),
  'stroke-lime-950': () => ({ stroke: 'var(--color-lime-950)' }),
  'stroke-green-50': () => ({ stroke: 'var(--color-green-50)' }),
  'stroke-green-100': () => ({ stroke: 'var(--color-green-100)' }),
  'stroke-green-200': () => ({ stroke: 'var(--color-green-200)' }),
  'stroke-green-300': () => ({ stroke: 'var(--color-green-300)' }),
  'stroke-green-400': () => ({ stroke: 'var(--color-green-400)' }),
  'stroke-green-500': () => ({ stroke: 'var(--color-green-500)' }),
  'stroke-green-600': () => ({ stroke: 'var(--color-green-600)' }),
  'stroke-green-700': () => ({ stroke: 'var(--color-green-700)' }),
  'stroke-green-800': () => ({ stroke: 'var(--color-green-800)' }),
  'stroke-green-900': () => ({ stroke: 'var(--color-green-900)' }),
  'stroke-green-950': () => ({ stroke: 'var(--color-green-950)' }),
  'stroke-emerald-50': () => ({ stroke: 'var(--color-emerald-50)' }),
  'stroke-emerald-100': () => ({ stroke: 'var(--color-emerald-100)' }),
  'stroke-emerald-200': () => ({ stroke: 'var(--color-emerald-200)' }),
  'stroke-emerald-300': () => ({ stroke: 'var(--color-emerald-300)' }),
  'stroke-emerald-400': () => ({ stroke: 'var(--color-emerald-400)' }),
  'stroke-emerald-500': () => ({ stroke: 'var(--color-emerald-500)' }),
  'stroke-emerald-600': () => ({ stroke: 'var(--color-emerald-600)' }),
  'stroke-emerald-700': () => ({ stroke: 'var(--color-emerald-700)' }),
  'stroke-emerald-800': () => ({ stroke: 'var(--color-emerald-800)' }),
  'stroke-emerald-900': () => ({ stroke: 'var(--color-emerald-900)' }),
  'stroke-emerald-950': () => ({ stroke: 'var(--color-emerald-950)' }),
  'stroke-teal-50': () => ({ stroke: 'var(--color-teal-50)' }),
  'stroke-teal-100': () => ({ stroke: 'var(--color-teal-100)' }),
  'stroke-teal-200': () => ({ stroke: 'var(--color-teal-200)' }),
  'stroke-teal-300': () => ({ stroke: 'var(--color-teal-300)' }),
  'stroke-teal-400': () => ({ stroke: 'var(--color-teal-400)' }),
  'stroke-teal-500': () => ({ stroke: 'var(--color-teal-500)' }),
  'stroke-teal-600': () => ({ stroke: 'var(--color-teal-600)' }),
  'stroke-teal-700': () => ({ stroke: 'var(--color-teal-700)' }),
  'stroke-teal-800': () => ({ stroke: 'var(--color-teal-800)' }),
  'stroke-teal-900': () => ({ stroke: 'var(--color-teal-900)' }),
  'stroke-teal-950': () => ({ stroke: 'var(--color-teal-950)' }),
  'stroke-cyan-50': () => ({ stroke: 'var(--color-cyan-50)' }),
  'stroke-cyan-100': () => ({ stroke: 'var(--color-cyan-100)' }),
  'stroke-cyan-200': () => ({ stroke: 'var(--color-cyan-200)' }),
  'stroke-cyan-300': () => ({ stroke: 'var(--color-cyan-300)' }),
  'stroke-cyan-400': () => ({ stroke: 'var(--color-cyan-400)' }),
  'stroke-cyan-500': () => ({ stroke: 'var(--color-cyan-500)' }),
  'stroke-cyan-600': () => ({ stroke: 'var(--color-cyan-600)' }),
  'stroke-cyan-700': () => ({ stroke: 'var(--color-cyan-700)' }),
  'stroke-cyan-800': () => ({ stroke: 'var(--color-cyan-800)' }),
  'stroke-cyan-900': () => ({ stroke: 'var(--color-cyan-900)' }),
  'stroke-cyan-950': () => ({ stroke: 'var(--color-cyan-950)' }),
  'stroke-sky-50': () => ({ stroke: 'var(--color-sky-50)' }),
  'stroke-sky-100': () => ({ stroke: 'var(--color-sky-100)' }),
  'stroke-sky-200': () => ({ stroke: 'var(--color-sky-200)' }),
  'stroke-sky-300': () => ({ stroke: 'var(--color-sky-300)' }),
  'stroke-sky-400': () => ({ stroke: 'var(--color-sky-400)' }),
  'stroke-sky-500': () => ({ stroke: 'var(--color-sky-500)' }),
  'stroke-sky-600': () => ({ stroke: 'var(--color-sky-600)' }),
  'stroke-sky-700': () => ({ stroke: 'var(--color-sky-700)' }),
  'stroke-sky-800': () => ({ stroke: 'var(--color-sky-800)' }),
  'stroke-sky-900': () => ({ stroke: 'var(--color-sky-900)' }),
  'stroke-sky-950': () => ({ stroke: 'var(--color-sky-950)' }),
  'stroke-blue-50': () => ({ stroke: 'var(--color-blue-50)' }),
  'stroke-blue-100': () => ({ stroke: 'var(--color-blue-100)' }),
  'stroke-blue-200': () => ({ stroke: 'var(--color-blue-200)' }),
  'stroke-blue-300': () => ({ stroke: 'var(--color-blue-300)' }),
  'stroke-blue-400': () => ({ stroke: 'var(--color-blue-400)' }),
  'stroke-blue-500': () => ({ stroke: 'var(--color-blue-500)' }),
  'stroke-blue-600': () => ({ stroke: 'var(--color-blue-600)' }),
  'stroke-blue-700': () => ({ stroke: 'var(--color-blue-700)' }),
  'stroke-blue-800': () => ({ stroke: 'var(--color-blue-800)' }),
  'stroke-blue-900': () => ({ stroke: 'var(--color-blue-900)' }),
  'stroke-blue-950': () => ({ stroke: 'var(--color-blue-950)' }),
  'stroke-indigo-50': () => ({ stroke: 'var(--color-indigo-50)' }),
  'stroke-indigo-100': () => ({ stroke: 'var(--color-indigo-100)' }),
  'stroke-indigo-200': () => ({ stroke: 'var(--color-indigo-200)' }),
  'stroke-indigo-300': () => ({ stroke: 'var(--color-indigo-300)' }),
  'stroke-indigo-400': () => ({ stroke: 'var(--color-indigo-400)' }),
  'stroke-indigo-500': () => ({ stroke: 'var(--color-indigo-500)' }),
  'stroke-indigo-600': () => ({ stroke: 'var(--color-indigo-600)' }),
  'stroke-indigo-700': () => ({ stroke: 'var(--color-indigo-700)' }),
  'stroke-indigo-800': () => ({ stroke: 'var(--color-indigo-800)' }),
  'stroke-indigo-900': () => ({ stroke: 'var(--color-indigo-900)' }),
  'stroke-indigo-950': () => ({ stroke: 'var(--color-indigo-950)' }),
  'stroke-violet-50': () => ({ stroke: 'var(--color-violet-50)' }),
  'stroke-violet-100': () => ({ stroke: 'var(--color-violet-100)' }),
  'stroke-violet-200': () => ({ stroke: 'var(--color-violet-200)' }),
  'stroke-violet-300': () => ({ stroke: 'var(--color-violet-300)' }),
  'stroke-violet-400': () => ({ stroke: 'var(--color-violet-400)' }),
  'stroke-violet-500': () => ({ stroke: 'var(--color-violet-500)' }),
  'stroke-violet-600': () => ({ stroke: 'var(--color-violet-600)' }),
  'stroke-violet-700': () => ({ stroke: 'var(--color-violet-700)' }),
  'stroke-violet-800': () => ({ stroke: 'var(--color-violet-800)' }),
  'stroke-violet-900': () => ({ stroke: 'var(--color-violet-900)' }),
  'stroke-violet-950': () => ({ stroke: 'var(--color-violet-950)' }),
  'stroke-purple-50': () => ({ stroke: 'var(--color-purple-50)' }),
  'stroke-purple-100': () => ({ stroke: 'var(--color-purple-100)' }),
  'stroke-purple-200': () => ({ stroke: 'var(--color-purple-200)' }),
  'stroke-purple-300': () => ({ stroke: 'var(--color-purple-300)' }),
  'stroke-purple-400': () => ({ stroke: 'var(--color-purple-400)' }),
  'stroke-purple-500': () => ({ stroke: 'var(--color-purple-500)' }),
  'stroke-purple-600': () => ({ stroke: 'var(--color-purple-600)' }),
  'stroke-purple-700': () => ({ stroke: 'var(--color-purple-700)' }),
  'stroke-purple-800': () => ({ stroke: 'var(--color-purple-800)' }),
  'stroke-purple-900': () => ({ stroke: 'var(--color-purple-900)' }),
  'stroke-purple-950': () => ({ stroke: 'var(--color-purple-950)' }),
  'stroke-fuchsia-50': () => ({ stroke: 'var(--color-fuchsia-50)' }),
  'stroke-fuchsia-100': () => ({ stroke: 'var(--color-fuchsia-100)' }),
  'stroke-fuchsia-200': () => ({ stroke: 'var(--color-fuchsia-200)' }),
  'stroke-fuchsia-300': () => ({ stroke: 'var(--color-fuchsia-300)' }),
  'stroke-fuchsia-400': () => ({ stroke: 'var(--color-fuchsia-400)' }),
  'stroke-fuchsia-500': () => ({ stroke: 'var(--color-fuchsia-500)' }),
  'stroke-fuchsia-600': () => ({ stroke: 'var(--color-fuchsia-600)' }),
  'stroke-fuchsia-700': () => ({ stroke: 'var(--color-fuchsia-700)' }),
  'stroke-fuchsia-800': () => ({ stroke: 'var(--color-fuchsia-800)' }),
  'stroke-fuchsia-900': () => ({ stroke: 'var(--color-fuchsia-900)' }),
  'stroke-fuchsia-950': () => ({ stroke: 'var(--color-fuchsia-950)' }),
  'stroke-pink-50': () => ({ stroke: 'var(--color-pink-50)' }),
  'stroke-pink-100': () => ({ stroke: 'var(--color-pink-100)' }),
  'stroke-pink-200': () => ({ stroke: 'var(--color-pink-200)' }),
  'stroke-pink-300': () => ({ stroke: 'var(--color-pink-300)' }),
  'stroke-pink-400': () => ({ stroke: 'var(--color-pink-400)' }),
  'stroke-pink-500': () => ({ stroke: 'var(--color-pink-500)' }),
  'stroke-pink-600': () => ({ stroke: 'var(--color-pink-600)' }),
  'stroke-pink-700': () => ({ stroke: 'var(--color-pink-700)' }),
  'stroke-pink-800': () => ({ stroke: 'var(--color-pink-800)' }),
  'stroke-pink-900': () => ({ stroke: 'var(--color-pink-900)' }),
  'stroke-pink-950': () => ({ stroke: 'var(--color-pink-950)' }),
  'stroke-rose-50': () => ({ stroke: 'var(--color-rose-50)' }),
  'stroke-rose-100': () => ({ stroke: 'var(--color-rose-100)' }),
  'stroke-rose-200': () => ({ stroke: 'var(--color-rose-200)' }),
  'stroke-rose-300': () => ({ stroke: 'var(--color-rose-300)' }),
  'stroke-rose-400': () => ({ stroke: 'var(--color-rose-400)' }),
  'stroke-rose-500': () => ({ stroke: 'var(--color-rose-500)' }),
  'stroke-rose-600': () => ({ stroke: 'var(--color-rose-600)' }),
  'stroke-rose-700': () => ({ stroke: 'var(--color-rose-700)' }),
  'stroke-rose-800': () => ({ stroke: 'var(--color-rose-800)' }),
  'stroke-rose-900': () => ({ stroke: 'var(--color-rose-900)' }),
  'stroke-rose-950': () => ({ stroke: 'var(--color-rose-950)' }),
  'stroke-slate-50': () => ({ stroke: 'var(--color-slate-50)' }),
  'stroke-slate-100': () => ({ stroke: 'var(--color-slate-100)' }),
  'stroke-slate-200': () => ({ stroke: 'var(--color-slate-200)' }),
  'stroke-slate-300': () => ({ stroke: 'var(--color-slate-300)' }),
  'stroke-slate-400': () => ({ stroke: 'var(--color-slate-400)' }),
  'stroke-slate-500': () => ({ stroke: 'var(--color-slate-500)' }),
  'stroke-slate-600': () => ({ stroke: 'var(--color-slate-600)' }),
  'stroke-slate-700': () => ({ stroke: 'var(--color-slate-700)' }),
  'stroke-slate-800': () => ({ stroke: 'var(--color-slate-800)' }),
  'stroke-slate-900': () => ({ stroke: 'var(--color-slate-900)' }),
  'stroke-slate-950': () => ({ stroke: 'var(--color-slate-950)' }),
  'stroke-gray-50': () => ({ stroke: 'var(--color-gray-50)' }),
  'stroke-gray-100': () => ({ stroke: 'var(--color-gray-100)' }),
  'stroke-gray-200': () => ({ stroke: 'var(--color-gray-200)' }),
  'stroke-gray-300': () => ({ stroke: 'var(--color-gray-300)' }),
  'stroke-gray-400': () => ({ stroke: 'var(--color-gray-400)' }),
  'stroke-gray-500': () => ({ stroke: 'var(--color-gray-500)' }),
  'stroke-gray-600': () => ({ stroke: 'var(--color-gray-600)' }),
  'stroke-gray-700': () => ({ stroke: 'var(--color-gray-700)' }),
  'stroke-gray-800': () => ({ stroke: 'var(--color-gray-800)' }),
  'stroke-gray-900': () => ({ stroke: 'var(--color-gray-900)' }),
  'stroke-gray-950': () => ({ stroke: 'var(--color-gray-950)' }),
  'stroke-zinc-50': () => ({ stroke: 'var(--color-zinc-50)' }),
  'stroke-zinc-100': () => ({ stroke: 'var(--color-zinc-100)' }),
  'stroke-zinc-200': () => ({ stroke: 'var(--color-zinc-200)' }),
  'stroke-zinc-300': () => ({ stroke: 'var(--color-zinc-300)' }),
  'stroke-zinc-400': () => ({ stroke: 'var(--color-zinc-400)' }),
  'stroke-zinc-500': () => ({ stroke: 'var(--color-zinc-500)' }),
  'stroke-zinc-600': () => ({ stroke: 'var(--color-zinc-600)' }),
  'stroke-zinc-700': () => ({ stroke: 'var(--color-zinc-700)' }),
  'stroke-zinc-800': () => ({ stroke: 'var(--color-zinc-800)' }),
  'stroke-zinc-900': () => ({ stroke: 'var(--color-zinc-900)' }),
  'stroke-zinc-950': () => ({ stroke: 'var(--color-zinc-950)' }),
  'stroke-neutral-50': () => ({ stroke: 'var(--color-neutral-50)' }),
  'stroke-neutral-100': () => ({ stroke: 'var(--color-neutral-100)' }),
  'stroke-neutral-200': () => ({ stroke: 'var(--color-neutral-200)' }),
  'stroke-neutral-300': () => ({ stroke: 'var(--color-neutral-300)' }),
  'stroke-neutral-400': () => ({ stroke: 'var(--color-neutral-400)' }),
  'stroke-neutral-500': () => ({ stroke: 'var(--color-neutral-500)' }),
  'stroke-neutral-600': () => ({ stroke: 'var(--color-neutral-600)' }),
  'stroke-neutral-700': () => ({ stroke: 'var(--color-neutral-700)' }),
  'stroke-neutral-800': () => ({ stroke: 'var(--color-neutral-800)' }),
  'stroke-neutral-900': () => ({ stroke: 'var(--color-neutral-900)' }),
  'stroke-neutral-950': () => ({ stroke: 'var(--color-neutral-950)' }),
  'stroke-stone-50': () => ({ stroke: 'var(--color-stone-50)' }),
  'stroke-stone-100': () => ({ stroke: 'var(--color-stone-100)' }),
  'stroke-stone-200': () => ({ stroke: 'var(--color-stone-200)' }),
  'stroke-stone-300': () => ({ stroke: 'var(--color-stone-300)' }),
  'stroke-stone-400': () => ({ stroke: 'var(--color-stone-400)' }),
  'stroke-stone-500': () => ({ stroke: 'var(--color-stone-500)' }),
  'stroke-stone-600': () => ({ stroke: 'var(--color-stone-600)' }),
  'stroke-stone-700': () => ({ stroke: 'var(--color-stone-700)' }),
  'stroke-stone-800': () => ({ stroke: 'var(--color-stone-800)' }),
  'stroke-stone-900': () => ({ stroke: 'var(--color-stone-900)' }),
  'stroke-stone-950': () => ({ stroke: 'var(--color-stone-950)' }),
  'stroke-(<custom-property>)': ([value]) => ({ stroke: `var(${value})` }),
  'stroke-[<color>]': ([value]) => ({ stroke: `"${value}"` }),

  // stroke-width
  'stroke-<number>': ([value]) => ({ strokeWidth: `"${value}"` }),
  'stroke-(length:<custom-property>)': ([value]) => ({ strokeWidth: `var(${value})` }),
  'stroke-[<value>]': ([value]) => ({ strokeWidth: `"${value}"` }),

  // ACCESSIBILITY

  // force-color-adjust

  'forced-color-adjust-auto': () => ({ forcedColorAdjust: 'auto' }),
  'forced-color-adjust-none': () => ({ forcedColorAdjust: 'none' }),
}
