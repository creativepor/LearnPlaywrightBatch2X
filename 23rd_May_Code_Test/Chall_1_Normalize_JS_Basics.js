function normalizeJsBasicsLabel (label)
{
    return 'js-basic-' + label.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
}