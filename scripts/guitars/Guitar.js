export const Guitar = guitarObject => {
    return `
    <article class=guitarInfo>
    <h4>${guitarObject.make} ${guitarObject.model}</h4>
    <p>color: ${guitarObject.color}</p>
    <p>year: ${guitarObject.year}</p>
    </article>
    `
}