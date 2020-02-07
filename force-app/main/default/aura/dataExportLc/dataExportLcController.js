({
    handleClickOrg: function (cmp, evt, helper) {
        
        cmp.set("v.showOrgSelection", false);
        cmp.set("v.showUserNameSelection", true);
    },

    onChange : function (cmp, evt, helper) {
        alert(cmp.find('select').get('v.value'));
        var org = cmp.find('select').get('v.value');
        cmp.set("v.selectedOrg", org);
    },

    handleClickDetailsBack: function (cmp, evt, helper) {
        cmp.set("v.showOrgSelection", true);
        cmp.set("v.showUserNameSelection", false);
    },

    handleClickDetailsFarward: function (cmp, evt, helper) {
        cmp.set("v.showOrgSelection", false);
        cmp.set("v.showUserNameSelection", false);
    }
})