interface Env {
  RESEND_API_KEY: string;
}

export const onRequestPost = async (context: any) => {
  try {
    const formData = await context.request.formData();
    const nombre = formData.get("nombre")?.toString() || "";
    const empresa = formData.get("empresa")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const telefono = formData.get("telefono")?.toString() || "";
    const detalles = formData.get("detalles")?.toString() || "";

    const resendApiKey = context.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return new Response(JSON.stringify({ error: "Missing Resend API Key" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1C2740;">Nueva solicitud de contacto (Mr. Transfer Lab)</h2>
        <p>Has recibido un nuevo mensaje desde el formulario web:</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Nombre:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${nombre}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Empresa:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${empresa || '-'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Teléfono:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${telefono || '-'}</td>
          </tr>
        </table>
        <h3 style="margin-top: 20px;">Detalles:</h3>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px;">
          ${detalles.replace(/\n/g, "<br>")}
        </div>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Mr. Transfer Lab <no-reply@mrtransferlab.com>",
        to: ["info@mrtransferlab.com"],
        reply_to: email,
        subject: `Nueva solicitud B2B de ${nombre} ${empresa ? `(${empresa})` : ""}`,
        html: htmlContent,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Resend API Error:", errorData);
      return new Response(JSON.stringify({ error: "Error al enviar el correo con Resend" }), {
        status: res.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error("Function Error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
