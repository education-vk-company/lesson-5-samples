const MyButton = () => (
	<button>This is a button</button>
);

export const Wrapper = (
  // или можно через фрагмент
  <div>
    <h1>Welcome to my app</h1>
    <MyButton /> {/* наш компонент выше */}
  </div>
);
