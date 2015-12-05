export default {

  container: {
    display: 'flex',
    flexBasis: '800px',
  },

    projectsList: {
      flexBasis: '250px',
      flexShrink: 0,
    },

      projectItem: {
        backgroundColor: '#eee'
      },

        messageCounter: {
          color: '#666'
        },
        
        managersCounter: {
          color: '#999', 
          fontSize: '10px'
        },

        noManagersOnline: {
          color: 'red', 
          fontSize: '10px'
        },

    commentsList: {
      flexGrow: 1
    },

      iconPositive: {
        padding: '10px', 
        position: 'relative', 
        top: '3px'
      },
      
      iconNegative: {
        padding: '10px', 
        position: 'relative', 
        top: '3px'
      },

      commentWrapper: {
        boxShadow: 'none', 
        borderLeft: '1px solid #eee'
      },

      commentHeader: {
        padding: '16px 16px 0 16px'
      },

      commentActions: {
        paddingBottom: '1px', 
        paddingTop: '0', 
        borderTop: '1px solid #f5f5f5'
      },

      commentEmotionBtn: {
        paddingLeft: 0
      },

      postponeBtn: {
        color: '#999'
      }


}