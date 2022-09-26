// data-panel
const mobileNav = document.querySelector('.footer-menu__wrapper')

const hideMobileNav = () => {
    mobileNav.classList.replace('footer-menu__wrapper', '_qnqe0zo')
}

document.querySelectorAll('[data-panel-sm]').forEach((messages) => {
    const conversation = document.querySelector(messages.dataset.panelSm)

    messages.addEventListener('click', (message) => {
        message.preventDefault()

        hideMobileNav()

        document.querySelector('._2x3iol > div').classList.replace('_ipnlcjr', 'inbox-container')

        document.querySelector('#inbox_panel').classList.replace('_1xxu4mif', '_pm6ka6k')
        conversation.classList.replace('_pm6ka6k', '_1xxu4mif')

        conversation?.querySelector('[data-button="close"]')?.addEventListener('click', () => {
            mobileNav.classList.replace('_qnqe0zo', 'footer-menu__wrapper')

            document.querySelector('._2x3iol > div').classList.replace('inbox-container', '_ipnlcjr')

            document.querySelector('#inbox_panel').classList.replace('_pm6ka6k', '_1xxu4mif')
            conversation.classList.replace('_1xxu4mif', '_pm6ka6k')
        })
    })
})

document.querySelectorAll('[data-panel-details-sm]').forEach((conversations) => {
    const currentConversation = conversations.closest('section')
    const conversationDetails = document.querySelector(conversations.dataset.panelDetailsSm)

    conversations.addEventListener('click', (conversation) => {
        conversation.preventDefault()

        currentConversation.classList.replace('_1xxu4mif', '_pm6ka6k')
        conversationDetails.classList.replace('_pm6ka6k', '_1xxu4mif')

        conversationDetails.querySelector('[data-button="close"]').addEventListener('click', () => {
            currentConversation.classList.replace('_pm6ka6k', '_1xxu4mif')
            conversationDetails.classList.replace('_1xxu4mif', '_pm6ka6k')
        })
    })
})


const defaultPanelDetails = document.querySelector('#thread_details_panel_md')
defaultPanelDetails.querySelector('[data-button="close"]')
    ?.addEventListener('click', () => defaultPanelDetails.classList.toggle('hidden'))

document.querySelectorAll('[data-panel]').forEach((messages) => {
    const inboxPanel = document.querySelector('#inbox_panel_md')
    const conversation = document.querySelector(messages.dataset.panel)
    const conversationDetails = document.querySelector(messages.dataset.panelDetails)

    const conversationButtonClose = conversation?.querySelector('[data-button="close"]')
    const toggleConversationDetails = () => {
        if (conversationDetails.classList.contains('hidden')) {
            conversationButtonClose.classList = '_sq0plgu'
            conversationButtonClose.innerHTML = 'Hide details'
        } else {
            conversationButtonClose.classList = '_43he2wy'
            conversationButtonClose.innerHTML = 'Get details'
        }

        if (window.innerWidth < 1128) {
            inboxPanel.classList.toggle('hidden')
        }

        conversationDetails.classList.toggle('hidden')
        conversation.querySelector('._ss1ehk')?.classList.toggle('hidden')
    }

    conversation?.querySelector('[data-button="close"]')?.addEventListener('click', () => {
        toggleConversationDetails()
    })

    conversationDetails?.querySelector('[data-button="close"]')?.addEventListener('click', () => {
        toggleConversationDetails()
    })

    messages.addEventListener('click', (message) => {
        message.preventDefault()

        document.querySelector('#thread_panel_md').classList.add('hidden')

        defaultPanelDetails.classList.add('hidden')

        message.currentTarget.closest('#list_inbox_md').querySelectorAll('[data-panel]').forEach((e) => {
            if (e !== message) {
                e.classList = '_12ty3s'

                const currentConversation = document.querySelector(e.dataset.panel)
                const currentConversationDetails = document.querySelector(e.dataset.panelDetails)

                !currentConversation?.classList.contains('hidden') &&
                    currentConversation?.classList.add('hidden')

                !currentConversationDetails?.classList.contains('hidden') &&
                    currentConversationDetails?.classList.add('hidden')
            }
        })

        message.currentTarget.classList = '_159gpp2h'
        conversation?.classList.remove('hidden')

        if (window.innerWidth >= 1128) {
            conversationDetails?.classList.remove('hidden')

            if (conversationButtonClose) {
                conversationButtonClose.classList = '_sq0plgu'
                conversationButtonClose.innerHTML = 'Hide details'
            }
        }

        conversation.querySelector('._ss1ehk')?.classList.remove('hidden')

        const conversationContainer = conversation.querySelector('._f4l4c1')
        conversationContainer.scrollTo({ top: conversationContainer.scrollHeight })
    })
})

