test('test toBe', () => {
    const name = 'Nael'
    const hello = `Hello ${name}`

    expect(hello).toBe('Hello Nael')
})

test('test toEqual', () => {
    let person = { id: 'nael' }
    Object.assign(person, { name: 'Nael' })

    expect(person).toEqual({
        id: 'nael',
        name: 'Nael'
    })
})