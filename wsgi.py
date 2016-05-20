"""
WSGI config for gettingstarted project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.6/howto/deployment/wsgi/
"""

import os
from __init__ import app

port = int(os.environ.get("PORT", 5000))
app.run(host='0.0.0.0', port=port)
