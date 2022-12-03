export function handleCatchError (error: {}) {
    switch (error) {
        case "auth/wrong-password":
            return { error: true, text: "Неверный пароль" }
        case "auth/user-not-found":
            return { error: true, text: "Пользователя не существует" }
        case "auth/too-many-requests":
            return { error: true, text: "Попробуйте войти позже" }
        case "auth/invalid-email":
            return { error: true, text: "Неверный email" }
        case "auth/weak-password":
            return { error: true, text: "Слишком легкий пароль"}
        case "auth/internal-error":
            return { error: true, text: "Введите пароль"}
        case "auth/email-already-in-use":
            return { error: true, text: "Данный email уже используется"}
        default: return { error: true, text: "Что-то пошло не так, попробуйте еще раз" }
    }
}