module.exports = {
  '<number>': '([0-9]+(?:.[0-9]+)?)',
  '<percentage>': '([0-9]+(?:.[0-9]+)?%)',
  '<fraction>': '([0-9]+(?:.[0-9]+)?)',
  '<ratio>': '([0-9]+/[0-9]+)',
  '<color>': // https://reactnative.dev/docs/colors
    '(' +
    '(?:#[a-fA-F0-9]{3}|#[a-fA-F0-9]{4}|#[a-fA-F0-9]{6}|#[a-fA-F0-9]{8})|' + // #f00 #f00f #ff0000 #ff0000ff
    '(?:rgb\\(\\s*[0-9]{1,3}\\s*,\\s*[0-9]{1,3}\\s*,\\s*[0-9]{1,3}\\s*\\))|' + // rgb(255, 0, 0)
    '(?:rgb\\(\\s*[0-9]{1,3}\\s+[0-9]{1,3}\\s+[0-9]{1,3}\\s*\\))|' + // rgb(255 0 0)
    '(?:rgba\\(\\s*[0-9]{1,3}\\s*,\\s*[0-9]{1,3}\\s*,\\s*[0-9]{1,3}\\s*,\\s*(?:0|1|0?\\.[0-9]+)\\s*\\))|' + // rgba(255, 0, 0, 1)
    '(?:rgba\\(\\s*[0-9]{1,3}\\s+[0-9]{1,3}\\s+[0-9]{1,3}\\s*\\/\\s*(?:0|1|0?\\.[0-9]+)\\s*\\))|' + // rgba(255 0 0 / 1)
    '(?:hsl\\(\\s*[0-9]+\\s*,\\s*[0-9]+%\\s*,\\s*[0-9]+%\\s*\\))|' + // hsl(0, 100%, 50%)
    '(?:hsl\\(\\s*[0-9]+\\s+[0-9]+%\\s+[0-9]+%\\s*\\))|' + // hsl(0 100% 50%)
    '(?:hsla\\(\\s*[0-9]+\\s*,\\s*[0-9]+%\\s*,\\s*[0-9]+%\\s*,\\s*(?:0|1|0?\\.[0-9]+)\\s*\\))|' + // hsla(0, 100%, 50%, 1)
    '(?:hsla\\(\\s*[0-9]+\\s+[0-9]+%\\s+[0-9]+%\\s*\\/\\s*(?:0|1|0?\\.[0-9]+)\\s*\\))|' + // hsla(0 100% 50% / 1)
    '(?:hwb\\(\\s*[0-9]+\\s*,\\s*[0-9]+%\\s*,\\s*[0-9]+%\\s*\\))|' + // hwb(0, 0%, 0%)
    '(?:hwb\\(\\s*[0-9]+\\s+[0-9]+%\\s+[0-9]+%\\s*\\))|' + // hwb(0 0% 0%)
    '(?:0x[a-fA-F0-9]{8})|' + // 0xff0000ff
    ')',
  '<value>': '(.+)',
  '<code>': '(.+)',
}
