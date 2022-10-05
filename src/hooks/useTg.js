const tg = window.Telegram.WebApp

export function useTg() {
    const onClose = () => {
        tg.close()
    }

    const onToggleBtn = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }
    return {
        tg,
        onToggleBtn,
        onClose,
        user: tg.initDataUnsafe?.user,

    }
}