🎵 AppMusica

AppMusica é um aplicativo de música criado com React Native e Expo. Ele permite que os usuários toquem, pausem e naveguem entre as músicas disponíveis, proporcionando uma experiência musical intuitiva e agradável.

📱 Funcionalidades

- Reprodução de Músicas: Toque, pause, avance ou volte para músicas anteriores com controles simples.
- Navegação Intuitiva: Interface de usuário fácil de usar, com botões para navegação entre as músicas.
- Persistência de Estado: O aplicativo mantém o estado da reprodução, mesmo quando trocamos de música.
  
 🚀 Como Executar o Projeto

1. Clone o Repositório:
    
    git clone https://github.com/AlexandreLiberatto/AppMusica.git
  
2. Navegue até o diretório do projeto:
   
    cd AppMusica
    
3. Instale as dependências:
    
    npm install
  
4. Execute o aplicativo:
    
    npx expo start
    
5. Simule no dispositivo ou emulador:
    - Escaneie o QR Code com o aplicativo Expo Go (disponível na App Store e Google Play) ou execute em um emulador Android/iOS.

 🛠️ Tecnologias Utilizadas

- React Native: Framework para construção de aplicações móveis usando React.
- Expo: Plataforma para desenvolvimento, compilação e distribuição de aplicativos React Native.
- Expo-AV: Biblioteca usada para reprodução de áudio no aplicativo.

## 🎨 Layout

O design do aplicativo foi pensado para ser simples e funcional, com cores escuras predominantes para dar destaque aos controles de música.

 📂 Estrutura do Projeto

├── assets              # Arquivos de mídia e imagens do projeto
├── components          # Componentes reutilizáveis do aplicativo
├── .gitignore          # Arquivos e diretórios ignorados pelo Git
├── App.js              # Componente principal do aplicativo
├── app.json            # Configurações do aplicativo Expo
├── babel.config.js     # Configurações do Babel
├── package.json        # Dependências e scripts do projeto
└── Player.js           # Componente de player de música


 🚧 Melhorias Futuras

- Integração com serviços de streaming: Conectar o aplicativo a APIs de serviços de streaming de música.
- Playlists Personalizadas: Permitir que os usuários criem e gerenciem suas próprias playlists.
- Animações e Efeitos Visuais: Adicionar animações para tornar a experiência de usuário mais interativa e fluida.


