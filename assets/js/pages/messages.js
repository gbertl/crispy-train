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
            conversationButtonClose.querySelector('span').innerHTML = 'Hide details'
        } else {
            conversationButtonClose.classList = '_43he2wy'
            conversationButtonClose.querySelector('span').innerHTML = 'Get details'
        }

        if (window.innerWidth < 1440) {
            inboxPanel.classList.contains('_1fdiyhjh')
                ? inboxPanel.classList.replace('_1fdiyhjh', '_x6sr1rm')
                : inboxPanel.classList.replace('_x6sr1rm', '_1fdiyhjh')

            let inboxPanelTransition = inboxPanel.children[0]

            if (inboxPanelTransition.classList.contains('_ijm3lbp')) {
                inboxPanelTransition.style.width = '375px';
                inboxPanelTransition.classList.replace('_ijm3lbp', '_1fls1kdh')
                inboxPanelTransition.classList.replace('_1fls1kdh', '_11shkc8n')
                inboxPanelTransition.removeAttribute('style')
            } else {
                inboxPanelTransition.style.width = '375px';
                inboxPanelTransition.classList.replace('_11shkc8n', '_1qf4j2qh')
                inboxPanelTransition.classList.replace('_1qf4j2qh', '_ijm3lbp')
                inboxPanelTransition.removeAttribute('style')
            }

            conversation.classList.contains('_wdec1jj')
                ? conversation.classList.replace('_wdec1jj', '_phfc55f')
                : conversation.classList.replace('_phfc55f', '_wdec1jj')

            conversationDetails.classList.contains('hidden')
                && conversationDetails.classList.remove('hidden')

            conversationDetails.classList.contains('_50rkbdl')
                ? conversationDetails.classList.replace('_50rkbdl', '_x6sr1rm')
                : conversationDetails.classList.replace('_x6sr1rm', '_50rkbdl')

        } else {
            conversationDetails.classList.contains('_1mz2k89o')
                ? conversationDetails.classList.replace('_1mz2k89o', '_o8ljzwp')
                : conversationDetails.classList.replace('_o8ljzwp', '_1mz2k89o')

            let conversationDetailsTransition = conversationDetails.children[0]

            if (conversationDetailsTransition.classList.contains('_15pihn5q')) {
                conversationDetailsTransition.style.width = '375px';
                conversationDetailsTransition.classList.replace('_15pihn5q', '_1fls1kdh')
                conversationDetailsTransition.classList.replace('_1fls1kdh', '_1obz29zo')
                conversationDetailsTransition.removeAttribute('style')
            } else {
                conversationDetailsTransition.style.width = '375px';
                conversationDetailsTransition.classList.replace('_1obz29zo', '_1qf4j2qh')
                conversationDetailsTransition.classList.replace('_1qf4j2qh', '_15pihn5q')
                conversationDetailsTransition.removeAttribute('style')
            }
        }

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

        if (window.innerWidth >= 1440) {
            conversationDetails?.classList.replace('_o8ljzwp', '_1mz2k89o')
            conversationDetails?.children[0].classList.replace('_1obz29zo', '_15pihn5q')
            conversationDetails?.classList.remove('hidden')

            if (conversationButtonClose) {
                conversationButtonClose.classList = '_sq0plgu'
                conversationButtonClose.querySelector('span').innerHTML = 'Hide details'
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

    mq = window.matchMedia('(min-width: 1440px)');
    if (mq.matches) {
        inboxPanel.classList = '_1aolh5ll'
        inboxPanel.children[0].classList = '_ijm3lbp'

        document.querySelector('._1fdiyhjh')?.classList.replace('_1fdiyhjh', '_1aolh5ll')
        document.querySelectorAll('._ijm3lbp').forEach((e) => e.classList.replace('_ijm3lbp', '_15pihn5q'))
        document.querySelectorAll('._1obz29zo').forEach((e) => e.classList.replace('_1obz29zo', '_15pihn5q'))
        document.querySelectorAll('._wdec1jj').forEach((e) => e.classList.replace('_wdec1jj', '_r61jg4l'))
        document.querySelectorAll('._x6sr1rm').forEach((e) => e.classList.replace('_x6sr1rm', '_1mz2k89o'))
        document.querySelectorAll('._50rkbdl').forEach((e) => e.classList.replace('_50rkbdl', '_1mz2k89o'))

        defaultPanelDetails.querySelector('._11shkc8n').classList.add('hidden')
        defaultPanelDetails.querySelector('._15pihn5q')?.classList.remove('hidden')

        inboxPanel?.classList.contains('_1fdiyhjh') &&
            inboxPanel.classList.replace('_1fdiyhjh', '_x6sr1rm')

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
                        conversationButtonClose.querySelector('span').innerHTML = 'Hide details'
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
        document.querySelectorAll('._1mz2k89o').forEach((e) => e.classList.replace('_1mz2k89o', '_x6sr1rm'))
        document.querySelectorAll('._o8ljzwp').forEach((e) => e.classList.replace('_o8ljzwp', '_x6sr1rm'))

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
                        conversationButtonClose.querySelector('span').innerHTML = 'Get details'
                    }
                }
            })
    }
}

reportWindowSize()

window.onresize = reportWindowSize;