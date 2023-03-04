import MainRender from '../../pages/main/main';

type AppRenderProps = {
  placeSelection: number;
}

function App({placeSelection}:AppRenderProps): JSX.Element {
  return (
    <MainRender placeSelection={placeSelection} />
  );
}

export default App;
