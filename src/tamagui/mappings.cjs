module.exports = {
  // border-color
  'border-<border-color-variable>': ([value]) => ({ borderColor: `"$${value}"` }),
  'border-color-(<token>)': ([value]) => ({ borderColor: `"${value}"` }),
  'border-color-[<color>]': ([value]) => ({ borderColor: value }),
  'border-color-[<value>]': ([value]) => ({ borderColor: `"${value}"` }),
  'border-color-${<code>}': ([value]) => ({ borderColor: value }),

  // border-top-color
  'border-t-<border-color-variable>': ([value]) => ({ borderTopColor: `"$${value}"` }),
  'border-t-color-(<token>)': ([value]) => ({ borderTopColor: `"${value}"` }),
  'border-t-color-[<color>]': ([value]) => ({ borderTopColor: value }),
  'border-t-color-[<value>]': ([value]) => ({ borderTopColor: `"${value}"` }),
  'border-t-color-${<code>}': ([value]) => ({ borderTopColor: value }),
  'border-top-<border-color-variable>': ([value]) => ({ borderTopColor: `"$${value}"` }),
  'border-top-color-(<token>)': ([value]) => ({ borderTopColor: `"${value}"` }),
  'border-top-color-[<color>]': ([value]) => ({ borderTopColor: value }),
  'border-top-color-[<value>]': ([value]) => ({ borderTopColor: `"${value}"` }),
  'border-top-color-${<code>}': ([value]) => ({ borderTopColor: value }),

  // border-right-color
  'border-r-<border-color-variable>': ([value]) => ({ borderRightColor: `"$${value}"` }),
  'border-r-color-(<token>)': ([value]) => ({ borderRightColor: `"${value}"` }),
  'border-r-color-[<color>]': ([value]) => ({ borderRightColor: value }),
  'border-r-color-[<value>]': ([value]) => ({ borderRightColor: `"${value}"` }),
  'border-r-color-${<code>}': ([value]) => ({ borderRightColor: value }),
  'border-right-<border-color-variable>': ([value]) => ({ borderRightColor: `"$${value}"` }),
  'border-right-color-(<token>)': ([value]) => ({ borderRightColor: `"${value}"` }),
  'border-right-color-[<color>]': ([value]) => ({ borderRightColor: value }),
  'border-right-color-[<value>]': ([value]) => ({ borderRightColor: `"${value}"` }),
  'border-right-color-${<code>}': ([value]) => ({ borderRightColor: value }),

  // border-bottom-color
  'border-b-<border-color-variable>': ([value]) => ({ borderBottomColor: `"$${value}"` }),
  'border-b-color-(<token>)': ([value]) => ({ borderBottomColor: `"${value}"` }),
  'border-b-color-[<color>]': ([value]) => ({ borderBottomColor: value }),
  'border-b-color-[<value>]': ([value]) => ({ borderBottomColor: `"${value}"` }),
  'border-b-color-${<code>}': ([value]) => ({ borderBottomColor: value }),
  'border-bottom-<border-color-variable>': ([value]) => ({ borderBottomColor: `"$${value}"` }),
  'border-bottom-color-(<token>)': ([value]) => ({ borderBottomColor: `"${value}"` }),
  'border-bottom-color-[<color>]': ([value]) => ({ borderBottomColor: value }),
  'border-bottom-color-[<value>]': ([value]) => ({ borderBottomColor: `"${value}"` }),
  'border-bottom-color-${<code>}': ([value]) => ({ borderBottomColor: value }),

  // border-left-color
  'border-l-<border-color-variable>': ([value]) => ({ borderLeftColor: `"$${value}"` }),
  'border-l-color-(<token>)': ([value]) => ({ borderLeftColor: `"${value}"` }),
  'border-l-color-[<color>]': ([value]) => ({ borderLeftColor: value }),
  'border-l-color-[<value>]': ([value]) => ({ borderLeftColor: `"${value}"` }),
  'border-l-color-${<code>}': ([value]) => ({ borderLeftColor: value }),
  'border-left-<border-color-variable>': ([value]) => ({ borderLeftColor: `"$${value}"` }),
  'border-left-color-(<token>)': ([value]) => ({ borderLeftColor: `"${value}"` }),
  'border-left-color-[<color>]': ([value]) => ({ borderLeftColor: value }),
  'border-left-color-[<value>]': ([value]) => ({ borderLeftColor: `"${value}"` }),
  'border-left-color-${<code>}': ([value]) => ({ borderLeftColor: value }),

  // border-start-color
  'border-s-<border-color-variable>': ([value]) => ({ borderStartColor: `"$${value}"` }),
  'border-s-color-(<token>)': ([value]) => ({ borderStartColor: `"${value}"` }),
  'border-s-color-[<color>]': ([value]) => ({ borderStartColor: value }),
  'border-s-color-[<value>]': ([value]) => ({ borderStartColor: `"${value}"` }),
  'border-s-color-${<code>}': ([value]) => ({ borderStartColor: value }),
  'border-start-<border-color-variable>': ([value]) => ({ borderStartColor: `"$${value}"` }),
  'border-start-color-(<token>)': ([value]) => ({ borderStartColor: `"${value}"` }),
  'border-start-color-[<color>]': ([value]) => ({ borderStartColor: value }),
  'border-start-color-[<value>]': ([value]) => ({ borderStartColor: `"${value}"` }),
  'border-start-color-${<code>}': ([value]) => ({ borderStartColor: value }),

  // border-end-color
  'border-e-<border-color-variable>': ([value]) => ({ borderEndColor: `"$${value}"` }),
  'border-e-color-(<token>)': ([value]) => ({ borderEndColor: `"${value}"` }),
  'border-e-color-[<color>]': ([value]) => ({ borderEndColor: value }),
  'border-e-color-[<value>]': ([value]) => ({ borderEndColor: `"${value}"` }),
  'border-e-color-${<code>}': ([value]) => ({ borderEndColor: value }),
  'border-end-<border-color-variable>': ([value]) => ({ borderEndColor: `"$${value}"` }),
  'border-end-color-(<token>)': ([value]) => ({ borderEndColor: `"${value}"` }),
  'border-end-color-[<color>]': ([value]) => ({ borderEndColor: value }),
  'border-end-color-[<value>]': ([value]) => ({ borderEndColor: `"${value}"` }),
  'border-end-color-${<code>}': ([value]) => ({ borderEndColor: value }),

  // border-radius
  'rounded-<border-radius-variable>': ([value]) => ({ borderRadius: `"$${value}"` }),
  'rounded-(<token>)': ([value]) => ({ borderRadius: `"${value}"` }),
  'rounded-[<number>]': ([value]) => ({ borderRadius: value }),
  'rounded-[<value>]': ([value]) => ({ borderRadius: value }),
  'rounded-${<code>}': ([value]) => ({ borderRadius: value }),
  'border-radius-<border-radius-variable>': ([value]) => ({ borderRadius: `"$${value}"` }),
  'border-radius-(<token>)': ([value]) => ({ borderRadius: `"${value}"` }),
  'border-radius-[<number>]': ([value]) => ({ borderRadius: value }),
  'border-radius-[<value>]': ([value]) => ({ borderRadius: `"${value}"` }),
  'border-radius-${<code>}': ([value]) => ({ borderRadius: value }),

  // border-top-left-radius
  'rounded-tl-<border-radius-variable>': ([value]) => ({ borderTopLeftRadius: `"$${value}"` }),
  'rounded-tl-(<token>)': ([value]) => ({ borderTopLeftRadius: `"${value}"` }),
  'rounded-tl-[<number>]': ([value]) => ({ borderTopLeftRadius: value }),
  'rounded-tl-[<value>]': ([value]) => ({ borderTopLeftRadius: `"${value}"` }),
  'rounded-tl-${<code>}': ([value]) => ({ borderTopLeftRadius: value }),
  'border-top-left-radius-<border-radius-variable>': ([value]) => ({
    borderTopLeftRadius: `"$${value}"`,
  }),
  'border-top-left-radius-(<token>)': ([value]) => ({ borderTopLeftRadius: `"${value}"` }),
  'border-top-left-radius-[<number>]': ([value]) => ({ borderTopLeftColor: value }),
  'border-top-left-radius-[<value>]': ([value]) => ({ borderTopLeftRadius: `"${value}"` }),
  'border-top-left-radius-${<code>}': ([value]) => ({ borderTopLeftRadius: value }),

  // border-top-right-radius
  'rounded-tr-<border-radius-variable>': ([value]) => ({ borderTopRightRadius: `"$${value}"` }),
  'rounded-tr-(<token>)': ([value]) => ({ borderTopRightRadius: `"${value}"` }),
  'rounded-tr-[<number>]': ([value]) => ({ borderTopRightRadius: value }),
  'rounded-tr-[<value>]': ([value]) => ({ borderTopRightRadius: `"${value}"` }),
  'rounded-tr-${<code>}': ([value]) => ({ borderTopRightRadius: value }),
  'border-top-right-radius-<border-radius-variable>': ([value]) => ({
    borderTopRightRadius: `"$${value}"`,
  }),
  'border-top-right-radius-(<token>)': ([value]) => ({ borderTopRightRadius: `"${value}"` }),
  'border-top-right-radius-[<number>]': ([value]) => ({ borderTopRightRadius: value }),
  'border-top-right-radius-[<value>]': ([value]) => ({ borderTopRightRadius: `"${value}"` }),
  'border-top-right-radius-${<code>}': ([value]) => ({ borderTopRightRadius: value }),

  // border-top-start-radius
  'rounded-ts-<border-radius-variable>': ([value]) => ({ borderTopStartRadius: `"$${value}"` }),
  'rounded-ts-(<token>)': ([value]) => ({ borderTopStartRadius: `"${value}"` }),
  'rounded-ts-[<number>]': ([value]) => ({ borderTopStartRadius: value }),
  'rounded-ts-[<value>]': ([value]) => ({ borderTopStartRadius: `"${value}"` }),
  'rounded-ts-${<code>}': ([value]) => ({ borderTopStartRadius: value }),
  'border-top-start-radius-<border-radius-variable>': ([value]) => ({
    borderTopStartRadius: `"$${value}"`,
  }),
  'border-top-start-radius-(<token>)': ([value]) => ({ borderTopStartRadius: `"${value}"` }),
  'border-top-start-radius-[<number>]': ([value]) => ({ borderTopStartRadius: value }),
  'border-top-start-radius-[<value>]': ([value]) => ({ borderTopStartRadius: `"${value}"` }),
  'border-top-start-radius-${<code>}': ([value]) => ({ borderTopStartRadius: value }),

  // border-top-end-radius
  'rounded-te-<border-radius-variable>': ([value]) => ({ borderTopEndRadius: `"$${value}"` }),
  'rounded-te-(<token>)': ([value]) => ({ borderTopEndRadius: `"${value}"` }),
  'rounded-te-[<number>]': ([value]) => ({ borderTopEndRadius: value }),
  'rounded-te-[<value>]': ([value]) => ({ borderTopEndRadius: `"${value}"` }),
  'rounded-te-${<code>}': ([value]) => ({ borderTopEndRadius: value }),
  'border-top-end-radius-<border-radius-variable>': ([value]) => ({
    borderTopEndRadius: `"$${value}"`,
  }),
  'border-top-end-radius-(<token>)': ([value]) => ({ borderTopEndRadius: `"${value}"` }),
  'border-top-end-radius-[<number>]': ([value]) => ({ borderTopEndRadius: value }),
  'border-top-end-radius-[<value>]': ([value]) => ({ borderTopEndRadius: `"${value}"` }),
  'border-top-end-radius-${<code>}': ([value]) => ({ borderTopEndRadius: value }),

  // border-bottom-left-radius
  'rounded-bl-<border-radius-variable>': ([value]) => ({ borderBottomLeftRadius: `"$${value}"` }),
  'rounded-bl-(<token>)': ([value]) => ({ borderBottomLeftRadius: `"${value}"` }),
  'rounded-bl-[<number>]': ([value]) => ({ borderBottomLeftRadius: value }),
  'rounded-bl-[<value>]': ([value]) => ({ borderBottomLeftRadius: `"${value}"` }),
  'rounded-bl-${<code>}': ([value]) => ({ borderBottomLeftRadius: value }),
  'border-bottom-left-radius-<border-radius-variable>': ([value]) => ({
    borderBottomLeftRadius: `"$${value}"`,
  }),
  'border-bottom-left-radius-(<token>)': ([value]) => ({ borderBottomLeftRadius: `"${value}"` }),
  'border-bottom-left-radius-[<number>]': ([value]) => ({ borderBottomLeftRadius: value }),
  'border-bottom-left-radius-[<value>]': ([value]) => ({ borderBottomLeftRadius: `"${value}"` }),
  'border-bottom-left-radius-${<code>}': ([value]) => ({ borderBottomLeftRadius: value }),

  // border-bottom-right-radius
  'rounded-br-<border-radius-variable>': ([value]) => ({
    borderBottomRightRadius: `"$${value}"`,
  }),
  'rounded-br-(<token>)': ([value]) => ({ borderBottomRightRadius: `"${value}"` }),
  'rounded-br-[<number>]': ([value]) => ({ borderBottomRightRadius: value }),
  'rounded-br-[<value>]': ([value]) => ({ borderBottomRightRadius: `"${value}"` }),
  'rounded-br-${<code>}': ([value]) => ({ borderBottomRightRadius: value }),
  'border-bottom-right-radius-<border-radius-variable>': ([value]) => ({
    borderBottomRightRadius: `"$${value}"`,
  }),
  'border-bottom-right-radius-(<token>)': ([value]) => ({
    borderBottomRightRadius: `"${value}"`,
  }),
  'border-bottom-right-radius-[<number>]': ([value]) => ({ borderBottomRightRadius: value }),
  'border-bottom-right-radius-[<value>]': ([value]) => ({ borderBottomRightRadius: `"${value}"` }),
  'border-bottom-right-radius-${<code>}': ([value]) => ({ borderBottomRightRadius: value }),

  // border-bottom-start-radius
  'rounded-bs-<border-radius-variable>': ([value]) => ({
    borderBottomStartRadius: `"$${value}"`,
  }),
  'rounded-bs-(<token>)': ([value]) => ({ borderBottomStartRadius: `"${value}"` }),
  'rounded-bs-[<number>]': ([value]) => ({ borderBottomStartRadius: value }),
  'rounded-bs-[<value>]': ([value]) => ({ borderBottomStartRadius: `"${value}"` }),
  'rounded-bs-${<code>}': ([value]) => ({ borderBottomStartRadius: value }),
  'border-bottom-start-radius-<border-radius-variable>': ([value]) => ({
    borderBottomStartRadius: `"$${value}"`,
  }),
  'border-bottom-start-radius-(<token>)': ([value]) => ({
    borderBottomStartRadius: `"${value}"`,
  }),
  'border-bottom-start-radius-[<number>]': ([value]) => ({ borderBottomStartRadius: value }),
  'border-bottom-start-radius-[<value>]': ([value]) => ({ borderBottomStartRadius: `"${value}"` }),
  'border-bottom-start-radius-${<code>}': ([value]) => ({ borderBottomStartRadius: value }),

  // border-bottom-end-radius
  'rounded-be-<border-radius-variable>': ([value]) => ({
    borderBottomEndRadius: `"$${value}"`,
  }),
  'rounded-be-(<token>)': ([value]) => ({ borderBottomEndRadius: `"${value}"` }),
  'rounded-be-[<number>]': ([value]) => ({ borderBottomEndRadius: value }),
  'rounded-be-[<value>]': ([value]) => ({ borderBottomEndRadius: `"${value}"` }),
  'rounded-be-${<code>}': ([value]) => ({ borderBottomEndRadius: value }),
  'border-bottom-end-radius-<border-radius-variable>': ([value]) => ({
    borderBottomEndRadius: `"$${value}"`,
  }),
  'border-bottom-end-radius-(<token>)': ([value]) => ({
    borderBottomEndRadius: `"${value}"`,
  }),
  'border-bottom-end-radius-[<number>]': ([value]) => ({ borderBottomEndRadius: value }),
  'border-bottom-end-radius-[<value>]': ([value]) => ({ borderBottomEndRadius: `"${value}"` }),
  'border-bottom-end-radius-${<code>}': ([value]) => ({ borderBottomEndRadius: value }),

  // border-start-end-radius
  'rounded-se-<border-radius-variable>': ([value]) => ({
    borderStartEndRadius: `"$${value}"`,
  }),
  'rounded-se-(<token>)': ([value]) => ({ borderStartEndRadius: `"${value}"` }),
  'rounded-se-[<number>]': ([value]) => ({ borderStartEndRadius: value }),
  'rounded-se-[<value>]': ([value]) => ({ borderStartEndRadius: `"${value}"` }),
  'rounded-se-${<code>}': ([value]) => ({ borderStartEndRadius: value }),
  'border-start-end-radius-<border-radius-variable>': ([value]) => ({
    borderStartEndRadius: `"$${value}"`,
  }),
  'border-start-end-radius-(<token>)': ([value]) => ({
    borderStartEndRadius: `"${value}"`,
  }),
  'border-start-end-radius-[<number>]': ([value]) => ({ borderStartEndRadius: value }),
  'border-start-end-radius-[<value>]': ([value]) => ({ borderStartEndRadius: `"${value}"` }),
  'border-start-end-radius-${<code>}': ([value]) => ({ borderStartEndRadius: value }),

  // border-start-start-radius
  'rounded-ss-<border-radius-variable>': ([value]) => ({
    borderStartStartRadius: `"$${value}"`,
  }),
  'rounded-ss-(<token>)': ([value]) => ({ borderStartStartRadius: `"${value}"` }),
  'rounded-ss-[<number>]': ([value]) => ({ borderStartStartRadius: value }),
  'rounded-ss-[<value>]': ([value]) => ({ borderStartStartRadius: `"${value}"` }),
  'rounded-ss-${<code>}': ([value]) => ({ borderStartStartRadius: value }),
  'border-start-start-radius-<border-radius-variable>': ([value]) => ({
    borderStartStartRadius: `"$${value}"`,
  }),
  'border-start-start-radius-(<token>)': ([value]) => ({
    borderStartStartRadius: `"${value}"`,
  }),
  'border-start-start-radius-[<number>]': ([value]) => ({ borderStartStartRadius: value }),
  'border-start-start-radius-[<value>]': ([value]) => ({ borderStartStartRadius: `"${value}"` }),
  'border-start-start-radius-${<code>}': ([value]) => ({ borderStartStartRadius: value }),

  // border-end-start-radius
  'rounded-es-<border-radius-variable>': ([value]) => ({
    borderEndStartRadius: `"$${value}"`,
  }),
  'rounded-es-(<token>)': ([value]) => ({ borderEndStartRadius: `"${value}"` }),
  'rounded-es-[<number>]': ([value]) => ({ borderEndStartRadius: value }),
  'rounded-es-[<value>]': ([value]) => ({ borderEndStartRadius: `"${value}"` }),
  'rounded-es-${<code>}': ([value]) => ({ borderEndStartRadius: value }),
  'border-end-start-radius-<border-radius-variable>': ([value]) => ({
    borderEndStartRadius: `"$${value}"`,
  }),
  'border-end-start-radius-(<token>)': ([value]) => ({
    borderEndStartRadius: `"${value}"`,
  }),
  'border-end-start-radius-[<number>]': ([value]) => ({ borderEndStartRadius: value }),
  'border-end-start-radius-[<value>]': ([value]) => ({ borderEndStartRadius: `"${value}"` }),
  'border-end-start-radius-${<code>}': ([value]) => ({ borderEndStartRadius: value }),

  // border-end-end-radius
  'rounded-ee-<border-radius-variable>': ([value]) => ({
    borderEndEndRadius: `"$${value}"`,
  }),
  'rounded-ee-(<token>)': ([value]) => ({ borderEndEndRadius: `"${value}"` }),
  'rounded-ee-[<number>]': ([value]) => ({ borderEndEndRadius: value }),
  'rounded-ee-[<value>]': ([value]) => ({ borderEndEndRadius: `"${value}"` }),
  'rounded-ee-${<code>}': ([value]) => ({ borderEndEndRadius: value }),
  'border-end-end-radius-<border-radius-variable>': ([value]) => ({
    borderEndEndRadius: `"$${value}"`,
  }),
  'border-end-end-radius-(<token>)': ([value]) => ({
    borderEndEndRadius: `"${value}"`,
  }),
  'border-end-end-radius-[<number>]': ([value]) => ({ borderEndEndRadius: value }),
  'border-end-end-radius-[<value>]': ([value]) => ({ borderEndEndRadius: `"${value}"` }),
  'border-end-end-radius-${<code>}': ([value]) => ({ borderEndEndRadius: value }),

  // opacity
  'opacity-<opacity-variable>': ([value]) => ({ opacity: `"$${value}"` }),
  'opacity-(<token>)': ([value]) => ({ opacity: `"${value}"` }),
  'opacity-[<number>]': ([value]) => ({ opacity: value }),
  'opacity-[<value>]': ([value]) => ({ opacity: `"${value}"` }),
  'opacity-${<code>}': ([value]) => ({ opacity: value }),

  // overlay-color
  'overlay-<colors-variable>': ([value]) => ({ overlayColor: `"$${value}"` }),
  'overlay-(<token>)': ([value]) => ({ overlayColor: `"${value}"` }),
  'overlay-[<value>]': ([value]) => ({ overlayColor: `"${value}"` }),
  'overlay-${<code>}': ([value]) => ({ overlayColor: value }),

  // resize-mode
  'resize-(<token>)': ([value]) => ({ resizeMode: `"${value}"` }),
  'resize-[<value>]': ([value]) => ({ resizeMode: `"${value}"` }),
  'resize-${<code>}': ([value]) => ({ resizeMode: value }),

  // object-fit
  'object-fit-(<token>)': ([value]) => ({ objectFit: `"${value}"` }),
  'object-fit-[<value>]': ([value]) => ({ objectFit: `"${value}"` }),
  'object-fit-${<code>}': ([value]) => ({ objectFit: value }),

  // tint-color
  'tint-<colors-variable>': ([value]) => ({ tintColor: `"$${value}"` }),
  'tint-(<token>)': ([value]) => ({ tintColor: `"${value}"` }),
  'tint-[<value>]': ([value]) => ({ tintColor: `"${value}"` }),
  'tint-${<code>}': ([value]) => ({ tintColor: value }),

  // backface-visibility
  'backface-(<token>)': ([value]) => ({ backfaceVisibility: `"${value}"` }),
  'backface-[<value>]': ([value]) => ({ backfaceVisibility: `"${value}"` }),
  'backface-${<code>}': ([value]) => ({ backfaceVisibility: value }),

  // align-content
  'align-content-(<token>)': ([value]) => ({ alignContent: `"${value}"` }),
  'align-content-[<value>]': ([value]) => ({ alignContent: `"${value}"` }),
  'align-content-${<code>}': ([value]) => ({ alignContent: value }),

  // align-items
  'items-(<token>)': ([value]) => ({ alignItems: `"${value}"` }),
  'items-[<value>]': ([value]) => ({ alignItems: `"${value}"` }),
  'items-${<code>}': ([value]) => ({ alignItems: value }),

  // align-self
  'self-(<token>)': ([value]) => ({ alignSelf: `"${value}"` }),
  'self-[<value>]': ([value]) => ({ alignSelf: `"${value}"` }),
  'self-${<code>}': ([value]) => ({ alignSelf: value }),

  // aspect-ratio
  'aspect-<aspect-ratio-variable>': ([value]) => ({ aspectRatio: `"$${value}"` }),
  'aspect-(<token>)': ([value]) => ({ aspectRatio: `"${value}"` }),
  'aspect-[<number>]': ([value]) => ({ aspectRatio: value }),
  'aspect-[<value>]': ([value]) => ({ aspectRatio: `"${value}"` }),
  'aspect-${<code>}': ([value]) => ({ aspectRatio: value }),

  // border-width
  'border-<border-width-variable>': ([value]) => ({ borderWidth: `"$${value}"` }),
  'border-(<token>)': ([value]) => ({ borderWidth: `"${value}"` }),
  'border-[<number>]': ([value]) => ({ borderWidth: value }),
  'border-[<value>]': ([value]) => ({ borderWidth: `"${value}"` }),
  'border-${<code>}': ([value]) => ({ borderWidth: value }),
  'border-width-<border-width-variable>': ([value]) => ({ borderWidth: `"$${value}"` }),
  'border-width-(<token>)': ([value]) => ({ borderWidth: `"${value}"` }),
  'border-width-[<number>]': ([value]) => ({ borderWidth: value }),
  'border-width-[<value>]': ([value]) => ({ borderWidth: `"${value}"` }),
  'border-width-${<code>}': ([value]) => ({ borderWidth: value }),

  // border-bottom-width
  'border-b-<border-width-variable>': ([value]) => ({ borderBottomWidth: `"$${value}"` }),
  'border-b-(<token>)': ([value]) => ({ borderBottomWidth: `"${value}"` }),
  'border-b-[<number>]': ([value]) => ({ borderBottomWidth: value }),
  'border-b-[<value>]': ([value]) => ({ borderBottomWidth: `"${value}"` }),
  'border-b-${<code>}': ([value]) => ({ borderBottomWidth: value }),

  // border-end-width
  'border-e-<border-width-variable>': ([value]) => ({ borderEndWidth: `"$${value}"` }),
  'border-e-(<token>)': ([value]) => ({ borderEndWidth: `"${value}"` }),
  'border-e-[<number>]': ([value]) => ({ borderEndWidth: value }),
  'border-e-[<value>]': ([value]) => ({ borderEndWidth: `"${value}"` }),
  'border-e-${<code>}': ([value]) => ({ borderEndWidth: value }),

  // border-left-width
  'border-l-<border-width-variable>': ([value]) => ({ borderLeftWidth: `"$${value}"` }),
  'border-l-(<token>)': ([value]) => ({ borderLeftWidth: `"${value}"` }),
  'border-l-[<number>]': ([value]) => ({ borderLeftWidth: value }),
  'border-l-[<value>]': ([value]) => ({ borderLeftWidth: `"${value}"` }),
  'border-l-${<code>}': ([value]) => ({ borderLeftWidth: value }),

  // border-right-width
  'border-r-<border-width-variable>': ([value]) => ({ borderRightWidth: `"$${value}"` }),
  'border-r-(<token>)': ([value]) => ({ borderRightWidth: `"${value}"` }),
  'border-r-[<number>]': ([value]) => ({ borderRightWidth: value }),
  'border-r-[<value>]': ([value]) => ({ borderRightWidth: `"${value}"` }),
  'border-r-${<code>}': ([value]) => ({ borderRightWidth: value }),

  // border-start-width
  'border-s-<border-width-variable>': ([value]) => ({ borderStartWidth: `"$${value}"` }),
  'border-s-(<token>)': ([value]) => ({ borderStartWidth: `"${value}"` }),
  'border-s-[<number>]': ([value]) => ({ borderStartWidth: value }),
  'border-s-[<value>]': ([value]) => ({ borderStartWidth: `"${value}"` }),
  'border-s-${<code>}': ([value]) => ({ borderStartWidth: value }),

  // border-top-width
  'border-t-<border-width-variable>': ([value]) => ({ borderTopWidth: `"$${value}"` }),
  'border-t-(<token>)': ([value]) => ({ borderTopWidth: `"${value}"` }),
  'border-t-[<number>]': ([value]) => ({ borderTopWidth: value }),
  'border-t-[<value>]': ([value]) => ({ borderTopWidth: `"${value}"` }),
  'border-t-${<code>}': ([value]) => ({ borderTopWidth: value }),

  // position
  'position-(<token>)': ([value]) => ({ position: `"${value}"` }),
  'position-[<value>]': ([value]) => ({ position: value }),
  'position-${<code>}': ([value]) => ({ position: value }),

  // z-index
  'z-<number>': ([value]) => ({ zIndex: value }),
  'z-(<token>)': ([value]) => ({ zIndex: `"${value}"` }),
  'z-[<value>]': ([value]) => ({ zIndex: `"${value}"` }),
  'z-${<code>}': ([value]) => ({ zIndex: value }),

  // start
  'start-<spacing-variable>': ([value]) => ({ start: `"$${value}"` }),
  '-start-<spacing-variable>': ([value]) => ({ start: `"-$${value}"` }),
  'start-(<token>)': ([value]) => ({ start: `"${value}"` }),
  'start-[<number>]': ([value]) => ({ start: value }),
  'start-[<value>]': ([value]) => ({ start: `"${value}"` }),
  'start-${<code>}': ([value]) => ({ start: value }),

  // end
  'end-<spacing-variable>': ([value]) => ({ end: `"$${value}"` }),
  '-end-<spacing-variable>': ([value]) => ({ end: `"-$${value}"` }),
  'end-(<token>)': ([value]) => ({ end: `"${value}"` }),
  'end-[<number>]': ([value]) => ({ end: value }),
  'end-[<value>]': ([value]) => ({ end: `"${value}"` }),
  'end-${<code>}': ([value]) => ({ end: value }),

  // top
  'top-<spacing-variable>': ([value]) => ({ top: `"$${value}"` }),
  '-top-<spacing-variable>': ([value]) => ({ top: `"-$${value}"` }),
  'top-(<token>)': ([value]) => ({ top: `"${value}"` }),
  'top-[<number>]': ([value]) => ({ top: value }),
  'top-[<value>]': ([value]) => ({ top: `"${value}"` }),
  'top-${<code>}': ([value]) => ({ top: value }),

  // right
  'right-<spacing-variable>': ([value]) => ({ right: `"$${value}"` }),
  '-right-<spacing-variable>': ([value]) => ({ right: `"-$${value}"` }),
  'right-(<token>)': ([value]) => ({ right: `"${value}"` }),
  'right-[<number>]': ([value]) => ({ right: value }),
  'right-[<value>]': ([value]) => ({ right: `"${value}"` }),
  'right-${<code>}': ([value]) => ({ right: value }),

  // bottom
  'bottom-<spacing-variable>': ([value]) => ({ bottom: `"$${value}"` }),
  '-bottom-<spacing-variable>': ([value]) => ({ bottom: `"-$${value}"` }),
  'bottom-(<token>)': ([value]) => ({ bottom: `"${value}"` }),
  'bottom-[<number>]': ([value]) => ({ bottom: value }),
  'bottom-[<value>]': ([value]) => ({ bottom: `"${value}"` }),
  'bottom-${<code>}': ([value]) => ({ bottom: value }),

  // left
  'left-<spacing-variable>': ([value]) => ({ left: `"$${value}"` }),
  '-left-<spacing-variable>': ([value]) => ({ left: `"-$${value}"` }),
  'left-(<token>)': ([value]) => ({ left: `"${value}"` }),
  'left-[<number>]': ([value]) => ({ left: value }),
  'left-[<value>]': ([value]) => ({ left: `"${value}"` }),
  'left-${<code>}': ([value]) => ({ left: value }),

  // display
  'display-(<token>)': ([value]) => ({ display: `"${value}"` }),
  'display-[<value>]': ([value]) => ({ display: `"${value}"` }),
  'display-${<code>}': ([value]) => ({ display: value }),

  // box-sizing
  'box-(<token>)': ([value]) => ({ boxSizing: `"${value}"` }),
  'box-[<value>]': ([value]) => ({ boxSizing: `"${value}"` }),
  'box-${<code>}': ([value]) => ({ boxSizing: value }),

  // direction
  'direction-(<token>)': ([value]) => ({ direction: `"${value}"` }),
  'direction-[<value>]': ([value]) => ({ direction: `"${value}"` }),
  'direction-${<code>}': ([value]) => ({ direction: value }),

  // flex
  'flex-<number>': ([value]) => ({ flex: value }),
  'flex-(<token>)': ([value]) => ({ flex: `"${value}"` }),
  'flex-[<value>]': ([value]) => ({ flex: `"${value}"` }),
  'flex-${<code>}': ([value]) => ({ flex: value }),

  // flex-basis
  'basis-<flex-basis-variable>': ([value]) => ({ flexBasis: `"$${value}"` }),
  'basis-(<token>)': ([value]) => ({ flexBasis: `"${value}"` }),
  'basis-[<number>]': ([value]) => ({ flexBasis: value }),
  'basis-[<value>]': ([value]) => ({ flexBasis: `"${value}"` }),
  'basis-${<code>}': ([value]) => ({ flexBasis: value }),

  // flex-direction
  'flex-direction-(<token>)': ([value]) => ({ flexDirection: `"${value}"` }),
  'flex-direction-[<value>]': ([value]) => ({ flexDirection: `"${value}"` }),
  'flex-direction-${<code>}': ([value]) => ({ flexDirection: value }),

  // flex-grow
  'grow-<flex-grow-variable>': ([value]) => ({ flexGrow: `"$${value}"` }),
  'grow-(<token>)': ([value]) => ({ flexGrow: `"${value}"` }),
  'grow-[<number>]': ([value]) => ({ flexGrow: value }),
  'grow-[<value>]': ([value]) => ({ flexGrow: `"${value}"` }),
  'grow-${<code>}': ([value]) => ({ flexGrow: value }),

  // flex-shrink
  'shrink-<flex-shrink-variable>': ([value]) => ({ flexShrink: `"$${value}"` }),
  'shrink-(<token>)': ([value]) => ({ flexShrink: `"${value}"` }),
  'shrink-[<number>]': ([value]) => ({ flexShrink: value }),
  'shrink-[<value>]': ([value]) => ({ flexShrink: `"${value}"` }),
  'shrink-${<code>}': ([value]) => ({ flexShrink: value }),

  // flex-wrap
  'flex-wrap-(<token>)': ([value]) => ({ flexWrap: `"${value}"` }),
  'flex-wrap-[<value>]': ([value]) => ({ flexWrap: `"${value}"` }),
  'flex-wrap-${<code>}': ([value]) => ({ flexWrap: value }),

  // gap
  'gap-<gap-variable>': ([value]) => ({ gap: `"$${value}"` }),
  'gap-(<token>)': ([value]) => ({ gap: `"${value}"` }),
  'gap-[<number>]': ([value]) => ({ gap: value }),
  'gap-[<value>]': ([value]) => ({ gap: `"${value}"` }),
  'gap-${<code>}': ([value]) => ({ gap: value }),

  // gap-x
  'gap-x-<gap-variable>': ([value]) => ({ columnGap: `"$${value}"` }),
  'gap-x-(<token>)': ([value]) => ({ columnGap: `"${value}"` }),
  'gap-x-[<number>]': ([value]) => ({ columnGap: value }),
  'gap-x-[<value>]': ([value]) => ({ columnGap: `"${value}"` }),
  'gap-x-${<code>}': ([value]) => ({ columnGap: value }),

  // gap-y
  'gap-y-<gap-variable>': ([value]) => ({ rowGap: `"$${value}"` }),
  'gap-y-(<token>)': ([value]) => ({ rowGap: `"${value}"` }),
  'gap-y-[<number>]': ([value]) => ({ rowGap: value }),
  'gap-y-[<value>]': ([value]) => ({ rowGap: `"${value}"` }),
  'gap-y-${<code>}': ([value]) => ({ rowGap: value }),

  // justify-content
  'justify-(<token>)': ([value]) => ({ justifyContent: `"${value}"` }),
  'justify-[<value>]': ([value]) => ({ justifyContent: `"${value}"` }),
  'justify-${<code>}': ([value]) => ({ justifyContent: value }),

  // width
  'w-<width-variable>': ([value]) => ({ width: `"$${value}"` }),
  'w-(<token>)': ([value]) => ({ width: `"${value}"` }),
  'w-[<number>]': ([value]) => ({ width: value }),
  'w-[<value>]': ([value]) => ({ width: `"${value}"` }),
  'w-${<code>}': ([value]) => ({ width: value }),

  // height
  'h-<height-variable>': ([value]) => ({ height: `"$${value}"` }),
  'h-(<token>)': ([value]) => ({ height: `"${value}"` }),
  'h-[<number>]': ([value]) => ({ height: value }),
  'h-[<value>]': ([value]) => ({ height: `"${value}"` }),
  'h-${<code>}': ([value]) => ({ height: value }),

  // max-height
  'max-h-<height-variable>': ([value]) => ({ maxHeight: `"$${value}"` }),
  'max-h-(<token>)': ([value]) => ({ maxHeight: `"${value}"` }),
  'max-h-[<number>]': ([value]) => ({ maxHeight: value }),
  'max-h-[<value>]': ([value]) => ({ maxHeight: `"${value}"` }),
  'max-h-${<code>}': ([value]) => ({ maxHeight: value }),

  // max-width
  'max-w-<width-variable>': ([value]) => ({ maxWidth: `"$${value}"` }),
  'max-w-(<token>)': ([value]) => ({ maxWidth: `"${value}"` }),
  'max-w-[<number>]': ([value]) => ({ maxWidth: value }),
  'max-w-[<value>]': ([value]) => ({ maxWidth: `"${value}"` }),
  'max-w-${<code>}': ([value]) => ({ maxWidth: value }),

  // min-height
  'min-h-<height-variable>': ([value]) => ({ minHeight: `"$${value}"` }),
  'min-h-(<token>)': ([value]) => ({ minHeight: `"${value}"` }),
  'min-h-[<number>]': ([value]) => ({ minHeight: value }),
  'min-h-[<value>]': ([value]) => ({ minHeight: `"${value}"` }),
  'min-h-${<code>}': ([value]) => ({ minHeight: value }),

  // min-width
  'min-w-<width-variable>': ([value]) => ({ minWidth: `"$${value}"` }),
  'min-w-(<token>)': ([value]) => ({ minWidth: `"${value}"` }),
  'min-w-[<number>]': ([value]) => ({ minWidth: value }),
  'min-w-[<value>]': ([value]) => ({ minWidth: `"${value}"` }),
  'min-w-${<code>}': ([value]) => ({ minWidth: value }),

  // margin
  'm-<margin-variable>': ([value]) => ({ margin: `"$${value}"` }),
  '-m-<margin-variable>': ([value]) => ({ margin: `"-$${value}"` }),
  'm-(<token>)': ([value]) => ({ margin: `"${value}"` }),
  'm-[<number>]': ([value]) => ({ margin: value }),
  'm-[<value>]': ([value]) => ({ margin: `"${value}"` }),
  'm-${<code>}': ([value]) => ({ margin: value }),

  // margin-horizontal
  'mx-<margin-variable>': ([value]) => ({ marginHorizontal: `"$${value}"` }),
  '-mx-<margin-variable>': ([value]) => ({ marginHorizontal: `"-$${value}"` }),
  'mx-(<token>)': ([value]) => ({ marginHorizontal: `"${value}"` }),
  'mx-[<number>]': ([value]) => ({ marginHorizontal: value }),
  'mx-[<value>]': ([value]) => ({ marginHorizontal: `"${value}"` }),
  'mx-${<code>}': ([value]) => ({ marginHorizontal: value }),

  // margin-vertical
  'my-<margin-variable>': ([value]) => ({ marginVertical: `"$${value}"` }),
  '-my-<margin-variable>': ([value]) => ({ marginVertical: `"-$${value}"` }),
  'my-(<token>)': ([value]) => ({ marginVertical: `"${value}"` }),
  'my-[<number>]': ([value]) => ({ marginVertical: value }),
  'my-[<value>]': ([value]) => ({ marginVertical: `"${value}"` }),
  'my-${<code>}': ([value]) => ({ marginVertical: value }),

  // margin-start
  'ms-<margin-variable>': ([value]) => ({ marginStart: `"$${value}"` }),
  '-ms-<margin-variable>': ([value]) => ({ marginStart: `"-$${value}"` }),
  'ms-(<token>)': ([value]) => ({ marginStart: `"${value}"` }),
  'ms-[<number>]': ([value]) => ({ marginStart: value }),
  'ms-[<value>]': ([value]) => ({ marginStart: `"${value}"` }),
  'ms-${<code>}': ([value]) => ({ marginStart: value }),

  // margin-end
  'me-<margin-variable>': ([value]) => ({ marginEnd: `"$${value}"` }),
  '-me-<margin-variable>': ([value]) => ({ marginEnd: `"-$${value}"` }),
  'me-(<token>)': ([value]) => ({ marginEnd: `"${value}"` }),
  'me-[<number>]': ([value]) => ({ marginEnd: value }),
  'me-[<value>]': ([value]) => ({ marginEnd: `"${value}"` }),
  'me-${<code>}': ([value]) => ({ marginEnd: value }),

  // margin-top
  'mt-<margin-variable>': ([value]) => ({ marginTop: `"$${value}"` }),
  '-mt-<margin-variable>': ([value]) => ({ marginTop: `"-$${value}"` }),
  'mt-(<token>)': ([value]) => ({ marginTop: `"${value}"` }),
  'mt-[<number>]': ([value]) => ({ marginTop: value }),
  'mt-[<value>]': ([value]) => ({ marginTop: `"${value}"` }),
  'mt-${<code>}': ([value]) => ({ marginTop: value }),

  // margin-right
  'mr-<margin-variable>': ([value]) => ({ marginRight: `"$${value}"` }),
  '-mr-<margin-variable>': ([value]) => ({ marginRight: `"-$${value}"` }),
  'mr-(<token>)': ([value]) => ({ marginRight: `"${value}"` }),
  'mr-[<number>]': ([value]) => ({ marginRight: value }),
  'mr-[<value>]': ([value]) => ({ marginRight: `"${value}"` }),
  'mr-${<code>}': ([value]) => ({ marginRight: value }),

  // margin-bottom
  'mb-<margin-variable>': ([value]) => ({ marginBottom: `"$${value}"` }),
  '-mb-<margin-variable>': ([value]) => ({ marginBottom: `"-$${value}"` }),
  'mb-(<token>)': ([value]) => ({ marginBottom: `"${value}"` }),
  'mb-[<number>]': ([value]) => ({ marginBottom: value }),
  'mb-[<value>]': ([value]) => ({ marginBottom: `"${value}"` }),
  'mb-${<code>}': ([value]) => ({ marginBottom: value }),

  // margin-left
  'ml-<margin-variable>': ([value]) => ({ marginLeft: `"$${value}"` }),
  '-ml-<margin-variable>': ([value]) => ({ marginLeft: `"-$${value}"` }),
  'ml-(<token>)': ([value]) => ({ marginLeft: `"${value}"` }),
  'ml-[<number>]': ([value]) => ({ marginLeft: value }),
  'ml-[<value>]': ([value]) => ({ marginLeft: `"${value}"` }),
  'ml-${<code>}': ([value]) => ({ marginLeft: value }),

  // padding
  'p-<padding-variable>': ([value]) => ({ padding: `"$${value}"` }),
  'p-(<token>)': ([value]) => ({ padding: `"${value}"` }),
  'p-[<number>]': ([value]) => ({ padding: value }),
  'p-[<value>]': ([value]) => ({ padding: `"${value}"` }),
  'p-${<code>}': ([value]) => ({ padding: value }),

  // padding-horizontal
  'px-<padding-variable>': ([value]) => ({ paddingHorizontal: `"$${value}"` }),
  'px-(<token>)': ([value]) => ({ paddingHorizontal: `"${value}"` }),
  'px-[<number>]': ([value]) => ({ paddingHorizontal: value }),
  'px-[<value>]': ([value]) => ({ paddingHorizontal: `"${value}"` }),
  'px-${<code>}': ([value]) => ({ paddingHorizontal: value }),

  // padding-vertical
  'py-<padding-variable>': ([value]) => ({ paddingVertical: `"$${value}"` }),
  'py-(<token>)': ([value]) => ({ paddingVertical: `"${value}"` }),
  'py-[<number>]': ([value]) => ({ paddingVertical: value }),
  'py-[<value>]': ([value]) => ({ paddingVertical: `"${value}"` }),
  'py-${<code>}': ([value]) => ({ paddingVertical: value }),

  // padding-start
  'ps-<padding-variable>': ([value]) => ({ paddingStart: `"$${value}"` }),
  'ps-(<token>)': ([value]) => ({ paddingStart: `"${value}"` }),
  'ps-[<number>]': ([value]) => ({ paddingStart: value }),
  'ps-[<value>]': ([value]) => ({ paddingStart: `"${value}"` }),
  'ps-${<code>}': ([value]) => ({ paddingStart: value }),

  // padding-end
  'pe-<padding-variable>': ([value]) => ({ paddingEnd: `"$${value}"` }),
  'pe-(<token>)': ([value]) => ({ paddingEnd: `"${value}"` }),
  'pe-[<number>]': ([value]) => ({ paddingEnd: value }),
  'pe-[<value>]': ([value]) => ({ paddingEnd: `"${value}"` }),
  'pe-${<code>}': ([value]) => ({ paddingEnd: value }),

  // padding-top
  'pt-<padding-variable>': ([value]) => ({ paddingTop: `"$${value}"` }),
  'pt-(<token>)': ([value]) => ({ paddingTop: `"${value}"` }),
  'pt-[<number>]': ([value]) => ({ paddingTop: value }),
  'pt-[<value>]': ([value]) => ({ paddingTop: `"${value}"` }),
  'pt-${<code>}': ([value]) => ({ paddingTop: value }),

  // padding-right
  'pr-<padding-variable>': ([value]) => ({ paddingRight: `"$${value}"` }),
  'pr-(<token>)': ([value]) => ({ paddingRight: `"${value}"` }),
  'pr-[<number>]': ([value]) => ({ paddingRight: value }),
  'pr-[<value>]': ([value]) => ({ paddingRight: `"${value}"` }),
  'pr-${<code>}': ([value]) => ({ paddingRight: value }),

  // padding-bottom
  'pb-<padding-variable>': ([value]) => ({ paddingBottom: `"$${value}"` }),
  'pb-(<token>)': ([value]) => ({ paddingBottom: `"${value}"` }),
  'pb-[<number>]': ([value]) => ({ paddingBottom: value }),
  'pb-[<value>]': ([value]) => ({ paddingBottom: `"${value}"` }),
  'pb-${<code>}': ([value]) => ({ paddingBottom: value }),

  // padding-left
  'pl-<padding-variable>': ([value]) => ({ paddingLeft: `"$${value}"` }),
  'pl-(<token>)': ([value]) => ({ paddingLeft: `"${value}"` }),
  'pl-[<number>]': ([value]) => ({ paddingLeft: value }),
  'pl-[<value>]': ([value]) => ({ paddingLeft: `"${value}"` }),
  'pl-${<code>}': ([value]) => ({ paddingLeft: value }),

  // overflow
  'overflow-(<token>)': ([value]) => ({ overflow: `"${value}"` }),
  'overflow-[<value>]': ([value]) => ({ overflow: `"${value}"` }),
  'overflow-${<code>}': ([value]) => ({ overflow: value }),

  // box-shadow
  'box-shadow-<box-shadow-variable>': ([value]) => ({ boxShadow: `"$${value}"` }),
  'box-shadow-(<token>)': ([value]) => ({ boxShadow: `"${value}"` }),
  'box-shadow-[<value>]': ([value]) => ({ boxShadow: `"${value}"` }),
  'box-shadow-${<code>}': ([value]) => ({ boxShadow: value }),

  // drop-shadow
  'drop-shadow-(<token>)': ([value]) => ({ dropShadow: `"${value}"` }),
  'drop-shadow-[<value>]': ([value]) => ({ dropShadow: `"${value}"` }),
  'drop-shadow-${<code>}': ([value]) => ({ dropShadow: value }),

  // shadow-color
  'shadow-<box-shadow-color-variable>': ([value]) => ({ shadowColor: `"$${value}"` }),
  'shadow-color-(<token>)': ([value]) => ({ shadowColor: `"${value}"` }),
  'shadow-color-[<value>]': ([value]) => ({ shadowColor: `"${value}"` }),
  'shadow-color-${<code>}': ([value]) => ({ shadowColor: value }),

  // shadow-offset
  'shadow-<spacing-variable>': ([value]) => ({
    shadowOffset: `{ width: "$${value}", height: "$${value}" }`,
  }),
  'shadow-offset-(<token>)': ([value]) => ({
    shadowOffset: `{ width: "${value}", height: "${value}" }`,
  }),
  'shadow-offset-[<number>]': ([value]) => ({
    shadowOffset: `{ width: ${value}, height: ${value} }`,
  }),
  'shadow-offset-[<value>]': ([value]) => ({
    shadowOffset: `{ width: "${value}", height: "${value}" }`,
  }),
  'shadow-offset-${<code>}': ([value]) => ({
    shadowOffset: `{ width: ${value}, height: ${value} }`,
  }),

  // shadow-opacity
  'shadow-opacity-<opacity-variable>': ([value]) => ({ shadowOpacity: `"$${value}"` }),
  'shadow-opacity-(<token>)': ([value]) => ({ shadowOpacity: `"${value}"` }),
  'shadow-opacity-[<number>]': ([value]) => ({ shadowOpacity: value }),
  'shadow-opacity-[<value>]': ([value]) => ({ shadowOpacity: `"${value}"` }),
  'shadow-opacity-${<code>}': ([value]) => ({ shadowOpacity: value }),

  // shadow-radius
  'shadow-radius-<size-variable>': ([value]) => ({ shadowRadius: `"$${value}"` }),
  'shadow-radius-(<token>)': ([value]) => ({ shadowRadius: `"${value}"` }),
  'shadow-radius-[<number>]': ([value]) => ({ shadowRadius: value }),
  'shadow-radius-[<value>]': ([value]) => ({ shadowRadius: `"${value}"` }),
  'shadow-radius-${<code>}': ([value]) => ({ shadowRadius: value }),

  // color
  'color-<text-color-variable>': ([value]) => ({ color: `"$${value}"` }),
  'color-(<token>)': ([value]) => ({ color: `"${value}"` }),
  'color-[<value>]': ([value]) => ({ color: `"${value}"` }),
  'color-${<code>}': ([value]) => ({ color: value }),

  // font-size
  'font-size-<font-size-variable>': ([value]) => ({ fontSize: `"$${value}"` }),
  'font-size-(<token>)': ([value]) => ({ fontSize: `"${value}"` }),
  'font-size-[<number>]': ([value]) => ({ fontSize: value }),
  'font-size-[<value>]': ([value]) => ({ fontSize: `"${value}"` }),
  'font-size-${<code>}': ([value]) => ({ fontSize: value }),

  // font-family
  'font-<font-family-variable>': ([value]) => ({ fontFamily: `"$${value}"` }),
  'font-(<token>)': ([value]) => ({ fontFamily: `"${value}"` }),
  'font-[<value>]': ([value]) => ({ fontFamily: `"${value}"` }),
  'font-${<code>}': ([value]) => ({ fontFamily: value }),

  // font-style
  'font-style-(<token>)': ([value]) => ({ fontStyle: `"${value}"` }),
  'font-style-[<value>]': ([value]) => ({ fontStyle: `"${value}"` }),
  'font-style-${<code>}': ([value]) => ({ fontStyle: value }),

  // font-weight
  'font-<font-weight-variable>': ([value]) => ({ fontWeight: `"$${value}"` }),
  'font-weight-(<token>)': ([value]) => ({ fontWeight: `"${value}"` }),
  'font-weight-[<value>]': ([value]) => ({ fontWeight: `"${value}"` }),
  'font-weight-${<code>}': ([value]) => ({ fontWeight: value }),

  // font-padding
  'font-padding-(<token>)': ([value]) => ({ includeFontPadding: `"${value}"` }),
  'font-padding-[<value>]': ([value]) => ({ includeFontPadding: `"${value}"` }),
  'font-padding-${<code>}': ([value]) => ({ includeFontPadding: value }),

  // font-variant
  'font-variant-(<token>)': ([value]) => ({ fontVariant: `"${value}"` }),
  'font-variant-[<value>]': ([value]) => ({ fontVariant: `"${value}"` }),
  'font-variant-${<code>}': ([value]) => ({ fontVariant: value }),

  // letter-spacing
  'tracking-<number>': ([value]) => ({ letterSpacing: value }),
  'tracking-(<token>)': ([value]) => ({ letterSpacing: `"${value}"` }),
  'tracking-[<value>]': ([value]) => ({ letterSpacing: `"${value}"` }),
  'tracking-${<code>}': ([value]) => ({ letterSpacing: value }),
  'letter-spacing-<number>': ([value]) => ({ letterSpacing: value }),
  'letter-spacing-(<token>)': ([value]) => ({ letterSpacing: `"${value}"` }),
  'letter-spacing-[<value>]': ([value]) => ({ letterSpacing: `"${value}"` }),
  'letter-spacing-${<code>}': ([value]) => ({ letterSpacing: value }),

  // line-height
  'text-<font-size-variable>/<line-height-variable>': ([fontSize, lineHeight]) => ({
    fontSize: `"$${fontSize}"`,
    lineHeight: `"$${lineHeight}"`,
  }),
  'leading-<line-height-variable>': ([value]) => ({ lineHeight: `"$${value}"` }),
  'leading-(<token>)': ([value]) => ({ lineHeight: `"${value}"` }),
  'leading-[<value>]': ([value]) => ({ lineHeight: `"${value}"` }),
  'leading-${<code>}': ([value]) => ({ lineHeight: value }),
  'line-height-<line-height-variable>': ([value]) => ({ lineHeight: `"$${value}"` }),
  'line-height-(<token>)': ([value]) => ({ lineHeight: `"${value}"` }),
  'line-height-[<value>]': ([value]) => ({ lineHeight: `"${value}"` }),
  'line-height-${<code>}': ([value]) => ({ lineHeight: value }),

  // text-align
  'text-x-(<token>)': ([value]) => ({ textAlign: `"${value}"` }),
  'text-x-[<value>]': ([value]) => ({ textAlign: `"${value}"` }),
  'text-x-${<code>}': ([value]) => ({ textAlign: value }),

  // text-align-vertical
  'text-y-(<token>)': ([value]) => ({ textAlignVertical: `"${value}"` }),
  'text-y-[<value>]': ([value]) => ({ textAlignVertical: `"${value}"` }),
  'text-y-${<code>}': ([value]) => ({ textAlignVertical: value }),

  // text-decoration-color
  'decoration-color-<text-color-variable>': ([value]) => ({ textDecorationColor: `"$${value}"` }),
  'decoration-color-(<token>)': ([value]) => ({ textDecorationColor: `"${value}"` }),
  'decoration-color-[<value>]': ([value]) => ({ textDecorationColor: `"${value}"` }),
  'decoration-color-${<code>}': ([value]) => ({ textDecorationColor: value }),

  // text-decoration-line
  'decoration-line-(<token>)': ([value]) => ({ textDecorationLine: `"${value}"` }),
  'decoration-line-[<value>]': ([value]) => ({ textDecorationLine: `"${value}"` }),
  'decoration-line-${<code>}': ([value]) => ({ textDecorationLine: value }),

  // decoration-style
  'decoration-(<token>)': ([value]) => ({ textDecorationStyle: `"${value}"` }),
  'decoration-[<value>]': ([value]) => ({ textDecorationStyle: `"${value}"` }),
  'decoration-${<code>}': ([value]) => ({ textDecorationStyle: value }),

  // text-shadow-color
  'text-shadow-<text-color-variable>': ([value]) => ({ textShadowColor: `"$${value}"` }),
  'text-shadow-color-(<token>)': ([value]) => ({ textShadowColor: `"${value}"` }),
  'text-shadow-color-[<value>]': ([value]) => ({ textShadowColor: `"${value}"` }),
  'text-shadow-color-${<code>}': ([value]) => ({ textShadowColor: value }),

  // text-shadow-offset
  'text-shadow-offset-<spacing-variable>': ([value]) => ({
    textShadowOffset: `{ width: "$${value}", height: "$${value}" }`,
  }),
  'text-shadow-offset-(<token>)': ([value]) => ({
    textShadowOffset: `{ width: ${value}, height: ${value} }`,
  }),
  'text-shadow-offset-[<number>]': ([value]) => ({
    textShadowOffset: `{ width: ${value}, height: ${value} }`,
  }),
  'text-shadow-offset-[<value>]': ([value]) => ({
    textShadowOffset: `{ width: "${value}", height: "${value}" }`,
  }),
  'text-shadow-offset-${<code>}': ([value]) => ({
    textShadowOffset: `{ width: ${value}, height: ${value} }`,
  }),

  // text-shadow-radius
  'text-shadow-radius-<size-variable>': ([value]) => ({ textShadowRadius: `"$${value}"` }),
  'text-shadow-radius-(<token>)': ([value]) => ({ textShadowRadius: `"${value}"` }),
  'text-shadow-radius-[<number>]': ([value]) => ({ textShadowRadius: value }),
  'text-shadow-radius-[<value>]': ([value]) => ({ textShadowRadius: `"${value}"` }),
  'text-shadow-radius-${<code>}': ([value]) => ({ textShadowRadius: value }),

  // text-transform
  'text-transform-(<token>)': ([value]) => ({ textTransform: `"${value}"` }),
  'text-transform-[<value>]': ([value]) => ({ textTransform: `"${value}"` }),
  'text-transform-${<code>}': ([value]) => ({ textTransform: value }),

  // vertical-align
  'align-(<token>)': ([value]) => ({ verticalAlign: `"${value}"` }),
  'align-[<value>]': ([value]) => ({ verticalAlign: `"${value}"` }),
  'align-${<code>}': ([value]) => ({ verticalAlign: value }),

  // writing-direction
  'writing-(<token>)': ([value]) => ({ writingDirection: `"${value}"` }),
  'writing-[<value>]': ([value]) => ({ writingDirection: `"${value}"` }),
  'writing-${<code>}': ([value]) => ({ writingDirection: value }),

  // user-select
  'select-(<token>)': ([value]) => ({ userSelect: `"${value}"` }),
  'select-[<value>]': ([value]) => ({ userSelect: `"${value}"` }),
  'select-${<code>}': ([value]) => ({ userSelect: value }),

  // View style props

  // border-curve
  'border-curve-(<token>)': ([value]) => ({ borderCurve: `"${value}"` }),
  'border-curve-[<value>]': ([value]) => ({ borderCurve: `"${value}"` }),
  'border-curve-${<code>}': ([value]) => ({ borderCurve: value }),

  // border-style
  'border-style-(<token>)': ([value]) => ({ borderStyle: `"${value}"` }),
  'border-style-[<value>]': ([value]) => ({ borderStyle: `"${value}"` }),
  'border-style-${<code>}': ([value]) => ({ borderStyle: value }),

  // cursor
  'cursor-<cursor-variable>': ([value]) => ({ cursor: `"$${value}"` }),
  'cursor-(<token>)': ([value]) => ({ cursor: `"${value}"` }),
  'cursor-[<value>]': ([value]) => ({ cursor: `"${value}"` }),
  'cursor-${<code>}': ([value]) => ({ cursor: value }),

  // elevation
  'elevation-(<token>)': ([value]) => ({ elevation: `"${value}"` }),
  'elevation-[<number>]': ([value]) => ({ elevation: value }),
  'elevation-[<value>]': ([value]) => ({ elevation: `"${value}"` }),
  'elevation-${<code>}': ([value]) => ({ elevation: value }),

  // filter
  'filter-[<value>]': ([value]) => ({ filter: `"${value}"` }),
  'filter-(<token>)': ([value]) => ({ filter: `"${value}"` }),
  'filter-${<code>}': ([value]) => ({ filter: value }),

  // outline
  'outline-<outline-color-variable>': ([value]) => ({ outlineColor: `"$${value}"` }),
  'outline-color-(<token>)': ([value]) => ({ outlineColor: `"${value}"` }),
  'outline-color-[<value>]': ([value]) => ({ outlineColor: `"${value}"` }),
  'outline-color-${<code>}': ([value]) => ({ outlineColor: value }),

  // outline-offset
  'outline-offset-<outline-offset-variable>': ([value]) => ({ outlineOffset: `"$${value}"` }),
  '-outline-offset-<outline-offset-variable>': ([value]) => ({ outlineOffset: `"-$${value}"` }),
  'outline-offset-(<token>)': ([value]) => ({ outlineOffset: `"${value}"` }),
  'outline-offset-[<number>]': ([value]) => ({ outlineOffset: value }),
  'outline-offset-[<value>]': ([value]) => ({ outlineOffset: `"${value}"` }),
  'outline-offset-${<code>}': ([value]) => ({ outlineOffset: value }),

  // outline-style
  'outline-style-(<token>)': ([value]) => ({ outlineStyle: `"${value}"` }),
  'outline-style-[<value>]': ([value]) => ({ outlineStyle: `"${value}"` }),
  'outline-style-${<code>}': ([value]) => ({ outlineStyle: value }),

  // outline-width
  'outline-<outline-width-variable>': ([value]) => ({ outlineWidth: `"$${value}"` }),
  'outline-width-(<token>)': ([value]) => ({ outlineWidth: `"${value}"` }),
  'outline-width-[<number>]': ([value]) => ({ outlineWidth: value }),
  'outline-width-[<value>]': ([value]) => ({ outlineWidth: `"${value}"` }),
  'outline-width-${<code>}': ([value]) => ({ outlineWidth: value }),

  // pointer-events
  'pointer-events-(<token>)': ([value]) => ({ pointerEvents: `"${value}"` }),
  'pointer-events-[<value>]': ([value]) => ({ pointerEvents: `"${value}"` }),
  'pointer-events-${<code>}': ([value]) => ({ pointerEvents: value }),

  // contain
  'contain-(<token>)': ([value]) => ({ contain: `"${value}"` }),
  'contain-[<value>]': ([value]) => ({ contain: `"${value}"` }),
  'contain-${<code>}': ([value]) => ({ contain: value }),

  // touch-action
  'touch-(<token>)': ([value]) => ({ touchAction: `"${value}"` }),
  'touch-[<value>]': ([value]) => ({ touchAction: `"${value}"` }),
  'touch-${<code>}': ([value]) => ({ touchAction: value }),

  // backdrop-filter
  'backdrop-filter-(<token>)': ([value]) => ({ backdropFilter: `"${value}"` }),
  'backdrop-filter-[<value>]': ([value]) => ({ backdropFilter: `"${value}"` }),
  'backdrop-filter-${<code>}': ([value]) => ({ backdropFilter: value }),

  // background-blend-mode
  'mix-blend-(<token>)': ([value]) => ({ mixBlendMode: `"${value}"` }),
  'mix-blend-[<value>]': ([value]) => ({ mixBlendMode: `"${value}"` }),
  'mix-blend-${<code>}': ([value]) => ({ mixBlendMode: value }),

  // background-color
  'bg-<background-color-variable>': ([value]) => ({ backgroundColor: `"$${value}"` }),
  'bg-[<color>]': ([value]) => ({ backgroundColor: `"${value}"` }),
  'bg-(<token>)': ([value]) => ({ backgroundColor: `"${value}"` }),
  'bg-${<code>}': ([value]) => ({ backgroundColor: value }),

  // background-image
  'bg-image-<background-image-variable>': ([value]) => ({ backgroundImage: `"$${value}"` }),
  'bg-[<value>]': ([value]) => ({ backgroundImage: `"${value}"` }),
  'bg-image-(<token>)': ([value]) => ({ backgroundImage: `"${value}"` }),
  'bg-image-[<value>]': ([value]) => ({ backgroundImage: `"${value}"` }),
  'bg-image-${<code>}': ([value]) => ({ backgroundImage: value }),

  // background-origin
  'bg-origin-(<token>)': ([value]) => ({ backgroundOrigin: `"${value}"` }),
  'bg-origin-[<value>]': ([value]) => ({ backgroundOrigin: `"${value}"` }),
  'bg-origin-${<code>}': ([value]) => ({ backgroundOrigin: value }),

  // background-position
  'bg-position-<background-position-variable>': ([value]) => ({
    backgroundPosition: `"$${value}"`,
  }),
  'bg-[<size>]': ([value]) => ({ backgroundPosition: `"$${value}"` }),
  'bg-position-[<value>]': ([value]) => ({ backgroundPosition: `"${value}"` }),
  'bg-position-(<token>)': ([value]) => ({ backgroundPosition: `"${value}"` }),
  'bg-position-${<code>}': ([value]) => ({ backgroundPosition: value }),

  //background-repeat
  'bg-repeat-(<token>)': ([value]) => ({ backgroundRepeat: `"${value}"` }),
  'bg-repeat-[<value>]': ([value]) => ({ backgroundRepeat: `"${value}"` }),
  'bg-repeat-${<code>}': ([value]) => ({ backgroundRepeat: value }),

  //background-size
  'bg-<background-size-variable>': ([value]) => ({ backgroundSize: `"$${value}"` }),
  'bg-size-(<token>)': ([value]) => ({ backgroundSize: `"${value}"` }),
  'bg-size-[<value>]': ([value]) => ({ backgroundSize: `"${value}"` }),
  'bg-size-${<code>}': ([value]) => ({ backgroundSize: value }),

  //background-clip
  'bg-clip-(<token>)': ([value]) => ({ backgroundClip: `"${value}"` }),
  'bg-clip-[<value>]': ([value]) => ({ backgroundClip: `"${value}"` }),
  'bg-clip-${<code>}': ([value]) => ({ backgroundClip: value }),

  // background-blend-mode
  'bg-blend-(<token>)': ([value]) => ({ backgroundBlendMode: `"${value}"` }),
  'bg-blend-[<value>]': ([value]) => ({ backgroundBlendMode: `"${value}"` }),
  'bg-blend-${<code>}': ([value]) => ({ backgroundBlendMode: value }),

  //background-attachment
  'bg-attachment-(<token>)': ([value]) => ({ backgroundAttachment: `"${value}"` }),
  'bg-attachment-[<value>]': ([value]) => ({ backgroundAttachment: `"${value}"` }),
  'bg-attachment-${<code>}': ([value]) => ({ backgroundAttachment: value }),

  // clip-path
  'clip-path-(<token>)': ([value]) => ({ clipPath: `"${value}"` }),
  'clip-path-[<value>]': ([value]) => ({ clipPath: `"${value}"` }),
  'clip-path-${<code>}': ([value]) => ({ clipPath: value }),

  // caret-color
  'caret-<caret-color-variable>': ([value]) => ({ caretColor: `"$${value}"` }),
  'caret-(<token>)': ([value]) => ({ caretColor: `"${value}"` }),
  'caret-[<value>]': ([value]) => ({ caretColor: `"${value}"` }),
  'caret-${<code>}': ([value]) => ({ caretColor: value }),

  // transform-style
  'transform-style-(<token>)': ([value]) => ({ transformStyle: `"${value}"` }),
  'transform-style-[<value>]': ([value]) => ({ transformStyle: `"${value}"` }),
  'transform-style-${<code>}': ([value]) => ({ transformStyle: value }),

  // text-emphasis
  'text-emphasis-(<token>)': ([value]) => ({ textEmphasis: `"${value}"` }),
  'text-emphasis-[<value>]': ([value]) => ({ textEmphasis: `"${value}"` }),
  'text-emphasis-${<code>}': ([value]) => ({ textEmphasis: value }),

  // border-image
  'border-image-[<value>]': ([value]) => ({ borderImage: `"${value}"` }),
  'border-image-(<token>)': ([value]) => ({ borderImage: `"${value}"` }),
  'border-image-${<code>}': ([value]) => ({ borderImage: value }),

  // float
  'float-(<token>)': ([value]) => ({ float: `"${value}"` }),
  'float-[<value>]': ([value]) => ({ float: `"${value}"` }),
  'float-${<code>}': ([value]) => ({ float: value }),

  // content
  'content-(<token>)': ([value]) => ({ content: `"${value}"` }),
  'content-[<value>]': ([value]) => ({ content: `"${value}"` }),
  'content-${<code>}': ([value]) => ({ content: value }),

  // overflow-block
  'overflow-block-(<token>)': ([value]) => ({ overflowBlock: `"${value}"` }),
  'overflow-block-[<value>]': ([value]) => ({ overflowBlock: `"${value}"` }),
  'overflow-block-${<code>}': ([value]) => ({ overflowBlock: value }),

  // overflow-inline
  'overflow-inline-(<token>)': ([value]) => ({ overflowInline: `"${value}"` }),
  'overflow-inline-[<value>]': ([value]) => ({ overflowInline: `"${value}"` }),
  'overflow-inline-${<code>}': ([value]) => ({ overflowInline: value }),

  // mask
  'mask-[<value>]': ([value]) => ({ mask: `"${value}"` }),
  'mask-(<token>)': ([value]) => ({ mask: `"${value}"` }),
  'mask-${<code>}': ([value]) => ({ mask: value }),
  'mask-image-[<value>]': ([value]) => ({ maskImage: `"${value}"` }),
  'mask-image-(<token>)': ([value]) => ({ maskImage: `"${value}"` }),
  'mask-image-${<code>}': ([value]) => ({ maskImage: value }),
  'mask-border-[<value>]': ([value]) => ({ maskBorder: `"${value}"` }),
  'mask-border-(<token>)': ([value]) => ({ maskBorder: `"${value}"` }),
  'mask-border-${<code>}': ([value]) => ({ maskBorder: value }),
  'mask-border-mode-[<value>]': ([value]) => ({ maskBorderMode: `"${value}"` }),
  'mask-border-mode-(<token>)': ([value]) => ({ maskBorderMode: `"${value}"` }),
  'mask-border-mode-${<code>}': ([value]) => ({ maskBorderMode: value }),
  'mask-border-outset-[<value>]': ([value]) => ({ maskBorderOutset: `"${value}"` }),
  'mask-border-outset-(<token>)': ([value]) => ({ maskBorderOutset: `"${value}"` }),
  'mask-border-outset-${<code>}': ([value]) => ({ maskBorderOutset: value }),
  'mask-border-repeat-[<value>]': ([value]) => ({ maskBorderRepeat: `"${value}"` }),
  'mask-border-repeat-(<token>)': ([value]) => ({ maskBorderRepeat: `"${value}"` }),
  'mask-border-repeat-${<code>}': ([value]) => ({ maskBorderRepeat: value }),
  'mask-border-slice-[<value>]': ([value]) => ({ maskBorderSlice: `"${value}"` }),
  'mask-border-slice-(<token>)': ([value]) => ({ maskBorderSlice: `"${value}"` }),
  'mask-border-slice-${<code>}': ([value]) => ({ maskBorderSlice: value }),
  'mask-border-source-[<value>]': ([value]) => ({ maskBorderSource: `"${value}"` }),
  'mask-border-source-(<token>)': ([value]) => ({ maskBorderSource: `"${value}"` }),
  'mask-border-source-${<code>}': ([value]) => ({ maskBorderSource: value }),
  'mask-border-width-[<value>]': ([value]) => ({ maskBorderWidth: `"${value}"` }),
  'mask-border-width-(<token>)': ([value]) => ({ maskBorderWidth: `"${value}"` }),
  'mask-border-width-${<code>}': ([value]) => ({ maskBorderWidth: value }),
  'mask-clip-[<value>]': ([value]) => ({ maskClip: `"${value}"` }),
  'mask-clip-(<token>)': ([value]) => ({ maskClip: `"${value}"` }),
  'mask-clip-${<code>}': ([value]) => ({ maskClip: value }),
  'mask-composite-[<value>]': ([value]) => ({ maskComposite: `"${value}"` }),
  'mask-composite-(<token>)': ([value]) => ({ maskComposite: `"${value}"` }),
  'mask-composite-${<code>}': ([value]) => ({ maskComposite: value }),
  'mask-mode-[<value>]': ([value]) => ({ maskMode: `"${value}"` }),
  'mask-mode-(<token>)': ([value]) => ({ maskMode: `"${value}"` }),
  'mask-mode-${<code>}': ([value]) => ({ maskMode: value }),
  'mask-origin-[<value>]': ([value]) => ({ maskOrigin: `"${value}"` }),
  'mask-origin-(<token>)': ([value]) => ({ maskOrigin: `"${value}"` }),
  'mask-origin-${<code>}': ([value]) => ({ maskOrigin: value }),
  'mask-position-[<value>]': ([value]) => ({ maskPosition: `"${value}"` }),
  'mask-position-(<token>)': ([value]) => ({ maskPosition: `"${value}"` }),
  'mask-position-${<code>}': ([value]) => ({ maskPosition: value }),
  'mask-repeat-[<value>]': ([value]) => ({ maskRepeat: `"${value}"` }),
  'mask-repeat-(<token>)': ([value]) => ({ maskRepeat: `"${value}"` }),
  'mask-repeat-${<code>}': ([value]) => ({ maskRepeat: value }),
  'mask-size-[<value>]': ([value]) => ({ maskSize: `"${value}"` }),
  'mask-size-(<token>)': ([value]) => ({ maskSize: `"${value}"` }),
  'mask-size-${<code>}': ([value]) => ({ maskSize: value }),
  'mask-type-[<value>]': ([value]) => ({ maskType: `"${value}"` }),
  'mask-type-(<token>)': ([value]) => ({ maskType: `"${value}"` }),
  'mask-type-${<code>}': ([value]) => ({ maskType: value }),
}
