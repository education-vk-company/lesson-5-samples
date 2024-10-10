const title = '<script>alert(\'Sie sind alle verhaftet!\')</script>';
const image = '<img src="https://placeimgxxx.com/320/320/any" onerror="alert(\'xss injection.jpg\')" />';

// This is injection-safe:
export const xssEl = <h1>{ title + image }</h1>;

// This is injection-insecure:
export const xssEl2 = <h1 dangerouslySetInnerHTML={ { __html: title + image } }></h1>;
