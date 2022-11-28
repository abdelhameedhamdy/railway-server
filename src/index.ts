import { serve } from "https://deno.land/std@0.120.0/http/server.ts";

function handler(req: Request): Response {
  return new Response(
    `<pre style="font-size:1em;">
       DENO_REGION=<br>
       ${Deno.env.get("DENO_REGION")}
     </pre>`,
    { headers: { "content-type": "text/html" } }
  );
}

console.log("Listening on http://localhost:8000");
await serve(handler);
