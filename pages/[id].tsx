import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';
import Layout from './layout'


const userInfoIndex = observer(() => {
  const router = useRouter();

  useEffect(()=>{

    console.log(router.query);
    

  },[router])



  return (
    <Layout>
     
    </Layout>
  );
});



export default userInfoIndex;
