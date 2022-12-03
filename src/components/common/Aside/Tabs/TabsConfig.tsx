
export const TABS_CONFIG = [
    {
        id: 1,
        title: "Home",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4537 0.803197L16.4558 4.49793C17.4198 5.1956 17.9934 6.31112 18 7.50109V14.1895C17.938 16.3342 16.1566 18.0268 14.0116 17.979H3.99789C1.8492 18.032 0.0619475 16.338 0 14.1895V7.50109C0.00659331 6.31112 0.580187 5.1956 1.54421 4.49793L6.54632 0.803197C8.00682 -0.267732 9.99318 -0.267732 11.4537 0.803197ZM4.73684 13.9716H13.2632C13.6556 13.9716 13.9737 13.6535 13.9737 13.2611C13.9737 12.8687 13.6556 12.5506 13.2632 12.5506H4.73684C4.34443 12.5506 4.02632 12.8687 4.02632 13.2611C4.02632 13.6535 4.34443 13.9716 4.73684 13.9716Z" fill="#80858B"/>
        </svg>
    },
    {
        id: 2,
        title: "Trends",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0511 2L10.6811 4.8C9.70211 6.80035 8.39006 8.61962 6.80106 10.18L6.62106 10.35C5.60052 11.3408 5.01742 12.6977 5.00106 14.12V14.3C4.97403 17.0851 6.63366 19.6101 9.20106 20.69L9.46106 20.8C11.1449 21.5152 13.0472 21.5152 14.7311 20.8H14.7911C17.3776 19.6762 19.0372 17.1099 19.0011 14.29V9.95C18.1391 11.9185 16.5737 13.4946 14.6111 14.37C14.6111 14.37 14.6111 14.37 14.5511 14.37C14.4911 14.37 13.7911 14.66 13.4911 14.37C13.2231 14.0989 13.1974 13.6712 13.4311 13.37L13.5011 13.32H13.5511C15.8468 11.575 16.382 8.34172 14.7711 5.95C13.4711 3.97 12.0511 2 12.0511 2Z" fill="#80858B"/>
        </svg>
    },
    {
        id: 3,
        title: "Favorites",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.77 20.7843L12.48 17.4943C12.0722 17.1843 11.5078 17.1843 11.1 17.4943L6.77 20.7843C6.45424 21.0381 6.02377 21.0959 5.65228 20.9343C5.28078 20.7727 5.02957 20.4184 5 20.0143V5.95431C5.03878 5.12998 5.40465 4.35513 6.01656 3.80141C6.62847 3.24769 7.4359 2.96081 8.26 3.00431H15.26C16.0891 2.96643 16.8987 3.26256 17.5077 3.82643C18.1166 4.39029 18.4741 5.17479 18.5 6.00431V20.0143C18.4611 20.4038 18.2163 20.7426 17.8586 20.9017C17.501 21.0609 17.0855 21.0161 16.77 20.7843Z" fill="#80858B"/>
        </svg>
    },
    {
        id: 4,
        title: "Settings",
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.2264 8.73077C19.4169 9.19491 19.8683 9.49854 20.37 9.5C21.0509 9.50549 21.6 10.0591 21.6 10.74V12.88C21.6 13.5648 21.0448 14.12 20.36 14.12C19.8583 14.1215 19.4069 14.4251 19.2164 14.8892C19.026 15.3534 19.134 15.8865 19.49 16.24C19.9676 16.7295 19.9676 17.5106 19.49 18L17.99 19.5C17.5005 19.9776 16.7195 19.9776 16.23 19.5C16.0042 19.2608 15.6889 19.1267 15.36 19.13C15.0294 19.1273 14.7114 19.2568 14.4767 19.4896C14.242 19.7225 14.11 20.0394 14.11 20.37C14.11 21.0548 13.5548 21.61 12.87 21.61H10.73C10.0452 21.61 9.49 21.0548 9.49 20.37C9.49001 20.0394 9.358 19.7225 9.12328 19.4896C8.88857 19.2568 8.5706 19.1273 8.24 19.13C7.91111 19.1267 7.59576 19.2608 7.37 19.5C6.88055 19.9776 6.09945 19.9776 5.61 19.5L4.11 18C3.63237 17.5106 3.63237 16.7295 4.11 16.24C4.46605 15.8865 4.57402 15.3534 4.38355 14.8892C4.19308 14.4251 3.7417 14.1215 3.24 14.12C2.91113 14.12 2.59573 13.9894 2.36319 13.7568C2.13064 13.5243 2 13.2089 2 12.88V10.74C2 10.0552 2.55517 9.5 3.24 9.5C3.7417 9.49854 4.19308 9.19491 4.38355 8.73077C4.57402 8.26664 4.46605 7.73346 4.11 7.38C3.63237 6.89055 3.63237 6.10945 4.11 5.62L5.61 4.12C6.09945 3.64237 6.88055 3.64237 7.37 4.12C7.59576 4.35919 7.91111 4.49331 8.24 4.49C8.57234 4.49269 8.89185 4.36186 9.12685 4.12685C9.36186 3.89185 9.49269 3.57234 9.49 3.24C9.49 2.55517 10.0452 2 10.73 2H12.88C13.5648 2 14.12 2.55517 14.12 3.24C14.1173 3.57234 14.2481 3.89185 14.4831 4.12685C14.7182 4.36186 15.0377 4.49269 15.37 4.49C15.6989 4.49331 16.0142 4.35919 16.24 4.12C16.7295 3.64237 17.5105 3.64237 18 4.12L19.5 5.62C19.9776 6.10945 19.9776 6.89055 19.5 7.38C19.144 7.73346 19.036 8.26664 19.2264 8.73077ZM8.34 11.81C8.34 9.8991 9.8891 8.35 11.8 8.35C12.7177 8.35 13.5977 8.71454 14.2466 9.36341C14.8955 10.0123 15.26 10.8924 15.26 11.81C15.26 13.7209 13.7109 15.27 11.8 15.27C9.8891 15.27 8.34 13.7209 8.34 11.81Z" fill="#80858B"/>
        </svg>
    },
]