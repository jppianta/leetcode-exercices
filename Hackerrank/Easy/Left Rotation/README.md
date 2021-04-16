# Left Rotation
<div class="challenge_problem_statement"><div class="msB challenge_problem_statement_body"><div class="hackdown-content"><p>A <em>left rotation</em> operation on an array of size <span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-1-Frame"><img src="./assets/svg-0.svg" /></span> shifts each of the array's elements <span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-2-Frame"><img src="./assets/svg-1.svg" /></span> unit to the left. Given an integer, <span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-3-Frame"><img src="./assets/svg-2.svg" /></span>, rotate the array that many steps left and return the result.  </p>

<p><strong>Example</strong> <br>
<span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-4-Frame"><img src="./assets/svg-3.svg" /></span> <br>
<span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-5-Frame"><img src="./assets/svg-4.svg" /></span>  </p>

<p>After <span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-6-Frame"><img src="./assets/svg-5.svg" /></span> rotations, <span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-7-Frame"><img src="./assets/svg-6.svg" /></span>.</p>

<p><strong>Function Description</strong>  </p>

<p>Complete the <em>rotateLeft</em> function in the editor below.  </p>

<p><em>rotateLeft</em> has the following parameters:  </p>

<ul>
<li><em>int d:</em>  the amount to rotate by  </li>
<li><em>int arr[n]:</em> the array to rotate  </li>
</ul>

<p><strong>Returns</strong>  </p>

<ul>
<li><em>int[n]:</em> the rotated array</li>
</ul></div></div></div><div class="challenge_input_format"><div class="msB challenge_input_format_title"><p><strong>Input Format</strong></p></div><div class="msB challenge_input_format_body"><div class="hackdown-content"><p>The first line contains two space-separated integers that denote <span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-1-Frame"><img src="./assets/svg-7.svg" /></span>, the number of integers, and <span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-2-Frame"><img src="./assets/svg-8.svg" /></span>, the number of left rotations to perform. <br>
The second line contains <span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-3-Frame"><img src="./assets/svg-9.svg" /></span> space-separated integers that describe <span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-4-Frame"><img src="./assets/svg-10.svg" /></span>.  </p></div></div></div><div class="challenge_constraints"><div class="msB challenge_constraints_title"><p><strong>Constraints</strong></p></div><div class="msB challenge_constraints_body"><div class="hackdown-content"><ul>
<li><span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-1-Frame"><img src="./assets/svg-11.svg" /></span>  </li>
<li><span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-2-Frame"><img src="./assets/svg-12.svg" /></span>  </li>
<li><span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-3-Frame"><img src="./assets/svg-13.svg" /></span></li>
</ul></div></div></div><div class="challenge_sample_input"><div class="msB challenge_sample_input_title"><p><strong>Sample Input</strong></p></div><div class="msB challenge_sample_input_body"><div class="hackdown-content"><pre><code>5 4
1 2 3 4 5
</code></pre></div></div></div><div class="challenge_sample_output"><div class="msB challenge_sample_output_title"><p><strong>Sample Output</strong></p></div><div class="msB challenge_sample_output_body"><div class="hackdown-content"><pre><code>5 1 2 3 4
</code></pre></div></div></div><div class="challenge_explanation"><div class="msB challenge_explanation_title"><p><strong>Explanation</strong></p></div><div class="msB challenge_explanation_body"><div class="hackdown-content"><p>To perform <span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-1-Frame"><img src="./assets/svg-14.svg" /></span> left rotations, the array undergoes the following sequence of changes: </p>

<p></p><div class="MathJax_SVG_Display" style="text-align: center;"><span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-2-Frame"><img src="./assets/svg-15.svg" /></span></div><p></p></div></div></div>