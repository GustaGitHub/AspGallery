# AspGallery
- Galeria de Fotos Web baseado em CRUD, onde é possível Listar, Adicionar, Editar e Excluir imagens

## Tecnologias utilizadas:
### Front-End:
- React.js 18.2
- Styled-Components
  
### Back-End:
- ASP. NET CORE 7 WebAPI
- Entity Framework Core 7.0 (Pomelo)

### Banco de Dados:
- MySQL 8.0

## Métodologias e Conceitos aplicados neste Projeto:
- API RESTFUL
- Clean Code
- Injeção de Dependências
- Design Responsivo

## EndPoints API:
 - GET:
    - Listar todas as imagens:  /API/AspGallery/Pictures
    - Listar imagem selecionada:  /API/AspGallery/Picture?idPicture={ID}
 - POST:
    - Salvar Imagem: API/AspGallery/Picture
      - Corpo da Requisição:
        - NamePicture -> Nome da Imagem 
        - TypePicture -> Extensão da Imagem
        - SizePicture -> Tamanho da Imagem
        - BlobPicture -> Imagem convertida em Base64
 - PUT:
    - Editar nome da Imagem:  /API/AspGallery/Picture?idPicture={ID}&&newNamePicture={Novo Nome}
 - DELETE:
    - Excluir imagem: /API/AspGallery/Picture?idPicture={ID} 
    
## Pré-visualização:
<img src="https://user-images.githubusercontent.com/86331999/224591382-a66149f7-0c45-4672-9ada-3c7300952a39.gif" alt="Pré visualização do projeto"/>
