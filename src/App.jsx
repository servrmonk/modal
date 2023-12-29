import { useState } from "react";
import MyModal from "./MyModal";

function App() {
  const [showMyModal, setShowMyModal] = useState(false);

  const handleOnClose = () => {
    setShowMyModal(showMyModal => !showMyModal);
  };
  return (
    <div className="bg-blue-400 bg-opacity-30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mx-auto">
          <div className="text-center py-3">
            <button
              onClick={() => setShowMyModal(true)}
              className="bg-red-400 text-white px-3 py-2 rounded hover:scale-95 transition text-xl"
            >
              Open Modal
            </button>
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatem, natus molestiae. Officiis deserunt odit saepe tempore
            voluptatem labore ratione debitis excepturi veritatis sint libero
            molestiae temporibus quae natus neque in consectetur, aliquid optio
            impedit porro. Aperiam quos repudiandae cum modi excepturi, dolores,
            quia numquam placeat harum optio quasi, inventore minus nihil
            architecto nulla! Omnis ea esse alias rerum exercitationem cumque
            recusandae, laudantium nisi ullam ipsa, ad voluptatum! Aperiam,
            perspiciatis enim consequatur, maxime culpa quam similique aliquid
            debitis animi tenetur quaerat expedita! Explicabo blanditiis optio
            possimus quasi ut ea est, quam, dolorum enim nobis officiis sequi
            autem illo. Id quia possimus provident necessitatibus, suscipit
            laudantium repudiandae illo accusamus natus libero porro molestiae
            voluptates. Reiciendis eum illum saepe temporibus dolorem voluptates
            molestias earum sequi laborum et facere nobis hic ad rem nisi, quasi
            velit autem, quibusdam labore placeat iusto dicta quam eius
            dignissimos! Maiores debitis iure rerum eaque provident maxime
            voluptatum sit ratione omnis iste blanditiis, quas libero
            accusantium velit tenetur ipsa necessitatibus temporibus cum aliquid
            commodi, magni minima! Velit ipsum amet et eum ipsam consectetur
            aliquam, qui blanditiis dolores ipsa consequuntur officia veritatis
            quisquam eveniet minima fuga praesentium corporis dolorem non, quasi
            mollitia voluptates ut consequatur soluta. Distinctio dolorem, iusto
            reiciendis nihil, suscipit sequi sit excepturi blanditiis similique
            debitis beatae delectus error maiores temporibus dolorum fugiat
            eveniet magni tempora incidunt, tempore porro laboriosam quasi unde?
            Nobis, aliquam magni! In fugit distinctio provident alias veniam
            repudiandae qui rem. Totam optio expedita consequuntur dignissimos
            iusto doloribus magnam ipsam ipsum excepturi, quam, voluptatibus
            eligendi quae dolor? Sapiente dolorem aut magni odio, unde
            exercitationem saepe. Ex sunt tempore officiis culpa delectus itaque
            fugit distinctio. Quia quod est cumque molestias, eaque praesentium
            consectetur optio aliquam quos nemo aliquid, exercitationem laborum
            saepe? Officiis non, numquam obcaecati a harum, cupiditate impedit
            facere odit dolore hic quidem quas, nesciunt incidunt. Reprehenderit
            tenetur illo dolore dolores quas recusandae repudiandae qui eveniet
            magni quidem rem laborum minima similique officiis soluta
            perspiciatis dicta sunt, fugiat, aspernatur voluptas veritatis
            voluptatem nostrum quam. At, repudiandae eius expedita blanditiis
            nesciunt voluptas fugiat recusandae temporibus ullam harum accusamus
            dolorem ratione consectetur, sunt iusto aut rerum quisquam
            distinctio possimus placeat. Asperiores cupiditate temporibus
            dignissimos cum voluptatum nesciunt aut ab. Fugiat minima quaerat
            porro et eaque libero accusamus hic iusto minus debitis assumenda
            similique ab, exercitationem praesentium, sequi neque labore aut.
            Eos, perspiciatis! Tempora culpa nulla nam quisquam excepturi
            consequatur autem deleniti est dicta architecto, dignissimos non
            accusantium laborum recusandae qui a facere magni facilis
            laudantium? Voluptatem, iusto dicta? Accusamus pariatur assumenda
            quibusdam, qui architecto omnis repellendus dignissimos fugiat
            adipisci error cum culpa animi impedit? Eveniet quam incidunt
            debitis omnis praesentium, exercitationem fugiat unde laudantium
            architecto consequatur dolores alias suscipit, laboriosam vitae
            rerum dolorem minus aliquam asperiores adipisci, at odio iure! Quia
            voluptate deleniti praesentium id atque impedit earum libero
            excepturi pariatur fugiat ullam culpa enim delectus eaque error
            quis, explicabo labore unde molestias, rem incidunt cupiditate iste
            distinctio. Dolores exercitationem corrupti, veritatis maxime beatae
            harum qui. Possimus velit qui aperiam explicabo sint, eaque a magni
            minus debitis!
          </p>
        </div>
      </div>
      <MyModal onClose={handleOnClose} visible={showMyModal} />
    </div>
  );
}

export default App;
