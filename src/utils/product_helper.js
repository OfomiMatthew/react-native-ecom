export const increment = (setCount, count) => {
  setCount(count + 1);
};

export const decrement = (setCount, count) => {
  if (count > 1) {
    setCount(count - 1);
  }
};

export const handlePress = async (userLogin, navigation, item, setRfetch) => {
  if (userLogin == false) {
    console.log("handle press");
  } else {
    try{
        const userId = 1;
        const data = {
          userId: userId,
          productId: item.id,
          imageUrl: item.path,
          price: item.price,
          title: item.title,
        };
        console.log("Sending mock data", data);
        const response = await mockApiCall(data);
    
        if (response.status == 201 || response.status == 200) {
          setRfetch(response.data.productId);
          console.log("Set fav item")
        }
    }
    catch(e){
        console.log(e)
    }
  }
};



export const handleCart = async (navigation,item,count,userLogin,setUserCart) => {
    
      if(userLogin == false){
        console.log("handle cart");
      }else{
        console.log("user has logged in")
      }
        
  }


const mockApiCall = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 201,
        data: { productId: data.productId },
      });
    }, 1000);
  });
};
