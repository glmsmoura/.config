let g:airline_theme='minimalist'
hi Pmenu ctermfg=234 ctermbg=239 guibg=None
hi Number ctermfg=193
hi String ctermfg=178
hi CocWarningSign ctermfg=166

call plug#begin('~/.vim/plugged')

Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'arcticicestudio/nord-vim'
Plug 'lambdalisue/suda.vim'

call plug#end()

colorscheme nord



