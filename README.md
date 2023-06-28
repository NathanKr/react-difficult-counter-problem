<h2>Motivation</h2>
Show a difficult react problem and solution


<h2>The problem</h2>
react re-render if the DOM is changed .But even though we insert to the DOM different instances of the component Counter react think its the same because the DOM was not changed. If the DOM did not change he think its the same instance and keep its state

<h2>The solution</h2>
use key per Counter component. key will tell react that its not the same element even though it has the same DOM

<h2>References</h2>
<a href='https://youtu.be/vXJkeZf-4-4'>wds</a>