const reportWindowSize = () => {
    const defaultPanelDetails = document.querySelector('#thread_details_panel_md')
    const inboxPanel = document.querySelector('#inbox_panel_md')
    const message = document.querySelector('._159gpp2h')

    mq = window.matchMedia('(min-width: 1128px)');
    if (mq.matches) {
        document.querySelector('._1fdiyhjh')?.classList.replace('_1fdiyhjh', '_1aolh5ll')
        document.querySelectorAll('._ijm3lbp').forEach((e) => e.classList.replace('_ijm3lbp', '_15pihn5q'))
        document.querySelectorAll('._wdec1jj').forEach((e) => e.classList.replace('_wdec1jj', '_r61jg4l'))
        document.querySelector('._x6sr1rm')?.classList.replace('_x6sr1rm', '_1mz2k89o')
        document.querySelectorAll('._50rkbdl').forEach((e, index) => e.classList.replace('_50rkbdl', '_1mz2k89o'))

        defaultPanelDetails.querySelector('._11shkc8n').classList.add('hidden')
        defaultPanelDetails.querySelector('._15pihn5q')?.classList.remove('hidden')

        inboxPanel?.classList.contains('hidden') &&
            inboxPanel.classList.remove('hidden')

        if (!message) {
            defaultPanelDetails?.classList.contains('hidden') &&
                defaultPanelDetails.classList.remove('hidden')
        }

        message?.closest('#list_inbox_md')
            ?.querySelectorAll('[data-panel]')
            ?.forEach((e) => {
                if (e === message) {
                    const currentConversation = document.querySelector(e.dataset.panel)
                    const currentConversationDetails = document.querySelector(e.dataset.panelDetails)

                    const conversationButtonClose = currentConversation?.querySelector('[data-button="close"]')
                    if (conversationButtonClose) {
                        conversationButtonClose.classList = '_sq0plgu'
                        conversationButtonClose.innerHTML = 'Hide details'
                    }

                    currentConversation?.classList.contains('hidden') &&
                        currentConversation.classList.remove('hidden')

                    currentConversationDetails?.classList.contains('hidden') &&
                        currentConversationDetails.classList.remove('hidden')
                }
            })
    } else {
        document.querySelector('._1aolh5ll')?.classList.replace('_1aolh5ll', '_1fdiyhjh')
        document.querySelectorAll('._15pihn5q').forEach((e) => e.classList.replace('_15pihn5q', '_ijm3lbp'))
        document.querySelectorAll('._r61jg4l').forEach((e) => e.classList.replace('_r61jg4l', '_wdec1jj'))
        document.querySelectorAll('._1mz2k89o').forEach((e, index) => {
            index !== 0
                ? e.classList.replace('_1mz2k89o', '_50rkbdl')
                : e.classList.replace('_1mz2k89o', '_x6sr1rm')
        })

        defaultPanelDetails.querySelector('._11shkc8n').classList.remove('hidden')
        defaultPanelDetails.querySelector('._ijm3lbp')?.classList.add('hidden')

        message?.closest('#list_inbox_md')
            ?.querySelectorAll('[data-panel]')
            ?.forEach((e) => {
                if (e === message) {
                    const currentConversation = document.querySelector(e.dataset.panel)
                    const currentConversationDetails = document.querySelector(e.dataset.panelDetails)

                    const conversationButtonClose = currentConversation?.querySelector('[data-button="close"]')
                    if (conversationButtonClose) {
                        conversationButtonClose.classList = '_43he2wy'
                        conversationButtonClose.innerHTML = 'Get details'
                    }

                    !currentConversationDetails?.classList.contains('hidden') &&
                        currentConversationDetails?.classList.add('hidden')
                }
            })
    }
}

reportWindowSize()

window.onresize = reportWindowSize;