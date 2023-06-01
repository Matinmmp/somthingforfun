$(document).ready(function () {
    const list = []
    const name = $('#name')[0]
    const family = $('#family')[0]
    const email = $('#email')[0]
    const phone = $('#phone')[0]
    const sub = $('#sub')

    sub.on('click', function (e) {
        e.preventDefault();
        if (checkInputs() && just_persian(name) && just_persian(family)) {
            const obj = {
                name: name.value,
                family: family.value,
                email: email.value,
                phone: phone.value
            }
            $('#tbody').append(generateTableRow(obj))
        }
    });

    function just_persian(element) {
        const p = /^[\u0600-\u06FF\s]+$/;
        if (!p.test(element.value)) {
            $(element).addClass('border-danger');
            $(element).parent().find('div').removeClass('d-none')
            return false;
        }
        $(element).removeClass('border-danger');
        $(element).parent().find('div').addClass('d-none');
        return true;
    }

    function checkInputs() {
        $(name).removeClass('border-danger');
        $(name).parent().find('div').addClass('d-none');

        $(family).removeClass('border-danger');
        $(family).parent().find('div').addClass('d-none');

        $(email).removeClass('border-danger');
        $(email).parent().find('div').addClass('d-none');

        $(phone).removeClass('border-danger');
        $(phone).parent().find('div').addClass('d-none');

        if (name.value === '') {
            $(name).addClass('border-danger');
            $(name).parent().find('div').removeClass('d-none')
        }
        if (family.value === '') {
            $(family).addClass('border-danger');
            $(family).parent().find('div').removeClass('d-none')
        }
        if (email.value === '') {
            $(email).addClass('border-danger');
            $(email).parent().find('div').removeClass('d-none')
        }
        if (phone.value === '') {
            $(phone).addClass('border-danger');
            $(phone).parent().find('div').removeClass('d-none')
        }
        if (phone.value === '' || email.value === '' ||
            family.value === '' || name.value === '') return false;

        return true;
    }

    function generateTableRow(item) {
        list.push(item);
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td class="delete"><i class="fa fa-close" style="cursor: pointer;">Del</i></td>
        <td class="edit"><i class="fa fa-edit" style="cursor: pointer;">Edit</i></td>
        <td>${list.length}</td>
        <td class="name">${item.name}</td>
        <td class="family">${item.family}</td>
        <td class="email">${item.email}</td>
        <td class="phone">${item.phone}</td>
        `;
        $(tr).find('.delete').on('click', function () {
            tr.remove();
        });
        $(tr).find('.edit').on('click', function () {
            $(tr).find('.name').text(prompt('name', item.name));
            $(tr).find('.family').text(prompt('family', item.family));
            $(tr).find('.email').text(prompt('email', item.email));
            $(tr).find('.phone').text(prompt('phone', item.phone));
        });
        console.log(tr);
        return tr;
    }
});
