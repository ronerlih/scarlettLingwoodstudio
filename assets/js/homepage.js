const projectContainer = document.querySelector("#projects");
console.log(homepage)
projectContainer.innerHTML = homepage.projects.map(
   project => 
   `
   <a href=${ project.url }>
				<table>
					<tr>
						<td class="featured-img">
							<img src=${ project.thumb } title="Large Scale Drawing" />
						</td>
					</tr>
					<tr>
						<td>
							<span>${ project.name }</span>
						</td>
					</tr>
				</table>
			</a>

   `).join('');
