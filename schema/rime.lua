-- rime.lua

-- 過濾常用漢字
local yuhao_char_filter = require("xuma/yuhao_char_filter")
yuhao_char_first = yuhao_char_filter.yuhao_char_first
yuhao_char_only = yuhao_char_filter.yuhao_char_only

-- 全碼後置和全碼出單
forfudan_single_char_only_for_full_code = require("xuma/forfudan_single_char_only_for_full_code")
xuma_postpone_full_code = require("xuma/xuma_postpone_full_code")

-- 幫助
forfudan_helper = require("xuma/forfudan_helper")