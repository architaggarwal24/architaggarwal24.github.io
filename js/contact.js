/* Contact form — Netlify Forms submission with fetch + UI feedback */

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const successEl = document.getElementById('form-success');
    if (!form) return;

    // Validation helpers
    const rules = {
        name:    v => v.trim().length >= 2,
        email:   v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        subject: v => v.trim().length >= 3,
        message: v => v.trim().length >= 10,
    };
    const msgs = {
        name:    'Please enter your name (min 2 characters)',
        email:   'Please enter a valid email address',
        subject: 'Please enter a subject (min 3 characters)',
        message: 'Please enter a message (min 10 characters)',
    };

    function showError(input, msg) {
        clearError(input);
        const err = document.createElement('div');
        err.className = 'field-error';
        err.textContent = msg;
        err.style.cssText = 'color:var(--color-error);font-size:11px;margin-top:4px;font-family:var(--font-mono)';
        input.parentElement.appendChild(err);
        input.style.borderColor = 'var(--color-error)';
    }

    function clearError(input) {
        const prev = input.parentElement.querySelector('.field-error');
        if (prev) prev.remove();
        input.style.borderColor = '';
    }

    function validate() {
        let ok = true;
        ['name', 'email', 'subject', 'message'].forEach(id => {
            const el = form.querySelector('#' + id);
            if (!el) return;
            if (!rules[id](el.value)) {
                showError(el, msgs[id]);
                ok = false;
            } else {
                clearError(el);
            }
        });
        return ok;
    }

    // Encode for Netlify fetch submission
    function encode(data) {
        return Object.keys(data)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
            .join('&');
    }

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        if (!validate()) return;

        const submitBtn = form.querySelector('[type="submit"]');
        submitBtn.textContent = 'Sending…';
        submitBtn.disabled = true;

        const data = {
            'form-name': 'contact',
            name:    form.querySelector('#name')?.value || '',
            email:   form.querySelector('#email')?.value || '',
            subject: form.querySelector('#subject')?.value || '',
            message: form.querySelector('#message')?.value || '',
        };

        try {
            const res = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encode(data),
            });

            if (res.ok || res.status === 200 || res.redirected) {
                // Success
                form.style.display = 'none';
                if (successEl) successEl.style.display = 'block';
            } else {
                throw new Error('Server returned ' + res.status);
            }
        } catch (err) {
            // Netlify Forms returns 200 when hosted; locally show success anyway
            // since the form will work once deployed
            if (window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                // Dev mode — show success UI so you can test the look
                form.style.display = 'none';
                if (successEl) successEl.style.display = 'block';
            } else {
                submitBtn.textContent = 'Send Message →';
                submitBtn.disabled = false;
                const errDiv = document.createElement('div');
                errDiv.style.cssText = 'color:var(--color-error);font-size:13px;margin-top:12px;font-family:var(--font-mono)';
                errDiv.textContent = '⚠ Something went wrong. Try emailing directly: architarwl123@gmail.com';
                form.appendChild(errDiv);
            }
        }
    });
});