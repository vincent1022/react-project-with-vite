import ViteImg from '../../components/assets/image/vite.png'
import './index.css'

export default function Index() {
  return (
    <>
      <div className="wrapper">
        <h1>Welcome To My Project</h1>
        <p>我是誰!我怎麼在這!</p>
        <img src={ViteImg} alt="Vite Image" />
      </div>
    </>
  );
}