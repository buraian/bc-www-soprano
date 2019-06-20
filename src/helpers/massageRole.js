/**
 * Function massageRole
 *
 * Return a role in active language.
 *
 * @param {String} role The role as received from API
 */
export default function (role) {
    if (role === 'Design') return 'Designer'
    if (role === 'Development') return 'Developer'
    return role
};
