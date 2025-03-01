## Architecture Overview of the Application Layers

<table>
  <tr><td align="center" style="background-color:#6CA6CD; padding:10px; border-radius:6px;"><b>🟦 Components 🟦</b></td></tr>
  <tr><td align="center">⬆️</td></tr>
  <tr><td align="center" style="background-color:#32CD32; padding:10px; border-radius:6px;"><b>🟩 Custom Hook 🟩</b></td></tr>
  <tr><td align="center">⬆️</td></tr>
  <tr><td align="center" style="background-color:#FFD700; padding:10px; border-radius:6px;"><b>🟨 HTTP Service (todoService) 🟨</b></td></tr>
  <tr><td align="center">⬆️</td></tr>
  <tr><td align="center" style="background-color:#FF8C00; padding:10px; border-radius:6px;"><b>🟧 API Client 🟧</b></td></tr>
</table>

| **Layer**                                                                                                               | **Description**                                |
| ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| <span style="background-color: #ffcccb; padding: 3px 6px; border-radius: 4px;">Components</span>                        | Use the Custom Hook to access data.            |
| <span style="background-color: #ffff99; padding: 3px 6px; border-radius: 4px;">Custom Hook</span>                       | Encapsulates logic related to the HTTPService. |
| <span style="background-color: #cce5ff; padding: 3px 6px; border-radius: 4px;">HTTPService</span> (e.g., `todoService`) | Manages HTTP requests and responses.           |
| <span style="background-color: #d4edda; padding: 3px 6px; border-radius: 4px;">APIClient</span>                         | Interacts with the server-side APIs.           |
