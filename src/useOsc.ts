import osc from 'osc/dist/osc-browser';

const serverUrl = 'ws://127.0.0.1:8090';

const useOsc = () => {
  const oscPort = new osc.WebSocketPort({
    url: serverUrl,
    metadata: true,
  });

  oscPort.open();

  return oscPort;
};

export default useOsc;
