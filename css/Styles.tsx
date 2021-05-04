import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

    container:{
        flex:1 ,
        backgroundColor: '#ffffff',
    },

    foto:{
        width: "100%",
        height: 250,
    },

    nomeproduto:{
        fontSize:22,
        fontWeight:"bold",
        
    },

    preco:{
        fontSize:18,
        color:'#070',
        marginTop:5,

    },

    cxProduto:{
        width:"47.5%",
        margin:5,
        shadowColor:"#000",
        shadowOpacity:0.5,
        shadowRadius:10,
        shadowOffset:{width:5, height:5},
        elevation:3,
        padding:6
    },

    display:{
        flexDirection:'row',
        flexWrap:"wrap",
    },

    acesso:{
        borderColor:'black',
        borderWidth:2,
        width:"85%",
        backgroundColor:'#b3e5fc',
        borderRadius:15,
        padding:5,
        marginTop:12,

    },

    txtacesso:{
        color:'#000000',
        fontWeight:'bold',
        fontSize:14,
    },

    fotodetalhe:{
        width:400,
        height:400
    },

    descricao:{
        fontSize:18,
        marginTop:8,
        
    },

    precodetalhe:{
        fontSize:40,
        color:'#070',
        marginTop:25,
        textAlign:'center'

    },

    idproduto:{
        fontSize:10,
        margin:5,
    },

    btncarrinho:{
        backgroundColor:'green',
        width:'47%',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:40,
        padding:10,
        borderRadius:25,

    },

    txtcarrinho:{
        color:'#fff',
        fontWeight:'bold',

    },

    btncadastro:{
        backgroundColor:'green',
        width:'47%',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:40,
        padding:10,
        borderRadius:25,

    },

    input:{
        width:'90%',
        padding:10,
        marginBottom:5,
        borderBottomColor:'silver',
        borderBottomWidth:1,
        marginLeft:'auto',
        marginRight:'auto'

    },









})