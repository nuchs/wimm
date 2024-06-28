export default config;

function config(segments) {
  return `
  <h2>Configuration</h2>
  <h3>Segments</h3>
  <table>
    <caption>Current Segments</caption>
    <thead>
      <tr>
        <th scope=col >Segment</th>
        <th scope=col>Colour</th>
        <th scope=col>Hits</th>
      </tr>
    </thead>
    <tbody>
      ${segments
        .map(
          (s) => `
      <tr id="segment-${s.id}">
        <td> 
          <input 
            type="text" 
            name="segment-name"
            value="${s.name}"
            hx-trigger="change" 
            hx-patch="/config/segment"
            hx-vals='{"id": "${s.id}"}'
            hx-target="#segment-${s.id}">
        </td>
        <td>${s.colour}</td>
        <td>${s.hits}</td>
      </tr>
      `,
        )
        .join("")}
    </tbody>
  </table>
  <h3>Colours</h3>
  `;
}

config.layout = "layout";
