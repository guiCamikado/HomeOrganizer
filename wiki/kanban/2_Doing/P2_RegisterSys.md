O titulo do arquivo deve conter: Prioridade[1 a 5]_Titulo

# RegisterSys

    LOG
        Created: 07-10-2025
        Doing: 07-10-2025
        Done:

### Description

    Fazer um sistema de registro de usuários que vá para o banco de dados. Atualmente o banco de dados armazena:

            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            email TEXT NOT NULL UNIQUE,
            password_hash TEXT NOT NULL,
            name TEXT,
            last_name TEXT,
            age INTEGER,
            role TEXT DEFAULT 'user',
            is_active INTEGER DEFAULT 1,  -- 1 = true, 0 = false
            first_login TEXT,             -- ISO 8601: '2025-10-07 12:34:56'
            last_login TEXT,
            failed_login_attempts INTEGER DEFAULT 0,
            created_at TEXT DEFAULT (DATETIME('now')),
            updated_at TEXT

    Em resumo é necessário criar um post que envie para um link ainda não especificado os valores username, email, password, name, lastName, age (data de nascimento) e firstLogin (Data em que conta fora criada)... etc...

### To Do List

- [ ] Criar classe de uso geral para get, post.
    - [ ] Get Done
    - [ ] Post Done

- [ ] Completar formulário de registro
    - [ ] Formulário contem todos os campos necessários
    - [ ] Post do formulário está funcionando

- [ ] Completar formulário de login
    - [ X ] Formulário contem todos os campos necessários || 07/10/2025
    - [ ] Post do formulário está funcionando
