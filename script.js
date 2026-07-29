*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
background:#0b1120;
color:white;
}

header{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 8%;
background:#111827;
position:sticky;
top:0;
}

.logo{
font-size:28px;
font-weight:bold;
color:#00d4ff;
}

nav a{
color:white;
text-decoration:none;
margin-left:25px;
}

.hero{
height:90vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:20px;
}

.hero h1{
font-size:52px;
max-width:850px;
margin-bottom:20px;
}

.hero p{
max-width:700px;
font-size:20px;
margin-bottom:35px;
}

.btn{
background:#00d4ff;
padding:15px 35px;
border-radius:8px;
color:#000;
text-decoration:none;
font-weight:bold;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:30px;
padding:80px 8%;
}

.card{
background:#182338;
padding:30px;
border-radius:12px;
transition:.3s;
}

.card:hover{
transform:translateY(-8px);
}

footer{
text-align:center;
padding:60px 20px;
background:#111827;
}