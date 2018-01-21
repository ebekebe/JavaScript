class API {
    constructor(base, key) {
        this.base = base;
        this.key = key;

        this.buildURI = partial => 
            `${this.base}${partial}&key=${this.key}`;

        this.makeRequest = request => $.ajax({
            url: this.buildURI(request),
            dataType: 'json',
            method: 'GET'
        });
    }
}