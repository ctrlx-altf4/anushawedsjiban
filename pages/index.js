import Head from 'next/head';
import Fireworks from '../components/fireworks'

const Index=()=>{
    return(
        <div className="container-fluid">
            <Head>
                <title>Anusha & Jiban</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script charset="UTF-8" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
                <script charset="UTF-8" src="https://jackrugile.com/lab/fireworks-v2/js/dat.gui.min.js"></script>
            </Head>
            <Fireworks />
        </div>
    )
}


export default Index;


