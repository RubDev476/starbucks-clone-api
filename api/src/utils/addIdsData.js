const { v4: uuidv4 } = require('uuid'); // Si quieres usar UUIDs
const fs = require('fs');

// Cargar el JSON original
const jsonData = require('../../datav2.json');

// Función recursiva para asignar IDs
//@ts-ignore
function addIds(data) {
    if (Array.isArray(data)) {
        // @ts-ignore
        return data.map((item, index) => ({
            _id: uuidv4(),
            ...item,
            ...(item.categories ? { categories: addIds(item.categories) } : {}),
            ...(item.items ? { items: addIds(item.items) } : {}),
            ...(item.types ? { types: addIds(item.types) } : {}),
        }));
    }
    return data;
}

// Agregar IDs al JSON
const updatedData = { ...jsonData, menu: { categories: addIds(jsonData.menu.categories) } };

// Guardar el nuevo JSON con IDs
fs.writeFileSync('./datav2_with_ids.json', JSON.stringify(updatedData, null, 2));

console.log('IDs añadidos y JSON guardado como datav2_with_ids.json');
